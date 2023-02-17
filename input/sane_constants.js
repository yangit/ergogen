const yaml = require('js-yaml');
const fs   = require('fs');

const assert = (exp, msg) => {
  if (!exp) {
    console.log(new Error(msg));
    process.exit(1);      
  }
}

const keyRegexp = /^(C\d+)(R\d+)$/
const args = [...process.argv]
args.unshift()
args.unshift()
try {
    const docs = args.map(file=>yaml.load(fs.readFileSync(`${__dirname}/${process.argv[2]}`, 'utf8')));    
    
    const common = {}
    console.log(docs.map(({units})=>units));
      docs.forEach(doc=>{
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