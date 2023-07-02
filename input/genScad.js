const { match } = require('assert');
const fs = require('fs');
const _ = require('lodash');
const path = process.argv[2];
const file = path.split('/').pop();
const fileOnly = file.split('.')[0];
const chocRegexp = /\(tags "kailh,choc"\)\n *\(at (-*\d+ -*\d+ -*\d+)\)/g
// const chocRegexp = /\(at (-*\d+ -*\d+ -*\d+)\)\n *\(tags "kailh,choc"\)/g
const contents = fs.readFileSync(path).toString('utf8')
const keysArray = [...contents.matchAll(chocRegexp)].map(match => match[1].split(' ').map(int=>parseInt(int,10)));
console.log(`${fileOnly}_keys_xy=${JSON.stringify(keysArray)};`);

