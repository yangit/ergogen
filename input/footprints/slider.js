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
    (tstamp 92e93877-6919-48c2-a102-0a0b7b3280c1)
    (attr smd)
     ${p.at /* parametric position */}
    (fp_text reference "${p.ref}" (at -0.16 2.935 -180) ${p.ref_hide} (layer "B.Fab")
        (effects (font (size 1.143 1.143) (thickness 0.152)) (justify left mirror))
      (tstamp cff05649-adbd-4f82-8ba2-7741561258d3)
    )
    (fp_text value "SW-TH_MSK12C02-HB-1" (at -0.16 -4.593) (layer "F.Fab") hide
        (effects (font (size 1.143 1.143) (thickness 0.152)) (justify left))
      (tstamp 081cc6e4-bd19-48af-b629-a13a23aecb85)
    )
    (fp_text user "gge217" (at 0 0.12 -180) (layer "Cmts.User")
        (effects (font (size 1 1) (thickness 0.15)))
      (tstamp c617b469-ea22-4c3e-9690-53e0600e3bb0)
    )
    (fp_line (start -3.216 -1.018) (end -3.216 0.12)
      (stroke (width 0.254) (type solid)) (layer "B.Fab") (tstamp 2d721eb6-812d-42be-8190-de8d23c9a9f3))
    (fp_line (start -2.75 -1.83) (end 2.75 -1.83)
      (stroke (width 0.254) (type solid)) (layer "B.Fab") (tstamp 11da11c9-0df6-4770-8c2d-6613290b9d82))
    (fp_line (start 0.219 1.07) (end -1.719 1.07)
      (stroke (width 0.254) (type solid)) (layer "B.Fab") (tstamp f7fca164-07b4-4494-a440-b3cf76303a75))
    (fp_line (start 0.223 -3.449) (end 1.498 -3.449)
      (stroke (width 0.254) (type solid)) (layer "B.Fab") (tstamp 9298e477-2119-46f8-9b4a-2c899804b520))
    (fp_line (start 0.223 -1.849) (end 0.223 -3.449)
      (stroke (width 0.254) (type solid)) (layer "B.Fab") (tstamp 7a57ba45-6e41-4a7b-9bec-5c5a18054b14))
    (fp_line (start 1.498 -3.449) (end 1.498 -1.849)
      (stroke (width 0.254) (type solid)) (layer "B.Fab") (tstamp b8a1c3b9-763e-4d53-bd77-d630acd25fdf))
    (fp_line (start 1.719 1.07) (end 1.281 1.07)
      (stroke (width 0.254) (type solid)) (layer "B.Fab") (tstamp 31129c54-973a-4e08-8b34-ef2e9e64d1e4))
    (fp_line (start 2.769 1.07) (end 2.759 1.07)
      (stroke (width 0.254) (type solid)) (layer "B.Fab") (tstamp 277d96cd-19bf-40a9-8e68-319c71fc0c8c))
    (fp_line (start 3.301 0.12) (end 3.301 -1.018)
      (stroke (width 0.254) (type solid)) (layer "B.Fab") (tstamp 762cb352-b50b-4458-bad0-b8bd82304d96))
    (fp_circle (center -1.5 -0.43) (end -1.325 -0.43)
      (stroke (width 0.35) (type solid)) (fill none) (layer "Cmts.User") (tstamp cb5ad0c3-1de9-4ce1-bcfb-439b35ebb1fa))
    (fp_circle (center 1.5 -0.43) (end 1.675 -0.43)
      (stroke (width 0.35) (type solid)) (fill none) (layer "Cmts.User") (tstamp 48c7e219-37a2-48e5-9446-ec43f4e48a0d))
    (fp_poly
      (pts
        (xy 0.2 -1.88)
        (xy 1.5 -1.88)
        (xy 1.5 -3.48)
        (xy 0.2 -3.48)
      )

      (stroke (width 0) (type solid)) (fill solid) (layer "Cmts.User") (tstamp 84c7acc9-291e-4194-82f6-96086c7f6c41))
    (pad "" np_thru_hole circle (at -1.5 -0.43 180) (size 0.9 0.9) (drill 0.9) (layers "*.Cu" "*.Mask") (tstamp 0d2505d5-fce2-4b14-8356-e50840c410f3))
    (pad "" np_thru_hole circle (at 1.5 -0.43 180) (size 0.9 0.9) (drill 0.9) (layers "*.Cu" "*.Mask") (tstamp 65b1cd2a-5a9d-4294-825f-cb8961865d41))
    (pad "1" smd rect (at -2.25 1.82 ${p.rot + 90}) (size 1.524 0.6) (layers "B.Cu" "B.Paste" "B.Mask") (tstamp ca667a56-2c4f-462d-9094-283005ecf62d)  ${p.one.str})
    (pad "2" smd rect (at 0.75 1.82 ${p.rot + 90}) (size 1.524 0.6) (layers "B.Cu" "B.Paste" "B.Mask") (tstamp c7476ecb-697b-48ee-a46a-1e42debaac64)  ${p.two.str})
    (pad "3" smd rect (at 2.25 1.82 ${p.rot+90}) (size 1.524 0.6) (layers "B.Cu" "B.Paste" "B.Mask") (tstamp 390ce16f-5a5a-4a45-9a68-9407754dad57)  ${p.three.str})
    (pad "4" smd rect (at -3.6 -1.58 ${p.rot}) (size 1.2 0.7) (layers "B.Cu" "B.Paste" "B.Mask") (tstamp fc26d84e-0be2-49be-8f8f-e32958869dc4))
    (pad "4" smd rect (at -3.6 0.72 ${p.rot}) (size 1.2 0.7) (layers "B.Cu" "B.Paste" "B.Mask") (tstamp 4e76887e-4f13-47c0-a4fc-64047a787ce6))
    (pad "4" smd rect (at 3.6 -1.58 ${p.rot}) (size 1.2 0.7) (layers "B.Cu" "B.Paste" "B.Mask") (tstamp e0c9c197-3594-461f-b122-93f862099d7b))
    (pad "4" smd rect (at 3.6 0.72 ${p.rot}) (size 1.2 0.7) (layers "B.Cu" "B.Paste" "B.Mask") (tstamp ea0d43ed-c3b9-4d80-9ef7-36082954d6e2))
  )`
      return `
      
  (footprint "easyeda:SW-TH_MSK12C02-HB-1" (layer "F.Cu")
    (tstamp 7496269e-e81f-4a29-90e2-4278f5cd38ff)
    (attr smd)
     ${p.at /* parametric position */}
    (fp_text reference "${p.ref}" (at -1 0.8 180) ${p.ref_hide} (layer "B.Fab")
        (effects (font (size 1.143 1.143) (thickness 0.152)) (justify left mirror))
      (tstamp 82183d0f-8551-4bba-a597-53ad37dbe2d3)
    )
    (fp_text value "SW-TH_MSK12C02-HB-1" (at -0.16 -4.593) (layer "F.Fab") hide
        (effects (font (size 1.143 1.143) (thickness 0.152)) (justify left))
      (tstamp 7a9782e5-5f47-44c7-a7dd-49dad12ad12c)
    )
    (fp_line (start -3.216 0.062) (end -3.216 1.2)
      (stroke (width 0.254) (type solid)) (layer "B.Fab") (tstamp ee918834-1eae-42fb-8621-6e4c2621d37e))
    (fp_line (start -2.75 -0.75) (end 2.75 -0.75)
      (stroke (width 0.254) (type solid)) (layer "B.Fab") (tstamp bd541b65-7f91-4032-afde-db6afe1d2072))
    (fp_line (start 0.219 2.15) (end -1.719 2.15)
      (stroke (width 0.254) (type solid)) (layer "B.Fab") (tstamp c99afe13-2410-4203-abd1-07b11a715bcd))
    (fp_line (start 0.223 -2.369) (end 1.498 -2.369)
      (stroke (width 0.254) (type solid)) (layer "B.Fab") (tstamp d7090a33-621e-4ce2-a49e-13fd35239ed2))
    (fp_line (start 0.223 -0.769) (end 0.223 -2.369)
      (stroke (width 0.254) (type solid)) (layer "B.Fab") (tstamp 578f6a07-7a10-4a4d-85c5-a5fb18382a85))
    (fp_line (start 1.498 -2.369) (end 1.498 -0.769)
      (stroke (width 0.254) (type solid)) (layer "B.Fab") (tstamp 01157b6c-7013-4862-8653-46b4ecd1570a))
    (fp_line (start 1.719 2.15) (end 1.281 2.15)
      (stroke (width 0.254) (type solid)) (layer "B.Fab") (tstamp a1d6f027-f02f-4d4a-9ef5-219d3d5ecf57))
    (fp_line (start 2.769 2.15) (end 2.759 2.15)
      (stroke (width 0.254) (type solid)) (layer "B.Fab") (tstamp e2c19eff-159c-447f-bb7d-b71203e26cae))
    (fp_line (start 3.301 1.2) (end 3.301 0.062)
      (stroke (width 0.254) (type solid)) (layer "B.Fab") (tstamp b3aa93e9-b20c-400f-b819-619bb9b5b783))
    (fp_circle (center -1.5 0.65) (end -1.325 0.65)
      (stroke (width 0.35) (type solid)) (fill none) (layer "Cmts.User") (tstamp 5bd393fa-7c35-4c7f-a6bf-9ff4d6fb8c63))
    (fp_circle (center 1.5 0.65) (end 1.675 0.65)
      (stroke (width 0.35) (type solid)) (fill none) (layer "Cmts.User") (tstamp aa933b6a-7ea2-454a-b2d0-ec4886f0db21))
    (fp_poly
      (pts
        (xy 0.2 -0.8)
        (xy 1.5 -0.8)
        (xy 1.5 -2.4)
        (xy 0.2 -2.4)
      )

      (stroke (width 0) (type solid)) (fill solid) (layer "Cmts.User") (tstamp 313690c6-8195-453e-8cca-af3a37946200))
    (pad "" np_thru_hole circle (at -1.5 0.65 180) (size 0.9 0.9) (drill 0.9) (layers "*.Cu" "*.Mask") (tstamp 740f10d6-1ad2-46ab-81da-1792eb783382))
    (pad "" np_thru_hole circle (at 1.5 0.65 180) (size 0.9 0.9) (drill 0.9) (layers "*.Cu" "*.Mask") (tstamp e488b2be-a4e0-4132-9628-76ada8ff73af))
    (pad "1" smd rect (at -2.25 2.9 ${p.rot + 90}) (size 1.524 0.6) (layers "B.Cu" "B.Paste" "B.Mask") (tstamp 7706f26f-68ec-4ccd-b18f-b64586559d57)    ${p.one.str})
    (pad "2" smd rect (at 0.75 2.9 ${p.rot + 90}) (size 1.524 0.6) (layers "B.Cu" "B.Paste" "B.Mask") (tstamp 1744b573-807e-4509-86e7-0dbb10741ca4)    ${p.two.str})
    (pad "3" smd rect (at 2.25 2.9 ${p.rot + 90}) (size 1.524 0.6) (layers "B.Cu" "B.Paste" "B.Mask") (tstamp 620f2889-c0a4-41f5-893d-04b3a66be4ca)    ${p.three.str})
    (pad "4" smd rect (at -3.6 -0.5 ${p.rot}) (size 1.2 0.7) (layers "B.Cu" "B.Paste" "B.Mask") (tstamp f1971a40-35a1-49bf-bb10-374b97e1d07b))
    (pad "4" smd rect (at -3.6 1.8 ${p.rot}) (size 1.2 0.7) (layers "B.Cu" "B.Paste" "B.Mask") (tstamp d41c2dff-ea01-4ba1-9f97-03cce34491e3))
    (pad "4" smd rect (at 3.6 -0.5 ${p.rot}) (size 1.2 0.7) (layers "B.Cu" "B.Paste" "B.Mask") (tstamp ce163aeb-124f-4da2-a932-969431bfbf48))
    (pad "4" smd rect (at 3.6 1.8 ${p.rot}) (size 1.2 0.7) (layers "B.Cu" "B.Paste" "B.Mask") (tstamp 78394e76-ef27-47e2-a166-6ed9166f3788))
  )

  `
    }
}