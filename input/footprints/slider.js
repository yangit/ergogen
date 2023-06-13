module.exports = {
    params: {
        designator: 'SS', // for Toggle        
        one: undefined,
        two: undefined,
        three: undefined
    },
    body: p => {
      return `
      (footprint "easyeda:SW-TH_MSK12C02-HB-1" (layer "F.Cu")
    
    (attr smd)
     ${p.at /* parametric position */}
    (fp_text reference "${p.ref}" (at -0.16 2.935 -180) ${p.ref_hide} (layer "B.Fab")
        (effects (font (size 1.143 1.143) (thickness 0.152)) (justify left mirror))
      
    )
    (fp_text value "SW-TH_MSK12C02-HB-1" (at -0.16 -4.593) (layer "F.Fab") hide
        (effects (font (size 1.143 1.143) (thickness 0.152)) (justify left))
      
    )
    (fp_text user "gge217" (at 0 0.12 -180) (layer "Cmts.User")
        (effects (font (size 1 1) (thickness 0.15)))
      
    )
    (fp_line (start -3.216 -1.018) (end -3.216 0.12)
      (stroke (width 0.254) (type solid)) (layer "B.Fab") )
    (fp_line (start -2.75 -1.83) (end 2.75 -1.83)
      (stroke (width 0.254) (type solid)) (layer "B.Fab") )
    (fp_line (start 0.219 1.07) (end -1.719 1.07)
      (stroke (width 0.254) (type solid)) (layer "B.Fab") )
    (fp_line (start 0.223 -3.449) (end 1.498 -3.449)
      (stroke (width 0.254) (type solid)) (layer "B.Fab") )
    (fp_line (start 0.223 -1.849) (end 0.223 -3.449)
      (stroke (width 0.254) (type solid)) (layer "B.Fab") )
    (fp_line (start 1.498 -3.449) (end 1.498 -1.849)
      (stroke (width 0.254) (type solid)) (layer "B.Fab") )
    (fp_line (start 1.719 1.07) (end 1.281 1.07)
      (stroke (width 0.254) (type solid)) (layer "B.Fab") )
    (fp_line (start 2.769 1.07) (end 2.759 1.07)
      (stroke (width 0.254) (type solid)) (layer "B.Fab") )
    (fp_line (start 3.301 0.12) (end 3.301 -1.018)
      (stroke (width 0.254) (type solid)) (layer "B.Fab") )
    (fp_circle (center -1.5 -0.43) (end -1.325 -0.43)
      (stroke (width 0.35) (type solid)) (fill none) (layer "Cmts.User") )
    (fp_circle (center 1.5 -0.43) (end 1.675 -0.43)
      (stroke (width 0.35) (type solid)) (fill none) (layer "Cmts.User") )
    (fp_poly
      (pts
        (xy 0.2 -1.88)
        (xy 1.5 -1.88)
        (xy 1.5 -3.48)
        (xy 0.2 -3.48)
      )

      (stroke (width 0) (type solid)) (fill solid) (layer "Cmts.User") )
    (pad "" np_thru_hole circle (at -1.5 -0.43 180) (size 0.9 0.9) (drill 0.9) (layers "*.Cu" "*.Mask") )
    (pad "" np_thru_hole circle (at 1.5 -0.43 180) (size 0.9 0.9) (drill 0.9) (layers "*.Cu" "*.Mask") )
    (pad "1" smd rect (at -2.25 1.82 ${p.rot + 90}) (size 1.524 0.6) (layers "B.Cu" "B.Paste" "B.Mask")   ${p.one.str})
    (pad "2" smd rect (at 0.75 1.82 ${p.rot + 90}) (size 1.524 0.6) (layers "B.Cu" "B.Paste" "B.Mask")   ${p.two.str})
    (pad "3" smd rect (at 2.25 1.82 ${p.rot+90}) (size 1.524 0.6) (layers "B.Cu" "B.Paste" "B.Mask")   ${p.three.str})
    (pad "4" smd rect (at -3.6 -1.58 ${p.rot}) (size 1.2 0.7) (layers "B.Cu" "B.Paste" "B.Mask") )
    (pad "4" smd rect (at -3.6 0.72 ${p.rot}) (size 1.2 0.7) (layers "B.Cu" "B.Paste" "B.Mask") )
    (pad "4" smd rect (at 3.6 -1.58 ${p.rot}) (size 1.2 0.7) (layers "B.Cu" "B.Paste" "B.Mask") )
    (pad "4" smd rect (at 3.6 0.72 ${p.rot}) (size 1.2 0.7) (layers "B.Cu" "B.Paste" "B.Mask") )
  )`
    
    }
}