const yaml = require('js-yaml');
const fs   = require('fs');

const assert = (exp, msg) => {
  if (!exp) {
    console.log(new Error(msg));
    process.exit(1);
  }
}

const keyRegexp = /^(C\d+)(R\d+)$/
try {
    const doc = yaml.load(fs.readFileSync(`${__dirname}/${process.argv[2]}`, 'utf8'));    
    Object.keys(doc.pcbs).forEach((pcb)=>{
      const keys = Object.keys(doc.pcbs[pcb].footprints).filter((footprintName)=>keyRegexp.test(footprintName))
      keys.forEach((key=>{
        assert(doc.pcbs[pcb].footprints[`${key}diode`],`diode missing for ${key}`)
        assert(doc.pcbs[pcb].footprints[key].params.from===key.match(keyRegexp)[1],`from is wrong for ${key}`)
        assert(doc.pcbs[pcb].footprints[key].params.to===`${key}D`,`to is wrong for ${key}`)
        assert(doc.pcbs[pcb].footprints[key].params.label===key,`label is wrong for ${key}`)
        assert(doc.pcbs[pcb].footprints[`${key}diode`].params.from===`${key}D`,`diode from wrong for ${key}`)
        assert(doc.pcbs[pcb].footprints[`${key}diode`].params.to===key.match(keyRegexp)[2],`diode to wrong for ${key}`)
        assert(doc.pcbs[pcb].footprints[key].where.ref===doc.pcbs[pcb].footprints[`${key}diode`].where.ref,`ref is wrong for ${key}`)
        if (doc.pcbs[pcb].footprints[key].where.rotate||doc.pcbs[pcb].footprints[`${key}diode`].where.rotate){
        assert(doc.pcbs[pcb].footprints[key].where.rotate===doc.pcbs[pcb].footprints[`${key}diode`].where.rotate,`rotate is wrong for ${key}`)
      }
      }))
      console.log(keys);
    })
  } catch (e) {
    console.log(e);
  }