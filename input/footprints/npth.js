module.exports = {
    params: {    
    designator: 'H', 
        dia: 2.2,
    },
    body: p => {
        // const extraRadius  = (p.dia+1)/2
        const extraRadius  = 2.5 // beacuse screw head is 3.5mm and nut is 3mm we need to stay safe at 5mm diameter
        return `(footprint "MountingHole_${p.dia}mm_M2" (generator pcbnew)
        (layer "F.Cu")
        ${p.at /* parametric position */} 
        (tedit 62C29C08)
        (descr "Mounting Hole ${p.dia}mm, no annular, M2")
        (tags "mounting hole ${p.dia}mm no annular m2")
        (attr exclude_from_pos_files exclude_from_bom)
        (fp_text reference "${p.ref}" (at 0 -3.2) ${p.ref_hide} (layer "F.Fab") ${p.ref_hide}
          (effects (font (size 1 1) (thickness 0.15))))
        (fp_circle (center 0 0) (end ${extraRadius} 0) (layer "Cmts.User") (width 0.15) (fill none))
        (fp_circle (center 0 0) (end ${extraRadius} 0) (layer "B.CrtYd") (width 0.05) (fill none))
        (fp_circle (center 0 0) (end ${extraRadius} 0) (layer "F.CrtYd") (width 0.05) (fill none))
        (pad "" np_thru_hole circle (at 0 0) (size ${p.dia} ${p.dia}) (drill ${p.dia}) (layers *.Cu *.Mask))
      )`
}
}


