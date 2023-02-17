const routed = `${__dirname}/routed`;
const pcbs = `${__dirname}/../output/flactyl/pcbs`;
const fs = require('fs');
const extension ='.kicad_pcb'
const segmentRegex = /\(segment .+\)\)\n/g
fs.readdirSync(routed).filter((file) => file.endsWith(extension)).forEach(file => {
    console.log(file);
    const fileContents=fs.readFileSync(`${routed}/${file}`).toString('utf8').split('\n')
    const segments=fileContents.filter(line => line.startsWith('  (segment (start'))
    const pcbFilePath = `${pcbs}/${file}`
    const pcbFile = fs.readFileSync(pcbFilePath).toString('utf8').split('\n')
    pcbFile.splice(pcbFile.length - 3, 0, ...segments)    

    fs.writeFileSync(pcbFilePath,pcbFile.join('\n'));
});