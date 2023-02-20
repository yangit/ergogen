module.exports = {
    params: {
        designator: 'SB', // for Button        
        one: {type: 'net', value: 'none'},
        two: {type: 'net', value: 'none'},        
    },
    body: p => {
        return `
        (module "b3u-1000P" (generator pcbnew)  
        (layer "B.Cu")
        (tedit 62B57AFB)
        (attr smd)
        ${p.at /* parametric position */}
        (fp_text reference "${p.ref}" (at 2.6 0.9 90 unlocked) ${p.ref_hide} (layer "B.Fab") (effects (font (size 1 1) (thickness 0.15))))
        (fp_text value "b3u-1000P" (at 4.1 0.9 90 unlocked) (layer "B.Fab") (effects (font (size 1 1) (thickness 0.15))))
         (fp_line (start -1.5 -1.25) (end 1.5 -1.25)
      (stroke (width 0.12) (type solid)) (layer "B.Fab") (tstamp 698d2035-6d0d-429a-be71-0f97f44c4028))
    (fp_line (start -1.5 -1.1) (end -1.5 -1.25)
      (stroke (width 0.12) (type solid)) (layer "B.Fab") (tstamp 7592c4ba-a361-4f36-ad34-6f424d623369))
    (fp_line (start -1.5 1.25) (end -1.5 1.1)
      (stroke (width 0.12) (type solid)) (layer "B.Fab") (tstamp 7a348e3e-15e1-4033-9849-75d2e076965b))
    (fp_line (start 1.5 -1.25) (end 1.5 -1.1)
      (stroke (width 0.12) (type solid)) (layer "B.Fab") (tstamp cf718efb-70eb-4209-94c0-ad17e5e548cb))
    (fp_line (start 1.5 1.1) (end 1.5 1.25)
      (stroke (width 0.12) (type solid)) (layer "B.Fab") (tstamp 6b16a14c-9b7f-482f-baaf-77bf8045748d))
    (fp_line (start 1.5 1.25) (end -1.5 1.25)
      (stroke (width 0.12) (type solid)) (layer "B.Fab") (tstamp 7187d70f-c239-4506-a8da-2d0d1f6851b4))
    (fp_circle (center 0 0) (end -0.75 0)
      (stroke (width 0.12) (type solid)) (fill none) (layer "B.Fab") (tstamp 30700539-a6db-424f-a5b0-77d471cbee46))
    (pad "1" smd roundrect (at -1.75 0 ${p.rot}) (size 2 1.524) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25)
       ${p.one.str} (tstamp 41765e91-9177-4981-906b-9b60da2da53e))
    (pad "2" smd roundrect (at 1.75 0 ${p.rot}) (size 2 1.512) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25)
       ${p.two.str} (tstamp 0c817546-dcf2-41c3-aad1-c188eccc1df2))
      )
      `        
}
}
