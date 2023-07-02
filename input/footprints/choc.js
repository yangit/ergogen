// Kailh Choc

module.exports = {
    params: {
        designator: 'S',        
        from: undefined,
        to: undefined,
        label: undefined,
        hotswap: true
        
    },
    body: p => {
        
    function pins(def_neg, def_pos, def_side) {
        if(p.hotswap) {
          return `            
            ${'' /* holes */}
            (pad "" np_thru_hole circle (at -5 3.75) (size 3 3) (drill 3) (layers *.Cu *.Mask))
            (pad "" np_thru_hole circle (at 0 5.95) (size 3 3) (drill 3) (layers *.Cu *.Mask))            
            ${'' /* net pads */}
            (pad "1" smd rect (at 3.275 5.95) (size 2.6 2.6) (layers "B.Cu" "B.Paste" "B.Mask") ${p.to.str})            
            (pad "2" smd rect (at -8.275 3.75) (size 2.6 2.6) (layers "B.Cu" "B.Paste" "B.Mask") ${p.from.str})
            ${'' /* vias */}
            (pad "3" thru_hole circle (at 3.275 5.95) (size 0.6 0.6) (drill 0.3) (layers *.Cu) (zone_connect 2) ${p.to.str})
            (pad "4" thru_hole circle (at -8.275 3.75) (size 0.6 0.6) (drill 0.3) (layers *.Cu) (zone_connect 2) ${p.from.str})            
          `
        } else {
            return `
              ${''/* pins */}
              (pad 1 thru_hole circle (at -5 3.8) (size 2.032 2.032) (drill 1.27) (layers *.Cu *.Mask) ${p.to.str})
              (pad 2 thru_hole circle (at 0 5.9) (size 2.032 2.032) (drill 1.27) (layers *.Cu *.Mask) ${p.from.str})
            `
        }
      }

return `
    (footprint "Kailh_socket_PG1350_no_silk" (generator pcbnew)
    (layer "B.Cu")
    (tags "kailh,choc")
    ${p.at /* parametric position */}
    (tedit 62C3C07E)
    (descr "Kailh Choc PG1350 keyswitch socket mount")    
    (attr smd)
    (fp_text reference "${p.ref}"(at 0 2.6) ${p.ref_hide} (layer "B.Fab")
        (effects(font(size 1 1)(thickness 0.15))(justify mirror)))
    (fp_text user ${p.label.name} (at -0 3 ${p.rot}) (layer F.SilkS) (effects (font (size 1 1) (thickness 0.15))))
    (fp_text user ${p.label.name} (at -0 3 ${p.rot}) (layer B.SilkS) (effects (font (size 1 1) (thickness 0.15))))
    (fp_line (start 2 7.7) (end 1.5 8.2) (layer "B.Fab") (width 0.15))
    (fp_line (start -2 6.7) (end -2 7.7) (layer "B.Fab") (width 0.15))
    (fp_line (start -7 5.6) (end -7 6.2) (layer "B.Fab") (width 0.15))
    (fp_line (start -7 1.5) (end -7 2) (layer "B.Fab") (width 0.15))
    (fp_line (start -2.5 1.5) (end -7 1.5) (layer "B.Fab") (width 0.15))
    (fp_line (start -7 6.2) (end -2.5 6.2) (layer "B.Fab") (width 0.15))
    (fp_line (start 1.5 8.2) (end -1.5 8.2) (layer "B.Fab") (width 0.015))
    (fp_line (start 1.5 3.7) (end -1 3.7) (layer "B.Fab") (width 0.15))
    (fp_line (start -2.5 2.2) (end -2.5 1.5) (layer "B.Fab") (width 0.15))
    (fp_line (start -1.5 8.2) (end -2 7.7) (layer "B.Fab") (width 0.15))
    (fp_line (start 2 4.2) (end 1.5 3.7) (layer "B.Fab") (width 0.15))
    (fp_line (start -6.9 6.9) (end -6.9 -6.9) (layer "B.Fab") (width 0.15))
    (fp_line (start 2.6 -6.3) (end -2.6 -6.3) (layer "B.Fab") (width 0.15))
    (fp_line (start 6.9 -6.9) (end 6.9 6.9) (layer "B.Fab") (width 0.15))
    (fp_line (start 2.6 -3.1) (end 2.6 -6.3) (layer "B.Fab") (width 0.15))
    (fp_line (start 6.9 -6.9) (end -6.9 -6.9) (layer "B.Fab") (width 0.15))
    (fp_line (start -2.6 -3.1) (end 2.6 -3.1) (layer "B.Fab") (width 0.15))
    (fp_line (start -6.9 6.9) (end 6.9 6.9) (layer "B.Fab") (width 0.15))
    (fp_line (start -2.6 -3.1) (end -2.6 -6.3) (layer "B.Fab") (width 0.15))
    ${'' /* normal holes */}
    (pad "" np_thru_hole circle (at 0 0) (size 3.429 3.429) (drill 3.429) (layers *.Cu *.Mask))
    (pad "" np_thru_hole circle (at 5.5 0) (size 1.7018 1.7018) (drill 1.7018) (layers *.Cu *.Mask))            
    (pad "" np_thru_hole circle (at -5.5 0) (size 1.7018 1.7018) (drill 1.7018) (layers *.Cu *.Mask))
      
    ${pins()}

   
    )`
 }}