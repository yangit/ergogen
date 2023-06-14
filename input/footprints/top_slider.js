module.exports = {
    params: {
        designator: 'SS', // for Toggle        
        one: undefined,
        two: undefined,
        three: undefined
    },
    body: (p) => {
        return `
    (footprint "easyeda:SW-SMD_JS202011JCQN" (layer "F.Cu")
        ${p.at /* parametric position */}
    (attr smd)
    (fp_text reference "${p.ref}" (at -0.254 -2.286) ${p.ref_hide} (layer "B.Fab")
        (effects (font (size 1.143 1.143) (thickness 0.152)) (justify left))
      
    )
    (fp_text value "SW-SMD_JS202011JCQN" (at -0.254 -4.064) (layer "F.Fab") hide
        (effects (font (size 1.143 1.143) (thickness 0.152)) (justify left))
      
    )
    (fp_text user "gge268" (at 0 0) (layer "Cmts.User")
        (effects (font (size 1 1) (thickness 0.15)))
      
    )
    (fp_line (start -4.5 -1.75) (end -3.271 -1.75)
      (stroke (width 0.254) (type solid)) (layer "F.SilkS") )
    (fp_line (start -4.5 1.75) (end -4.5 -1.75)
      (stroke (width 0.254) (type solid)) (layer "F.SilkS") )
    (fp_line (start -4.5 1.75) (end -3.271 1.75)
      (stroke (width 0.254) (type solid)) (layer "F.SilkS") )
    (fp_line (start -1.809 -1.75) (end -0.731 -1.75)
      (stroke (width 0.254) (type solid)) (layer "F.SilkS") )
    (fp_line (start -1.809 1.75) (end -0.731 1.75)
      (stroke (width 0.254) (type solid)) (layer "F.SilkS") )
    (fp_line (start -1.778 -0.762) (end -1.778 0.762)
      (stroke (width 0.254) (type solid)) (layer "F.SilkS") )
    (fp_line (start -1.778 -0.762) (end -0.731 -0.762)
      (stroke (width 0.254) (type solid)) (layer "F.SilkS") )
    (fp_line (start -1.778 0.762) (end -0.731 0.762)
      (stroke (width 0.254) (type solid)) (layer "F.SilkS") )
    (fp_line (start -1.524 -0.508) (end -0.731 -0.508)
      (stroke (width 0.254) (type solid)) (layer "F.SilkS") )
    (fp_line (start -1.524 0.508) (end -1.524 -0.508)
      (stroke (width 0.254) (type solid)) (layer "F.SilkS") )
    (fp_line (start -1.524 0.508) (end -0.731 0.508)
      (stroke (width 0.254) (type solid)) (layer "F.SilkS") )
    (fp_line (start -0.508 -0.169) (end -0.508 0.169)
      (stroke (width 0.254) (type solid)) (layer "F.SilkS") )
    (fp_line (start 0.508 -0.169) (end 0.508 0.169)
      (stroke (width 0.254) (type solid)) (layer "F.SilkS") )
    (fp_line (start 0.731 -1.75) (end 1.809 -1.75)
      (stroke (width 0.254) (type solid)) (layer "F.SilkS") )
    (fp_line (start 0.731 -0.762) (end 1.778 -0.762)
      (stroke (width 0.254) (type solid)) (layer "F.SilkS") )
    (fp_line (start 0.731 0.762) (end 1.778 0.762)
      (stroke (width 0.254) (type solid)) (layer "F.SilkS") )
    (fp_line (start 0.731 1.75) (end 1.809 1.75)
      (stroke (width 0.254) (type solid)) (layer "F.SilkS") )
    (fp_line (start 1.016 -0.508) (end 0.731 -0.508)
      (stroke (width 0.254) (type solid)) (layer "F.SilkS") )
    (fp_line (start 1.016 -0.508) (end 1.016 0.508)
      (stroke (width 0.254) (type solid)) (layer "F.SilkS") )
    (fp_line (start 1.016 0.508) (end 0.731 0.508)
      (stroke (width 0.254) (type solid)) (layer "F.SilkS") )
    (fp_line (start 1.778 -0.762) (end 1.778 0.762)
      (stroke (width 0.254) (type solid)) (layer "F.SilkS") )
    (fp_line (start 3.271 -1.75) (end 4.5 -1.75)
      (stroke (width 0.254) (type solid)) (layer "F.SilkS") )
    (fp_line (start 3.271 1.75) (end 4.5 1.75)
      (stroke (width 0.254) (type solid)) (layer "F.SilkS") )
    (fp_line (start 4.5 -1.75) (end 4.5 1.75)
      (stroke (width 0.254) (type solid)) (layer "F.SilkS") )
    (fp_poly
      (pts
        (xy -1.778 -0.762)
        (xy -1.524 -0.762)
        (xy -1.524 0.762)
        (xy -1.778 0.762)
      )

      (stroke (width 0) (type solid)) (fill solid) (layer "Cmts.User") )
    (fp_poly
      (pts
        (xy -1.524 -0.762)
        (xy -0.508 -0.762)
        (xy -0.508 0.508)
        (xy -1.524 0.508)
      )

      (stroke (width 0) (type solid)) (fill solid) (layer "Cmts.User") )
    (fp_poly
      (pts
        (xy -1.778 -0.762)
        (xy 1.778 -0.762)
        (xy 1.778 0.762)
        (xy -1.778 0.762)
        (xy -1.778 0.508)
        (xy 1.524 0.508)
        (xy 1.524 -0.508)
        (xy -1.778 -0.508)
      )

      (stroke (width 0) (type solid)) (fill solid) (layer "Cmts.User") )
    (pad "1" smd rect (at -2.54 -1.2 ${p.rot}) (size 1 1.6) (layers "F.Cu" "F.Paste" "B.Mask")  ${p.one.str} )
    (pad "2" smd rect (at 0 -1.2 ${p.rot}) (size 1 1.6) (layers "F.Cu" "F.Paste" "B.Mask")  ${p.two.str})
    (pad "3" smd rect (at 2.54 -1.2 ${p.rot}) (size 1 1.6) (layers "F.Cu" "F.Paste" "B.Mask")  ${p.three.str})
    (pad "5" smd rect (at -2.54 1.2 ${p.rot}) (size 1 1.6) (layers "F.Cu" "F.Paste" "B.Mask")  ${p.one.str} )
    (pad "6" smd rect (at 0 1.2 ${p.rot}) (size 1 1.6) (layers "F.Cu" "F.Paste" "B.Mask")  ${p.two.str})
    (pad "7" smd rect (at 2.54 1.2 ${p.rot}) (size 1 1.6) (layers "F.Cu" "F.Paste" "B.Mask")  ${p.three.str})
  )
    
    `
    }
};