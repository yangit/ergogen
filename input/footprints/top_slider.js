module.exports = {
    params: {
        designator: 'SS', // for Toggle        
        one: undefined,
        two: undefined,
        three: undefined
    },
    body: (p) => {
        return `
    (footprint "easyeda:SW-TH_K3-2235D-F1" (layer "F.Cu")
    
    ${p.at /* parametric position */}
    (attr through_hole)
    (fp_text reference "${p.ref}" (at -0.254 -3.048)  ${p.ref_hide} (layer "F.SilkS")
        (effects (font (size 1.143 1.143) (thickness 0.152)) (justify left))
      
    )
    (fp_text value "SW-TH_K3-2235D-F1" (at -0.254 -4.826) (layer "F.Fab") hide
        (effects (font (size 1.143 1.143) (thickness 0.152)) (justify left))
      
    )
    (fp_text user "gge220" (at 0 0) (layer "Cmts.User")
        (effects (font (size 1 1) (thickness 0.15)))
      
    )
    (fp_line (start -4.572 -1.778) (end -3.628 -1.778)
      (stroke (width 0.254) (type solid)) (layer "F.SilkS") )
    (fp_line (start -4.572 1.722) (end -4.572 -1.778)
      (stroke (width 0.254) (type solid)) (layer "F.SilkS") )
    (fp_line (start -4.572 1.722) (end -3.631 1.722)
      (stroke (width 0.254) (type solid)) (layer "F.SilkS") )
    (fp_line (start -3.048 -1.27) (end 3.048 -1.27)
      (stroke (width 0.254) (type solid)) (layer "F.SilkS") )
    (fp_line (start -3.048 1.27) (end -3.048 -1.27)
      (stroke (width 0.254) (type solid)) (layer "F.SilkS") )
    (fp_line (start -2.54 -0.508) (end -1.524 -0.508)
      (stroke (width 0.254) (type solid)) (layer "F.SilkS") )
    (fp_line (start -2.54 0.508) (end -2.54 -0.508)
      (stroke (width 0.254) (type solid)) (layer "F.SilkS") )
    (fp_line (start -1.524 -0.508) (end -1.524 0.508)
      (stroke (width 0.254) (type solid)) (layer "F.SilkS") )
    (fp_line (start -1.524 0.508) (end -2.54 0.508)
      (stroke (width 0.254) (type solid)) (layer "F.SilkS") )
    (fp_line (start -1.371 -1.778) (end -1.128 -1.778)
      (stroke (width 0.254) (type solid)) (layer "F.SilkS") )
    (fp_line (start -1.369 1.722) (end -1.131 1.722)
      (stroke (width 0.254) (type solid)) (layer "F.SilkS") )
    (fp_line (start 1.128 -1.778) (end 1.371 -1.778)
      (stroke (width 0.254) (type solid)) (layer "F.SilkS") )
    (fp_line (start 1.131 1.722) (end 1.369 1.722)
      (stroke (width 0.254) (type solid)) (layer "F.SilkS") )
    (fp_line (start 3.048 -1.27) (end 3.048 1.27)
      (stroke (width 0.254) (type solid)) (layer "F.SilkS") )
    (fp_line (start 3.048 1.27) (end -3.048 1.27)
      (stroke (width 0.254) (type solid)) (layer "F.SilkS") )
    (fp_line (start 3.628 -1.778) (end 4.572 -1.778)
      (stroke (width 0.254) (type solid)) (layer "F.SilkS") )
    (fp_line (start 3.631 1.722) (end 4.572 1.722)
      (stroke (width 0.254) (type solid)) (layer "F.SilkS") )
    (fp_line (start 4.572 -1.722) (end 4.572 1.778)
      (stroke (width 0.254) (type solid)) (layer "F.SilkS") )
    (pad "1" thru_hole circle (at -2.5 -1.7 ${p.rot+180}) (size 1.8 1.8) (drill 1.2) (layers "*.Cu" "*.Paste" "*.Mask") ${p.one.str})
    (pad "2" thru_hole circle (at 0 -1.7 ${p.rot + 180}) (size 1.8 1.8) (drill 1.2) (layers "*.Cu" "*.Paste" "*.Mask") ${p.two.str})
    (pad "3" thru_hole circle (at 2.5 -1.7 ${p.rot + 180}) (size 1.8 1.8) (drill 1.2) (layers "*.Cu" "*.Paste" "*.Mask") ${p.three.str})
    (pad "4" thru_hole circle (at -2.5 1.7 ${p.rot + 180}) (size 1.8 1.8) (drill 1.2) (layers "*.Cu" "*.Paste" "*.Mask") ${p.one.str})
    (pad "5" thru_hole circle (at 0 1.7 ${p.rot + 180}) (size 1.8 1.8) (drill 1.2) (layers "*.Cu" "*.Paste" "*.Mask") ${p.two.str} )
    (pad "6" thru_hole circle (at 2.5 1.7 ${p.rot + 180}) (size 1.8 1.8) (drill 1.2) (layers "*.Cu" "*.Paste" "*.Mask") ${p.three.str})
  )
    
    `
    }
};