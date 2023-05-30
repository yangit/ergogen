set -ex
rm -rf ./output
PCBS=("left" "right" "thumb" "test")
LAYERS=F.Cu,F.Paste,F.SilkS,F.Mask,B.Cu,B.Paste,B.SilkS,B.Mask,Edge.Cuts
OUTDIR=~/Dropbox/github/flactyl/pcb/ergogen/output

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


cd $OUTDIR
for PCB in ${PCBS[@]}; do
    mkdir -p $OUTDIR/$PCB
    cd $OUTDIR/$PCB
    /Applications/KiCad/KiCad.app/Contents/MacOS/kicad-cli pcb export step $OUTDIR/pcbs/$PCB.kicad_pcb
    mv ../outlines/${PCB}_* ./
    mv ../pcbs/${PCB}.kicad_pcb ./
    cp ../../input/bom/${PCB}.csv ./${PCB}_bom.csv
    mv ../../input/${PCB}.yaml ./
done
cd $OUTDIR
cd ..
node input/make_cpl.js
open -n /Applications/KiCad/Pcbnew.app/ --args $OUTDIR/left/left.kicad_pcb
rm -rf $OUTDIR/outlines
rm -rf $OUTDIR/pcbs


echo "\n\n\nAll done"