module.exports = {
    params: {    
        text: undefined,
        side: "F",
    },
    body: p => {        
        return `(footprint "flactyl logo" (generator pcbnew)
        (layer "${p.side}.SilkS")
        ${p.at /* parametric position */} 
        (tedit 62C29C08)        
        (attr exclude_from_pos_files exclude_from_bom)
        (fp_text reference "${p.ref}" (at 0 0) (layer "F.SilkS") ${p.ref_hide}
          (effects (font (size 1 1) (thickness 0.15))))
        (fp_text value "${p.text.name}" (at 0 3.2) (layer "${p.side}.SilkS")
          (effects (font (size 1 1) (thickness 0.15))))                
      )`
}
}


