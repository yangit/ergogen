module.exports = {
    params: {
        designator: 'SS', // for Toggle        
        one: undefined,
        two: undefined,
        three: undefined
    },
    body: (p) => {
        return `
    (footprint "easyeda:SW-SMD_SS-3235D-03-L2.00" (layer "B.Cu")
    (attr smd)
    ${p.at /* parametric position */}
    (fp_text reference "${p.ref}" (at -0.087 -4.366) ${p.ref_hide} (layer "B.SilkS")
        (effects (font (size 1.143 1.143) (thickness 0.152)) (justify left))
      
    )
    (fp_text value "SW-SMD_SS-3235D-03-L2.00" (at -0.087 -6.144) (layer "B.Fab") hide
        (effects (font (size 1.143 1.143) (thickness 0.152)) (justify left))
      
    )

    (fp_line (start -4.55 -1.75) (end 4.55 -1.75)
      (stroke (width 0.254) (type solid)) (layer "B.SilkS") )
    (fp_line (start -4.55 1.75) (end -4.55 -1.75)
      (stroke (width 0.254) (type solid)) (layer "B.SilkS") )
    (fp_line (start -4.043 -1.75) (end -4.043 -1.016)
      (stroke (width 0.254) (type solid)) (layer "B.SilkS") )
    (fp_line (start -4.043 -1.016) (end -4.55 -1.016)
      (stroke (width 0.254) (type solid)) (layer "B.SilkS") )
    (fp_line (start -4 0.966) (end -4.507 0.966)
      (stroke (width 0.254) (type solid)) (layer "B.SilkS") )
    (fp_line (start -4 1.7) (end -4 0.966)
      (stroke (width 0.254) (type solid)) (layer "B.SilkS") )
    (fp_line (start -2.54 -1.016) (end 2.54 -1.016)
      (stroke (width 0.254) (type solid)) (layer "B.SilkS") )
    (fp_line (start -2.54 1.016) (end -2.54 -1.016)
      (stroke (width 0.254) (type solid)) (layer "B.SilkS") )
    (fp_line (start -2.159 -0.762) (end -0.254 -0.762)
      (stroke (width 0.254) (type solid)) (layer "B.SilkS") )
    (fp_line (start -2.159 0.762) (end -2.159 -0.762)
      (stroke (width 0.254) (type solid)) (layer "B.SilkS") )
    (fp_line (start -0.254 -0.762) (end -0.254 0.762)
      (stroke (width 0.254) (type solid)) (layer "B.SilkS") )
    (fp_line (start -0.254 0.762) (end -2.159 0.762)
      (stroke (width 0.254) (type solid)) (layer "B.SilkS") )
    (fp_line (start 2.54 -1.016) (end 2.54 1.016)
      (stroke (width 0.254) (type solid)) (layer "B.SilkS") )
    (fp_line (start 2.54 1.016) (end -2.54 1.016)
      (stroke (width 0.254) (type solid)) (layer "B.SilkS") )
    (fp_line (start 4 -1.7) (end 4 -0.966)
      (stroke (width 0.254) (type solid)) (layer "B.SilkS") )
    (fp_line (start 4 -0.966) (end 4.507 -0.966)
      (stroke (width 0.254) (type solid)) (layer "B.SilkS") )
    (fp_line (start 4 0.966) (end 4.507 0.966)
      (stroke (width 0.254) (type solid)) (layer "B.SilkS") )
    (fp_line (start 4 1.7) (end 4 0.966)
      (stroke (width 0.254) (type solid)) (layer "B.SilkS") )
    (fp_line (start 4.55 -1.75) (end 4.55 1.75)
      (stroke (width 0.254) (type solid)) (layer "B.SilkS") )
    (fp_line (start 4.55 1.75) (end -4.55 1.75)
      (stroke (width 0.254) (type solid)) (layer "B.SilkS") )
    (fp_circle (center -2.54 -3.81) (end -2.34 -3.81)
      (stroke (width 0.4) (type solid)) (fill none) (layer "Cmts.User") )
    (pad "1" smd rect (at -2.5 -3 ${p.rot}) (size 1.2 1.8) (layers "B.Cu" "B.Paste" "B.Mask") ${p.one.str} )
    (pad "2" smd rect (at 0 3 ${p.rot }) (size 1.2 1.8 ) (layers "B.Cu" "B.Paste" "B.Mask") ${p.two.str})
    (pad "3" smd rect (at 2.5 -3 ${p.rot}) (size 1.2 1.8 ) (layers "B.Cu" "B.Paste" "B.Mask") ${p.three.str})
  )
    
    `
    }
};