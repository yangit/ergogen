const yaml = require('js-yaml');
const fs = require('fs');
const _ = require('lodash');

const assert = (exp, msg) => {
  if (!exp) {
    console.log(new Error(msg));
    process.exit(1);
  }
}

const keyRegexp = /^(C\d+)_(R\d+)$/

fs.readdirSync(__dirname).filter((file) => file.endsWith('.yaml')).forEach(file => {
  const doc = yaml.load(fs.readFileSync(`${__dirname}/${file}`, 'utf8'));
  Object.keys(doc.pcbs).forEach((pcb) => {
    const keys = Object.keys(doc.pcbs[pcb].footprints).filter((footprintName) => keyRegexp.test(footprintName))
    keys.forEach((key => {
      assert(doc.pcbs[pcb].footprints[`${key}diode`], `diode missing for ${key}`)
      assert(doc.pcbs[pcb].footprints[key].params.from === key.match(keyRegexp)[1], `from is wrong for ${key}`)
      assert(doc.pcbs[pcb].footprints[key].params.to === `${key}D`, `to is wrong(${doc.pcbs[pcb].footprints[key].params.to}) for ${key}D`)
      assert(doc.pcbs[pcb].footprints[key].params.label === key, `label is wrong for ${key}`)
      assert(doc.pcbs[pcb].footprints[`${key}diode`].params.from === `${key}D`, `diode from wrong for ${key}`)
      assert(doc.pcbs[pcb].footprints[`${key}diode`].params.to === key.match(keyRegexp)[2], `diode to wrong for ${key}`)
      assert(doc.pcbs[pcb].footprints[key].where.ref === doc.pcbs[pcb].footprints[`${key}diode`].where.ref, `ref is wrong for ${key}`)
      if (doc.pcbs[pcb].footprints[key].where.rotate || doc.pcbs[pcb].footprints[`${key}diode`].where.rotate) {
        assert(doc.pcbs[pcb].footprints[key].where.rotate === doc.pcbs[pcb].footprints[`${key}diode`].where.rotate, `rotate is wrong for ${key}`)
      }
    }))

    //sane mount holes
    Object.keys(doc.pcbs[pcb].footprints)
      .filter(footprintName => footprintName.startsWith('mount_hole'))
      .forEach((footprintName) => {
        const caseName = Object.keys(doc.outlines).find(key => key.endsWith('case'))
        if (!doc.outlines[caseName].includes(`-_${footprintName}`)) {
          console.log(doc.outlines[caseName])
          throw new Error(`Hole ${footprintName} is not excuded from case outline`)
        }
        const should = { '0': { what: 'circle', where: doc.pcbs[pcb].footprints[footprintName].where } }
        const is = _.omit(doc.outlines[`_${footprintName}`], '[0].radius')
        if (!_.isEqual(is, should)) {
          console.log(is, should);
          throw new Error(`mount hole not sane: ${footprintName} file: ${file}`)
        }
      })

    //sane connector cutouts
    if (doc.pcbs[pcb].footprints.connector_thumb) {
      const caseName = Object.keys(doc.outlines).find(key => key.endsWith('case'))
      if (!doc.outlines[caseName].includes('-_connector_thumb')) {
        console.log(doc.outlines[caseName])
        throw new Error(`_connector_thumb is not excluded from case outline ${file}`)
      }
    }
    if (doc.pcbs[pcb].footprints.batt) {
      const caseName = Object.keys(doc.outlines).find(key => key.endsWith('case'))
      if (!doc.outlines[caseName].includes('-_batt')) {
        console.log(doc.outlines[caseName])
        caseName
        throw new Error(`batt is not excluded from case outline ${file}`)
      }
    }
  })
})