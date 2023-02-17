module.exports = {
    params: {
        designator: 'D',        
        from: {type: 'net', value: 'C5'},
        to: {type: 'net', value: 'R0'},
    },
    body: p => {
return `
(footprint "D_SOD-523" (generator pcbnew)
  (layer "B.Cu")
  ${p.at /* parametric position */}
  (tedit 62B5284F)
  (descr "http://www.diodes.com/datasheets/ap02001.pdf p.144")
  (tags "Diode SOD523")
  (attr smd)
  (fp_text reference "${p.ref}" (at 0 -2.5) (layer "B.SilkS") ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))))
  (fp_text value "D_SOD-523" (at 0 1.4) (layer "B.Fab") (effects (font (size 1 1) (thickness 0.15))))
  (fp_line (start 0.7 0.6) (end -1.15 0.6) (layer "B.SilkS") (width 0.12) )
  (fp_line (start 0.7 -0.6) (end -1.15 -0.6) (layer "B.SilkS") (width 0.12) )
  (fp_line (start -1.15 -0.6) (end -1.15 0.6) (layer "B.SilkS") (width 0.12) )
  (fp_line (start 1.25 -0.7) (end 1.25 0.7) (layer "B.CrtYd") (width 0.05) )
  (fp_line (start -1.25 -0.7) (end 1.25 -0.7) (layer "B.CrtYd") (width 0.05) )
  (fp_line (start 1.25 0.7) (end -1.25 0.7) (layer "B.CrtYd") (width 0.05) )
  (fp_line (start -1.25 0.7) (end -1.25 -0.7) (layer "B.CrtYd") (width 0.05) )
  (fp_line (start 0.15 0) (end 0.3 0) (layer "B.Fab") (width 0.1) )
  (fp_line (start 0.15 -0.2) (end -0.15 0) (layer "B.Fab") (width 0.1) )
  (fp_line (start 0.15 0.2) (end 0.15 -0.2) (layer "B.Fab") (width 0.1) )
  (fp_line (start -0.65 0.45) (end -0.65 -0.45) (layer "B.Fab") (width 0.1) )
  (fp_line (start 0.65 0.45) (end -0.65 0.45) (layer "B.Fab") (width 0.1) )
  (fp_line (start 0.65 -0.45) (end 0.65 0.45) (layer "B.Fab") (width 0.1) )
  (fp_line (start -0.65 -0.45) (end 0.65 -0.45) (layer "B.Fab") (width 0.1) )
  (fp_line (start -0.15 0) (end -0.3 0) (layer "B.Fab") (width 0.1) )
  (fp_line (start -0.15 0) (end 0.15 0.2) (layer "B.Fab") (width 0.1) )
  (fp_line (start -0.15 0.2) (end -0.15 -0.2) (layer "B.Fab") (width 0.1) )
  (pad "1" smd rect (at -0.7 0 ${p.rot}) (size 0.6 0.7) (layers "B.Cu" "B.Paste" "B.Mask") ${p.to.str})
  (pad "2" smd rect (at 0.7 0 ${p.rot}) (size 0.6 0.7) (layers "B.Cu" "B.Paste" "B.Mask") ${p.from.str})
)
`
}}