const fs = require('fs');
const yaml = require('js-yaml');
const _ = require('lodash');
const templates = `${__dirname}/tpl`;
const output = `${__dirname}`;
const keyReg = /C(\d+)_R(\d+)/
const extension = '.yaml'
fs.readdirSync(templates).filter((file) => file.endsWith(extension)).forEach(file => {
    const fileOnly = file.substring(0, file.length - 5);
    const json = yaml.load(fs.readFileSync(`${templates}/${file}`).toString('utf8'))
    _.get(json, 'yanGenerator.holes', []).forEach((hole, index) => {

        const holeName = `_gen_hole${index}`;
        const caseName = `${fileOnly}_case`;
        const screwName = `${fileOnly}_screw`;
        const screwHolesName = `${fileOnly}_screw_holes`;

        const caseArray = json.outlines[caseName];
        delete json.outlines[caseName];
        const screwArray = json.outlines[screwName];
        delete json.outlines[screwName];
        const screwHolesArray = json.outlines[screwHolesName];
        delete json.outlines[screwHolesName];

        json.outlines[holeName] = [{
            what: 'circle',
            where: hole,
            radius: 'mh_radius'
        }];

        caseArray.push(`-${holeName}`);
        screwHolesArray.push(`${holeName}`);

        screwArray.push(`${holeName}lr`);
        screwArray.push(`-${holeName}sr`);
        // screwArray.push(`-${holeName}`);

        json.outlines[`${holeName}lr`] = [{
            what: 'rectangle',
            where: hole,
            size: ['screw_nut_cutout_l', 'screw_nut_cutout_l'],
        }];
        json.outlines[`${holeName}sr`] = [{
            what: 'rectangle',
            where: hole,
            size: ['screw_nut_cutout', 'screw_nut_cutout'],
        }];
       
        json.outlines[`${fileOnly}_case`] = json.outlines[`${fileOnly}_case`]
        json.outlines[caseName] = caseArray;
        json.outlines[screwName] = screwArray;
        json.outlines[screwHolesName] = screwHolesArray;
        json.pcbs[fileOnly].footprints[holeName] = {
            what: 'f_npth',
            where: hole,
        }
    })
    _.get(json, 'yanGenerator.keys', []).forEach(([key, shallRotate], index) => {

        const [, col, row] = key.match(keyReg);
        const keyDesignation = `C${col}_R${row}`
        const rotate = shallRotate ? 180 : 0
        json.pcbs[fileOnly].footprints[keyDesignation] = {
            what: 'f_choc',
            where: {
                ref: `main_${keyDesignation}`,
                rotate
            },
            params: {
                from: `C${col}`,
                to: `${keyDesignation}D`,
                label: keyDesignation
            }
        }
        json.pcbs[fileOnly].footprints[`${keyDesignation}diode`] = {
            what: 'f_diode',
            where: {
                ref: `main_${keyDesignation}`,
                shift: [`${shallRotate ? '-' : ''}diode_x`, `${shallRotate ? '-' : ''}diode_y`],
                rotate
            },
            params: {
                from: `${keyDesignation}D`,
                to: `R${row}`,
            }
        }

    })
    fs.writeFileSync(`${output}/${file}`, yaml.dump(json, { noRefs: true }))
});
