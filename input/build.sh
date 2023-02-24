set -ex
rm -rf ./output
PCBS=("left" "right" "thumb" "test")
LAYERS=F.Cu,F.Paste,F.SilkS,F.Mask,B.Cu,B.Paste,B.SilkS,B.Mask,Edge.Cuts

mkdir -p ./output

node input/gen_yaml.js
node input/mirror_left.js
node input/sane_constants.js left.yaml thumb.yaml
node input/sane.js
node src/cli.js ./input/left.yaml -o output/
node src/cli.js ./input/right.yaml -o output/
node src/cli.js ./input/thumb.yaml -o output/
node src/cli.js ./input/test.yaml -o output/
node ./input/copy_tracks.js
pkill -x pcbnew || true


cd ~/Dropbox/github/keyboard/ergogen/output
for PCB in ${PCBS[@]}; do
    mkdir -p ~/Dropbox/github/keyboard/ergogen/output/$PCB
    cd ~/Dropbox/github/keyboard/ergogen/output/$PCB
    /Applications/KiCad/KiCad.app/Contents/MacOS/kicad-cli pcb export step ~/Dropbox/github/keyboard/ergogen/output/pcbs/$PCB.kicad_pcb
    mv ../outlines/${PCB}_* ./
    mv ../pcbs/${PCB}.kicad_pcb ./
    cp ../../input/bom/${PCB}.csv ./${PCB}_bom.csv
    mv ../../input/${PCB}.yaml ./
done
cd ~/Dropbox/github/keyboard/ergogen
node input/make_cpl.js
open -n /Applications/KiCad/Pcbnew.app/ --args ~/Dropbox/github/keyboard/ergogen/output/left/left.kicad_pcb
rm -rf ~/Dropbox/github/keyboard/ergogen/output/outlines
rm -rf ~/Dropbox/github/keyboard/ergogen/output/pcbs


echo "\n\n\nAll done"