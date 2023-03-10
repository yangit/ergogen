module.exports = {
    params: {
        designator: 'JB',        
        pos: {type: 'net', value: 'pos'},
        neg: {type: 'net', value: 'neg'},        
    },
    body: p => {
        return `
        (footprint "JST_SH_SM02B-SRSS-TB_1x02-1MP_P1.00mm_Horizontal" (generator pcbnew)
        (layer "B.Cu")
        (tedit 62B57B79)
        (descr "JST SH series connector, SM02B-SRSS-TB (http://www.jst-mfg.com/product/pdf/eng/eSH.pdf), generated with kicad-footprint-generator")
        (tags "connector JST SH top entry")
        (attr smd)
        ${p.at /* parametric position */}
        (fp_text reference "${p.ref}" (at 0 -3.98) ${p.ref_hide} (layer "B.SilkS") hide (effects (font (size 1 1) (thickness 0.15))))
        (fp_text value "JST_SH_SM02B-SRSS-TB_1x02-1MP_P1.00mm_Horizontal" (at 0 3.98) (layer "B.Fab") hide (effects (font (size 1 1) (thickness 0.15))))
        (fp_text user "B+" (at 1.2 -4.2 90 unlocked) (layer "B.SilkS") (effects (font (size 1 1) (thickness 0.15))))
        (fp_text user "B-" (at -1.2 -4.2 90 unlocked) (layer "B.SilkS") (effects (font (size 1 1) (thickness 0.15))))
        (fp_line (start 1.06 1.785) (end 1.06 2.775) (layer "B.Fab") (width 0.12) )
        (fp_line (start -2.11 -0.715) (end -2.11 1.785) (layer "B.Fab") (width 0.12) )
        (fp_line (start -2.11 1.785) (end -1.06 1.785) (layer "B.Fab") (width 0.12) )
        (fp_line (start 2.11 -0.715) (end 2.11 1.785) (layer "B.Fab") (width 0.12) )
        (fp_line (start 0.94 -2.685) (end -0.94 -2.685) (layer "B.Fab") (width 0.12) )
        (fp_line (start 2.11 1.785) (end 1.06 1.785) (layer "B.Fab") (width 0.12) )
        (fp_line (start -2.9 -3.28) (end -2.9 3.28) (layer "B.CrtYd") (width 0.05) )
        (fp_line (start 2.9 -3.28) (end -2.9 -3.28) (layer "B.CrtYd") (width 0.05) )
        (fp_line (start -2.9 3.28) (end 2.9 3.28) (layer "B.CrtYd") (width 0.05) )
        (fp_line (start 2.9 3.28) (end 2.9 -3.28) (layer "B.CrtYd") (width 0.05) )
        (fp_line (start 2 1.675) (end -2 1.675) (layer "B.Fab") (width 0.1) )
        (fp_line (start 1 1.675) (end 0.5 0.967893) (layer "B.Fab") (width 0.1) )
        (fp_line (start 0.5 0.967893) (end 0 1.675) (layer "B.Fab") (width 0.1) )
        (fp_line (start 2 -2.575) (end -2 -2.575) (layer "B.Fab") (width 0.1) )
        (fp_line (start 2 1.675) (end 2 -2.575) (layer "B.Fab") (width 0.1) )
        (fp_line (start -2 1.675) (end -2 -2.575) (layer "B.Fab") (width 0.1) )
        (pad "2" smd roundrect (at 0.5 2 ${p.rot}) (size 0.6 1.55) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) ${p.pos.str})
        (pad "1" smd roundrect (at -0.5 2 ${p.rot}) (size 0.6 1.55) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) ${p.neg.str})
        (pad "MP" smd roundrect (at 1.8 -1.875 ${p.rot}) (size 1.2 1.8) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.208333) )
        (pad "MP" smd roundrect (at -1.8 -1.875 ${p.rot}) (size 1.2 1.8) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.208333) )        
      )
      
      `
}
}