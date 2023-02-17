module.exports = {
    params: {
        designator: 'B', // for Button        
        one: {type: 'net', value: 'none'},
        two: {type: 'net', value: 'none'},        
    },
    body: p => {
        return `
        (module "b3u-1000P" (generator pcbnew)
        ${p.at /* parametric position */}   
        (layer "B.Cu")
        (tedit 62B57AFB)
        (attr smd)
        (fp_text reference "${p.ref}" (at 2.6 0.9 90 unlocked) ${p.ref_hide} (layer "B.Fab")
          (effects (font (size 1 1) (thickness 0.15)))
          
        )
        (fp_text value "b3u-1000P" (at 4.1 0.9 90 unlocked) (layer "B.Fab")
          (effects (font (size 1 1) (thickness 0.15)))
          
        )
        (fp_line (start 1.25 -1.5) (end 1.25 1.5) (layer "B.Fab") (width 0.12) )
        (fp_line (start 1.1 -1.5) (end 1.25 -1.5) (layer "B.Fab") (width 0.12) )
        (fp_line (start -1.25 -1.5) (end -1.1 -1.5) (layer "B.Fab") (width 0.12) )
        (fp_line (start 1.25 1.5) (end 1.1 1.5) (layer "B.Fab") (width 0.12) )
        (fp_line (start -1.25 1.5) (end -1.25 -1.5) (layer "B.Fab") (width 0.12) )
        (fp_line (start -1.1 1.5) (end -1.25 1.5) (layer "B.Fab") (width 0.12) )
        (fp_circle (center 0 0) (end 0 -0.75) (layer "B.Fab") (width 0.12) (fill none) )
        (pad "1" smd roundrect (at 0 -1.75 ${p.rot}) (size 2 1.524) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) ${p.one.str})
        (pad "2" smd roundrect (at 0 1.75 ${p.rot}) (size 2 1.512) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) ${p.two.str})
      )
      `        
}
}
