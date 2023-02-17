const yaml = require('js-yaml');
const fs = require('fs');
const _ = require('lodash');
const { leftShift } = require('mathjs');
const leftFile = `${__dirname}/config-flactyl-left.yaml`;
const rightFile = `${__dirname}/config-flactyl-right.yaml`;




const left = yaml.load(fs.readFileSync(leftFile).toString('utf8'))
const right = _.pick(left, ['units', 'points', 'outlines'])
// reverse columns
right.points.zones.main.columns = Object.keys(left.points.zones.main.columns).reverse().reduce((sum = {}, value) => ({ ...sum, [value]: left.points.zones.main.columns[value] }), {})

// shift stagger
const staggers = []
Object.keys(right.points.zones.main.columns).forEach(key => {
    staggers.push(`${right.points.zones.main.columns[key]?.key?.stagger}*-1`)
})
staggers.pop()
staggers.unshift(0)
Object.keys(right.points.zones.main.columns).forEach((key) => {
    _.set(right, `points.zones.main.columns[${key}].key.stagger`, staggers.shift())
})

// reverse units
right.units.rR=-1
right.units.fR=180
// Object.keys(right.units).forEach((key) => {
//     if (key.endsWith('R')) {
//         right.units[key] = `(${right.units[key]})*-1`
//     }
// }
// )
right.pcbs = { right: left.pcbs.left };

// ['C0R0', 'C0R1', 'C0R2'].forEach(console.log);
['C0R0', 'C0R1', 'C0R2', 'C2R0', 'C3R0', 'C3R1'].forEach((key) => {
    _.set(right, `pcbs.right.footprints.${key}.where.rotate`, _.get(right, `pcbs.right.footprints.${key}.where.rotate`, 0) - 180)
    _.set(right, `pcbs.right.footprints.${key}diode.where.rotate`, _.get(right, `pcbs.right.footprints.${key}diode.where.rotate`, 0) - 180)
    _.set(right, `pcbs.right.footprints.${key}diode.where.shift`, _.get(right, `pcbs.right.footprints.${key}diode.where.shift`, [0,0]).map(shift=>`-1*(${shift})`));
})


console.log(left);
fs.writeFileSync(rightFile, yaml.dump(right))
// console.log(right);


