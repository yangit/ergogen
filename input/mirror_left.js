const yaml = require('js-yaml');
const fs = require('fs');
const _ = require('lodash');
const { leftShift } = require('mathjs');
const leftFile = `${__dirname}/left.yaml`;
const rightFile = `${__dirname}/right.yaml`;




const left = yaml.load(fs.readFileSync(leftFile).toString('utf8'))
const right = _.pick(left, ['units', 'points'])

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

right.pcbs = { right: left.pcbs.left };

['C0R0', 'C0R1', 'C0R2', 'C2R0', 'C3R0', 'C3R1', 'C4R2'].forEach((key) => {
    _.set(right, `pcbs.right.footprints.${key}.where.rotate`, _.get(right, `pcbs.right.footprints.${key}.where.rotate`, 0) - 180)
    _.set(right, `pcbs.right.footprints.${key}diode.where.rotate`, _.get(right, `pcbs.right.footprints.${key}diode.where.rotate`, 0) - 180)
    _.set(right, `pcbs.right.footprints.${key}diode.where.shift`, _.get(right, `pcbs.right.footprints.${key}diode.where.shift`, [0,0]).map(shift=>`-1*(${shift})`));
})

//#replace left_ to right_ in outlines
right.outlines={}
Object.keys(left.outlines).forEach(outline=>{
    if (outline.startsWith('left_')) {
        right.outlines[`right_${outline.substr(5)}`]= left.outlines[outline]
    } else {
        right.outlines[outline]= left.outlines[outline]
    }
})
right.outlines.right_case=right.outlines.right_case.map((outline)=>{
    if (outline.startsWith('left_')) {
        return `right_${outline.substr(5)}`
    } else {
        return outline
    }
})
right.outlines.right_case_nano = right.outlines.right_case_nano.map((outline) => {
    if (outline.startsWith('left_')) {
        return `right_${outline.substr(5)}`
    } else {
        return outline
    }
})
right.pcbs.right.outlines.pcb_edgecut.outline = `right_${left.pcbs.left.outlines.pcb_edgecut.outline .substr(5)}`
right.pcbs.right.outlines.case.outline = `right_${left.pcbs.left.outlines.case.outline .substr(5)}`
right.pcbs.right.outlines.keycaps.outline = `right_${left.pcbs.left.outlines.keycaps.outline .substr(5)}`


console.log(left);
fs.writeFileSync(rightFile, yaml.dump(right))



