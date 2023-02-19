module.exports = {
    params: {
        designator: 'JST',
        side: 'B',
        C5: {type: 'net', value: 'C5'},
        C6: {type: 'net', value: 'C6'},
        R0: {type: 'net', value: 'R0'},
        R1: {type: 'net', value: 'R1'},
        R2: {type: 'net', value: 'R2'},
    },
    body: p => {
      return `
  (footprint "JST_SH_SM05B-SRSS-TB_1x05-1MP_P1.00mm_Horizontal" (generator pcbnew)
  (layer "${p.side}.Cu")
  ${p.at /* parametric position */}
  (tedit 62B572A3)
  (descr "JST SH series connector, SM05B-SRSS-TB (http://www.jst-mfg.com/product/pdf/eng/eSH.pdf), generated with kicad-footprint-generator")
  (tags "connector JST SH top entry")
  (property "Sheetfile" "main.kicad_sch")
  (property "Sheetname" "")
  (attr smd)
  (fp_text reference "J1" (at 0 -3.98) (layer "${p.side}.Fab") hide
    (effects (font (size 1 1) (thickness 0.15))))
  (fp_text user "R2" (at 2.4 -5 ${p.rot+90} unlocked) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))))
  (fp_text user "R1" (at 1.2 -5 ${p.rot+90} unlocked) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))))
  (fp_text user "R0" (at 0 -5 ${p.rot+90} unlocked) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))))
  (fp_text user "C6" (at -1.2 -5 ${p.rot+90} unlocked) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))))  
  (fp_text user "C5" (at -2.4 -5 ${p.rot+90} unlocked) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))))
  (fp_line (start -3.61 -0.715) (end -3.61 1.785) (layer "${p.side}.Fab") (width 0.12) )
  (fp_line (start -3.61 1.785) (end -2.56 1.785) (layer "${p.side}.Fab") (width 0.12) )
  (fp_line (start 3.61 -0.715) (end 3.61 1.785) (layer "${p.side}.Fab") (width 0.12) )
  (fp_line (start 3.61 1.785) (end 2.56 1.785) (layer "${p.side}.Fab") (width 0.12) )
  (fp_line (start 2.56 1.785) (end 2.56 2.775) (layer "${p.side}.Fab") (width 0.12) )
  (fp_line (start -4.4 3.28) (end 4.4 3.28) (layer "${p.side}.CrtYd") (width 0.05) )
  (fp_line (start 4.4 3.28) (end 4.4 -3.28) (layer "${p.side}.CrtYd") (width 0.05) )
  (fp_line (start -4.4 -3.28) (end -4.4 3.28) (layer "${p.side}.CrtYd") (width 0.05) )
  (fp_line (start 4.4 -3.28) (end -4.4 -3.28) (layer "${p.side}.CrtYd") (width 0.05) )
  (fp_line (start 3.5 1.675) (end 3.5 -2.575) (layer "${p.side}.Fab") (width 0.1) )
  (fp_line (start 2.5 1.675) (end 2 0.967893) (layer "${p.side}.Fab") (width 0.1) )
  (fp_line (start 3.5 1.675) (end -3.5 1.675) (layer "${p.side}.Fab") (width 0.1) )
  (fp_line (start 2 0.967893) (end 1.5 1.675) (layer "${p.side}.Fab") (width 0.1) )
  (fp_line (start 3.5 -2.575) (end -3.5 -2.575) (layer "${p.side}.Fab") (width 0.1) )
  (fp_line (start -3.5 1.675) (end -3.5 -2.575) (layer "${p.side}.Fab") (width 0.1) )
  (pad "5" smd roundrect (at 2 2 ${p.rot}) (size 0.6 1.55) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") (roundrect_rratio 0.25) ${p.R2.str})
  (pad "4" smd roundrect (at 1 2 ${p.rot}) (size 0.6 1.55) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") (roundrect_rratio 0.25) ${p.R1.str})
  (pad "3" smd roundrect (at 0 2 ${p.rot}) (size 0.6 1.55) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") (roundrect_rratio 0.25) ${p.R0.str})
  (pad "2" smd roundrect (at -1 2 ${p.rot}) (size 0.6 1.55) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") (roundrect_rratio 0.25) ${p.C6.str})
  (pad "1" smd roundrect (at -2 2 ${p.rot}) (size 0.6 1.55) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") (roundrect_rratio 0.25) ${p.C5.str})
  (pad "MP" smd roundrect (at -3.3 -1.875 ${p.rot}) (size 1.2 1.8) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") (roundrect_rratio 0.208333))
  (pad "MP" smd roundrect (at 3.3 -1.875 ${p.rot}) (size 1.2 1.8) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") (roundrect_rratio 0.208333))  
)`
}}