module.exports = {
    params: {
        designator: 'B', // for Button
        side: 'F',
        one: undefined,
        two: undefined
    },
    body: p => {
        return `
        (footprint "b3u-1000P" (generator pcbnew)
        ${p.at /* parametric position */}   
        (layer "${p.side}.Cu")
        (tedit 62B57AFB)
        (attr smd)
        (fp_text reference "${p.ref}" (at 2.6 0.9 90 unlocked) ${p.ref_hide} (layer "${p.side}.Fab")
          (effects (font (size 1 1) (thickness 0.15)))
          
        )
        (fp_text value "b3u-1000P" (at 4.1 0.9 90 unlocked) (layer "${p.side}.Fab")
          (effects (font (size 1 1) (thickness 0.15)))
          
        )
        (fp_line (start 1.25 -1.5) (end 1.25 1.5) (layer "${p.side}.Fab") (width 0.12) )
        (fp_line (start 1.1 -1.5) (end 1.25 -1.5) (layer "${p.side}.Fab") (width 0.12) )
        (fp_line (start -1.25 -1.5) (end -1.1 -1.5) (layer "${p.side}.Fab") (width 0.12) )
        (fp_line (start 1.25 1.5) (end 1.1 1.5) (layer "${p.side}.Fab") (width 0.12) )
        (fp_line (start -1.25 1.5) (end -1.25 -1.5) (layer "${p.side}.Fab") (width 0.12) )
        (fp_line (start -1.1 1.5) (end -1.25 1.5) (layer "${p.side}.Fab") (width 0.12) )
        (fp_circle (center 0 0) (end 0 -0.75) (layer "${p.side}.Fab") (width 0.12) (fill none) )
        (pad "1" smd roundrect (at 0 -1.75 ${p.rot}) (size 2 1.524) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") (roundrect_rratio 0.25) )
        (pad "2" smd roundrect (at 0 1.75 ${p.rot}) (size 2 1.512) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") (roundrect_rratio 0.25) )
      )
      `        
}
}
