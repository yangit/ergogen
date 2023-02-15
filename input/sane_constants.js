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
    const doc1 = yaml.load(fs.readFileSync(`${__dirname}/${process.argv[2]}`, 'utf8'));
    const doc2 = yaml.load(fs.readFileSync(`${__dirname}/${process.argv[3]}`, 'utf8'));
    const doc3 = yaml.load(fs.readFileSync(`${__dirname}/${process.argv[4]}`, 'utf8'));
    const common = {}
    console.log(Object.keys(doc1.units),Object.keys(doc2.units),Object.keys(doc3.units));
      [doc1,doc2,doc3].forEach(doc=>{
        Object.keys(doc.units).forEach((key)=>{
          if (typeof common[key]=== 'undefined') {
            common[key]=doc.units[key]
          }
          assert(common[key]===doc.units[key],`Key ${key} is not equal`)
        })
      })
    
  } catch (e) {
    console.log(e);
  }