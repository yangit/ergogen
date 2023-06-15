const fs = require('fs');
const { parse } = require('csv-parse/sync');
const { log } = require('console');
const refRegexp = /\((at.+)\) *\n *\(fp_text reference "([a-zA-Z0-9]*)"/g

var myformat = new Intl.NumberFormat('en-US', {
    minimumIntegerDigits: 1,
    minimumFractionDigits: 6
});

const zeroToZero = (num) => num === 0 ? 0 : num
const normalizeDeg = (deg) => (deg + 3600) % 360
console.log(`${__dirname}/../temp/`)
yamlFileName = process.argv[2];

const file = yamlFileName.substring(0, yamlFileName.length - 5)
const bom = fs.readFileSync(`${__dirname}/bom/${file}.csv`, 'utf8')
const bomItems = parse(bom, {
    columns: true,
    skip_empty_lines: true
}).flatMap(({ Designator }) => Designator.split(','));

const pcbText = fs.readFileSync(`${__dirname}/../output/${file}/${file}.kicad_pcb`, 'utf8')
const output_front = [`Designator,Mid X,Mid Y,Layer,Rotation`, ...[...pcbText.matchAll(refRegexp)].filter((match) => bomItems.includes(match[2])).map(match => {
    const [, x, y, rot] = match[1].split(' ');
    const itemRef = match[2];
    return `${itemRef}, ${myformat.format(x)}mm, ${myformat.format(y)}mm, Bottom, ${rot}`
})]
// console.log(bomItems);

const output_back = [`Designator,Mid X,Mid Y,Layer,Rotation`, ...[...pcbText.matchAll(refRegexp)].filter((match) => bomItems.includes(match[2])).map(match => {
    const itemRef = match[2];
    const [, x, y, rot] = match[1].split(' ');

    return `${itemRef}, ${myformat.format(x)}mm, ${myformat.format(zeroToZero(y * -1))}mm, Bottom, ${normalizeDeg(parseInt(rot, 10) * -1 + 180)}`
})]



// fs.writeFileSync(`${__dirname}/../output/${file}/${file}_cpl.csv`, output_front.join('\n'))
fs.writeFileSync(`${__dirname}/../output/${file}/${file}_cpl_back.csv`, output_back.join('\n'))



// `
// Designator,Mid X,Mid Y,Layer,Rotation
// D1,-11.000000mm,29.000000mm,Top,90
// D2,-28.000000mm,29.000000mm,Top,90
// D3,-45.000000mm,29.000000mm,Top,90
// D4,-6.000000mm,7.000000mm,Top,270
// `

// (tags "Diode SOD523")
// (attr smd)
// (at - 3.6 - 36.6 180)
// (fp_text reference "D1"(at 0 - 2.5)(layer "B.SilkS") hide(effects(font(size 1 1)(thickness 0.15))))
// (fp_text value "D_SOD-523"(at 0 1.4)(layer "B.Fab")(effects(font(size 1 1)(thickness 0.15))))
// (fp_line(start 0.7 0.6)(end - 1.15 0.6)(layer "B.SilkS")(width 0.12))
// (fp_line(start 0.7 - 0.6)(end - 1.15 - 0.6)(layer "B.SilkS")(width 0.12))
// (fp_line(star