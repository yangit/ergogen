// Nice!Nano

module.exports = {
  params: {
    designator: 'MCU',
    side: 'F',
    RAW: {type: 'net', value: 'RAW'},
    GND: {type: 'net', value: 'GND'},
    RST: {type: 'net', value: 'RST'},
    VCC: {type: 'net', value: 'VCC'},
    C0: {type: 'net', value: 'C0'},
    C1: {type: 'net', value: 'C1'},
    C2: {type: 'net', value: 'C2'},
    C3: {type: 'net', value: 'C3'},
    C4: {type: 'net', value: 'C4'},
    C5: {type: 'net', value: 'C5'},
    C6: {type: 'net', value: 'C6'},
    P10: {type: 'net', value: 'P10'},
    P1: {type: 'net', value: 'P1'},
    P0: {type: 'net', value: 'P0'},
    P2: {type: 'net', value: 'P2'},
    P3: {type: 'net', value: 'P3'},
    R0: {type: 'net', value: 'R0'},
    R1: {type: 'net', value: 'R1'},
    R2: {type: 'net', value: 'R2'},
    P7: {type: 'net', value: 'P7'},
    P8: {type: 'net', value: 'P8'},
    P9: {type: 'net', value: 'P9'}
  },
  body: p => {
    const standard = `
      (module NiceNano (layer ${p.side}.Cu) (tedit 5B307E4C)
      ${p.at /* parametric position */}

      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer ${p.side}.Fab) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer ${p.side}.Fab) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
    
      ${''/* illustration of the (possible) USB port overhang */}
      (fp_line (start -19.304 -3.81) (end -14.224 -3.81) (layer ${p.side}.Fab) (width 0.15))
      (fp_line (start -19.304 3.81) (end -19.304 -3.81) (layer ${p.side}.Fab) (width 0.15))
      (fp_line (start -14.224 3.81) (end -19.304 3.81) (layer ${p.side}.Fab) (width 0.15))
      (fp_line (start -14.224 -3.81) (end -14.224 3.81) (layer ${p.side}.Fab) (width 0.15))
    
      ${''/* component outline */}
      (fp_line (start -17.78 8.89) (end 15.24 8.89) (layer ${p.side}.Fab) (width 0.15))
      (fp_line (start 15.24 8.89) (end 15.24 -8.89) (layer ${p.side}.Fab) (width 0.15))
      (fp_line (start 15.24 -8.89) (end -17.78 -8.89) (layer ${p.side}.Fab) (width 0.15))
      (fp_line (start -17.78 -8.89) (end -17.78 8.89) (layer ${p.side}.Fab) (width 0.15))
      `
    function pins(def_neg, def_pos) {
      return `
        ${''/* extra border around "RAW", in case the rectangular shape is not distinctive enough */}
        (fp_line (start -15.24 ${def_pos}6.35) (end -12.7 ${def_pos}6.35) (layer ${p.side}.Fab) (width 0.15))
        (fp_line (start -15.24 ${def_pos}6.35) (end -15.24 ${def_pos}8.89) (layer ${p.side}.Fab) (width 0.15))
        (fp_line (start -12.7 ${def_pos}6.35) (end -12.7 ${def_pos}8.89) (layer ${p.side}.Fab) (width 0.15))
      
        ${''/* pin names */}
        (fp_text user RAW (at -13.97 ${def_pos}5.3 ${p.rot + 90}) (layer ${p.side}.Fab) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user GND (at -11.43 ${def_pos}5.3 ${p.rot + 90}) (layer ${p.side}.Fab) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user RST (at -8.89 ${def_pos}5.3 ${p.rot + 90}) (layer ${p.side}.Fab) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user VCC (at -6.35 ${def_pos}5.3 ${p.rot + 90}) (layer ${p.side}.Fab) (effects (font (size 0.8 0.8) (thickness 0.15))))
        
        (fp_text user C0 (at -3.81 ${def_pos}5.7 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user C1 (at -1.27 ${def_pos}5.7 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user C2 (at 1.27 ${def_pos}5.7 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user C3 (at 3.81 ${def_pos}5.7 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user C4 (at 6.35 ${def_pos}5.7 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user C5 (at 8.89 ${def_pos}5.7 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user C6 (at 11.43 ${def_pos}5.7 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))

        (fp_text user C0 (at -3.81 ${def_pos}5.7 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user C1 (at -1.27 ${def_pos}5.7 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user C2 (at 1.27 ${def_pos}5.7 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user C3 (at 3.81 ${def_pos}5.7 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user C4 (at 6.35 ${def_pos}5.7 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user C5 (at 8.89 ${def_pos}5.7 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user C6 (at 11.43 ${def_pos}5.7 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        
        (fp_text user P10 (at 13.97 ${def_pos}5.3 ${p.rot + 90}) (layer ${p.side}.Fab) (effects (font (size 0.8 0.8) (thickness 0.15))))
      
        (fp_text user P01 (at -13.97 ${def_neg}5.3 ${p.rot + 90}) (layer ${p.side}.Fab) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user P00 (at -11.43 ${def_neg}5.3 ${p.rot + 90}) (layer ${p.side}.Fab) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user GND (at -8.89 ${def_neg}5.3 ${p.rot + 90}) (layer ${p.side}.Fab) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user GND (at -6.35 ${def_neg}5.3 ${p.rot + 90}) (layer ${p.side}.Fab) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user P02 (at -3.81 ${def_neg}5.3 ${p.rot + 90}) (layer ${p.side}.Fab) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user P03 (at -1.27 ${def_neg}5.3 ${p.rot + 90}) (layer ${p.side}.Fab) (effects (font (size 0.8 0.8) (thickness 0.15))))
        
        (fp_text user R0 (at 1.27 ${def_neg}5.7 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user R1 (at 3.81 ${def_neg}5.7 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user R2 (at 6.35 ${def_neg}5.7 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user R0 (at 1.27 ${def_neg}5.7 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user R1 (at 3.81 ${def_neg}5.7 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user R2 (at 6.35 ${def_neg}5.7 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        
        (fp_text user P07 (at 8.89 ${def_neg}5.3 ${p.rot + 90}) (layer ${p.side}.Fab) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user P08 (at 11.43 ${def_neg}5.3 ${p.rot + 90}) (layer ${p.side}.Fab) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user P09 (at 13.97 ${def_neg}5.3 ${p.rot + 90}) (layer ${p.side}.Fab) (effects (font (size 0.8 0.8) (thickness 0.15))))
      
        ${''/* and now the actual pins */}
        (pad 1 thru_hole rect (at -13.97 ${def_pos}7.62 ${p.rot}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Fab *.Mask) ${p.RAW.str})
        (pad 2 thru_hole circle (at -11.43 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Fab *.Mask) ${p.GND.str})
        (pad 3 thru_hole circle (at -8.89 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Fab *.Mask) ${p.RST.str})
        (pad 4 thru_hole circle (at -6.35 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Fab *.Mask) ${p.VCC.str})
        (pad 5 thru_hole circle (at -3.81 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Fab *.Mask) ${p.C0.str})
        (pad 6 thru_hole circle (at -1.27 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Fab *.Mask) ${p.C1.str})
        (pad 7 thru_hole circle (at 1.27 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Fab *.Mask) ${p.C2.str})
        (pad 8 thru_hole circle (at 3.81 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Fab *.Mask) ${p.C3.str})
        (pad 9 thru_hole circle (at 6.35 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Fab *.Mask) ${p.C4.str})
        (pad 10 thru_hole circle (at 8.89 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Fab *.Mask) ${p.C5.str})
        (pad 11 thru_hole circle (at 11.43 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Fab *.Mask) ${p.C6.str})
        (pad 12 thru_hole circle (at 13.97 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Fab *.Mask) ${p.P10.str})
        
        (pad 13 thru_hole circle (at -13.97 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Fab *.Mask) ${p.P1.str})
        (pad 14 thru_hole circle (at -11.43 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Fab *.Mask) ${p.P0.str})
        (pad 15 thru_hole circle (at -8.89 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Fab *.Mask) ${p.GND.str})
        (pad 16 thru_hole circle (at -6.35 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Fab *.Mask) ${p.GND.str})
        (pad 17 thru_hole circle (at -3.81 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Fab *.Mask) ${p.P2.str})
        (pad 18 thru_hole circle (at -1.27 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Fab *.Mask) ${p.P3.str})
        (pad 19 thru_hole circle (at 1.27 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Fab *.Mask) ${p.R0.str})
        (pad 20 thru_hole circle (at 3.81 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Fab *.Mask) ${p.R1.str})
        (pad 21 thru_hole circle (at 6.35 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Fab *.Mask) ${p.R2.str})
        (pad 22 thru_hole circle (at 8.89 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Fab *.Mask) ${p.P7.str})
        (pad 23 thru_hole circle (at 11.43 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Fab *.Mask) ${p.P8.str})
        (pad 24 thru_hole circle (at 13.97 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Fab *.Mask) ${p.P9.str})
      `
    }
    if(p.side == 'B') {
      return `
        ${standard}
        ${pins('-', '')})
        `
    } else {
      return `
        ${standard}
        ${pins('', '-')})
        `
    }
  }
}