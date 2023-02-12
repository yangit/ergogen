module.exports = {
    params: {    
        dia: 2.2,
    },
    body: p => {
        return `(footprint "MountingHole_2.2mm_M2" (generator pcbnew)
        (layer "F.Cu")
        ${p.at /* parametric position */} 
        (tedit 62C29C08)
        (descr "Mounting Hole 2.2mm, no annular, M2")
        (tags "mounting hole 2.2mm no annular m2")
        (attr exclude_from_pos_files exclude_from_bom)
        (fp_text reference "${p.ref}" (at 0 -3.2) (layer "F.SilkS") ${p.ref_hide}
          (effects (font (size 1 1) (thickness 0.15))))
        (fp_text value "MountingHole_2.2mm_M2" (at 0 3.2) (layer "F.Fab")
          (effects (font (size 1 1) (thickness 0.15))))
        (fp_circle (center 0 0) (end 1.6 0) (layer "Cmts.User") (width 0.15) (fill none))
        (fp_circle (center 0 0) (end 1.7 0) (layer "B.CrtYd") (width 0.05) (fill none))
        (fp_circle (center 0 0) (end 1.7 0) (layer "F.CrtYd") (width 0.05) (fill none))
        (pad "" np_thru_hole circle (at 0 0) (size ${p.dia} ${p.dia}) (drill ${p.dia}) (layers *.Cu *.Mask))
      )`
}
}


