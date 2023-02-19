set -ex
rm -rf ./output
PCBS=("left" "right" "thumb" "test")
LAYERS=F.Cu,F.Paste,F.SilkS,F.Mask,B.Cu,B.Paste,B.SilkS,B.Mask,Edge.Cuts

mkdir -p ./output
mkdir -p ./output/jlcpcb

node input/mirror_left.js
node input/sane_constants.js left.yaml thumb.yaml
node input/sane.js
node src/cli.js ./input/left.yaml -o output/
node src/cli.js ./input/right.yaml -o output/
node src/cli.js ./input/thumb.yaml -o output/
node src/cli.js ./input/test.yaml -o output/
node ./input/copy_tracks.js
pkill -x pcbnew || true


# mkdir 
# cd ~/Dropbox/github/keyboard/ergogen/output/bom
# /Applications/KiCad/KiCad.app/Contents/MacOS/kicad-cli sch export python-bom ~/Dropbox/github/keyboard/ergogen/input/schema/left.kicad_sch
# /Applications/KiCad/KiCad.app/Contents/MacOS/kicad-cli sch export python-bom ~/Dropbox/github/keyboard/ergogen/input/schema/right.kicad_sch
# /Applications/KiCad/KiCad.app/Contents/MacOS/kicad-cli sch export python-bom ~/Dropbox/github/keyboard/ergogen/input/schema/thumb.kicad_sch


cd ~/Dropbox/github/keyboard/ergogen/output
for PCB in ${PCBS[@]}; do
    mkdir -p ~/Dropbox/github/keyboard/ergogen/output/$PCB
    cd ~/Dropbox/github/keyboard/ergogen/output/$PCB
    /Applications/KiCad/KiCad.app/Contents/MacOS/kicad-cli pcb export step ~/Dropbox/github/keyboard/ergogen/output/pcbs/$PCB.kicad_pcb
    /Applications/KiCad/KiCad.app/Contents/MacOS/kicad-cli pcb export pos ~/Dropbox/github/keyboard/ergogen/output/pcbs/$PCB.kicad_pcb
    /Applications/KiCad/KiCad.app/Contents/MacOS/kicad-cli pcb export gerber --layers $LAYERS ~/Dropbox/github/keyboard/ergogen/output/pcbs/$PCB.kicad_pcb
    /Applications/KiCad/KiCad.app/Contents/MacOS/kicad-cli pcb export drill ~/Dropbox/github/keyboard/ergogen/output/pcbs/$PCB.kicad_pcb
    mv ../outlines/${PCB}_* ./
    mv ../pcbs/${PCB}.kicad_pcb ./
    zip -j ../jlcpcb/$PCB.zip $PCB.gbr $PCB.drl
done

open -n /Applications/KiCad/Pcbnew.app/ --args ~/Dropbox/github/keyboard/ergogen/output/right/right.kicad_pcb
rm -rf ~/Dropbox/github/keyboard/ergogen/output/outlines
rm -rf ~/Dropbox/github/keyboard/ergogen/output/pcbs


echo "\n\n\nAll done"