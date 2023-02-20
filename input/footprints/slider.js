module.exports = {
    params: {
        designator: 'SS', // for Toggle        
        one: undefined,
        two: undefined,
        three: undefined
    },
    body: p => {

        const left = p.side == 'F' ? '-' : ''
        const right = p.side == 'F' ? '' : '-'

        return `

        (footprint "easyeda:SW-TH_MSK12C02-HB-1" (layer "F.Cu")
    (tstamp 7496269e-e81f-4a29-90e2-4278f5cd38ff)
     ${p.at /* parametric position */}
  (fp_text reference "${p.ref}" (at 0 0) (layer F.Fab) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
    (attr smd)
    (fp_line (start -3.301 0) (end -3.301 1.138)
      (stroke (width 0.254) (type solid)) (layer "B.Fab") (tstamp b3aa93e9-b20c-400f-b819-619bb9b5b783))
    (fp_line (start -2.769 -0.95) (end -2.759 -0.95)
      (stroke (width 0.254) (type solid)) (layer "B.Fab") (tstamp e2c19eff-159c-447f-bb7d-b71203e26cae))
    (fp_line (start -1.719 -0.95) (end -1.281 -0.95)
      (stroke (width 0.254) (type solid)) (layer "B.Fab") (tstamp a1d6f027-f02f-4d4a-9ef5-219d3d5ecf57))
    (fp_line (start -1.498 3.569) (end -1.498 1.969)
      (stroke (width 0.254) (type solid)) (layer "B.Fab") (tstamp 01157b6c-7013-4862-8653-46b4ecd1570a))
    (fp_line (start -0.223 1.969) (end -0.223 3.569)
      (stroke (width 0.254) (type solid)) (layer "B.Fab") (tstamp 578f6a07-7a10-4a4d-85c5-a5fb18382a85))
    (fp_line (start -0.223 3.569) (end -1.498 3.569)
      (stroke (width 0.254) (type solid)) (layer "B.Fab") (tstamp d7090a33-621e-4ce2-a49e-13fd35239ed2))
    (fp_line (start -0.219 -0.95) (end 1.719 -0.95)
      (stroke (width 0.254) (type solid)) (layer "B.Fab") (tstamp c99afe13-2410-4203-abd1-07b11a715bcd))
    (fp_line (start 2.75 1.95) (end -2.75 1.95)
      (stroke (width 0.254) (type solid)) (layer "B.Fab") (tstamp bd541b65-7f91-4032-afde-db6afe1d2072))
    (fp_line (start 3.216 1.138) (end 3.216 0)
      (stroke (width 0.254) (type solid)) (layer "B.Fab") (tstamp ee918834-1eae-42fb-8621-6e4c2621d37e))
    (fp_circle (center -1.5 0.55) (end -1.675 0.55)
      (stroke (width 0.35) (type solid)) (fill none) (layer "Cmts.User") (tstamp aa933b6a-7ea2-454a-b2d0-ec4886f0db21))
    (fp_circle (center 1.5 0.55) (end 1.325 0.55)
      (stroke (width 0.35) (type solid)) (fill none) (layer "Cmts.User") (tstamp 5bd393fa-7c35-4c7f-a6bf-9ff4d6fb8c63))
    (fp_poly
      (pts
        (xy -0.2 2)
        (xy -1.5 2)
        (xy -1.5 3.6)
        (xy -0.2 3.6)
      )

      (stroke (width 0) (type solid)) (fill solid) (layer "Cmts.User") (tstamp 313690c6-8195-453e-8cca-af3a37946200))
    (pad "" np_thru_hole circle (at -1.5 0.55 180) (size 0.9 0.9) (drill 0.9) (layers "*.Cu" "*.Mask") (tstamp e488b2be-a4e0-4132-9628-76ada8ff73af))
    (pad "" np_thru_hole circle (at 1.5 0.55 180) (size 0.9 0.9) (drill 0.9) (layers "*.Cu" "*.Mask") (tstamp 740f10d6-1ad2-46ab-81da-1792eb783382))
    (pad "1" smd rect (at 2.25 -1.7 ${p.rot + 90}) (size 1.524 0.6) (layers "B.Cu" "B.Paste" "B.Mask")
     ${p.one.str} (tstamp 7706f26f-68ec-4ccd-b18f-b64586559d57))
    (pad "2" smd rect (at -0.75 -1.7 ${p.rot + 90}) (size 1.524 0.6) (layers "B.Cu" "B.Paste" "B.Mask")
      ${p.two.str} (tstamp 1744b573-807e-4509-86e7-0dbb10741ca4))
    (pad "3" smd rect (at -2.25 -1.7 ${p.rot + 90}) (size 1.524 0.6) (layers "B.Cu" "B.Paste" "B.Mask")
      ${p.three.str} (tstamp 620f2889-c0a4-41f5-893d-04b3a66be4ca))
    (pad "4" smd rect (at -3.6 -0.6 ${p.rot + 180}) (size 1.2 0.7) (layers "B.Cu" "B.Paste" "B.Mask") (tstamp 78394e76-ef27-47e2-a166-6ed9166f3788))
    (pad "4" smd rect (at -3.6 1.7 ${p.rot + 180}) (size 1.2 0.7) (layers "B.Cu" "B.Paste" "B.Mask") (tstamp ce163aeb-124f-4da2-a932-969431bfbf48))
    (pad "4" smd rect (at 3.6 -0.6 ${p.rot + 180}) (size 1.2 0.7) (layers "B.Cu" "B.Paste" "B.Mask") (tstamp d41c2dff-ea01-4ba1-9f97-03cce34491e3))
    (pad "4" smd rect (at 3.6 1.7 ${p.rot + 180}) (size 1.2 0.7) (layers "B.Cu" "B.Paste" "B.Mask") (tstamp f1971a40-35a1-49bf-bb10-374b97e1d07b))
  )

`
    }
}