# The general idea of this file, we need to generate a yaml file for each pcb for ergogen to use
# but I don't want to have to manually edit each yaml file, so I generate them from a single yaml file
# then I use the ergogen cli to generate the kicad_pcb files
# and then use a script to copy the tracks from the left to the right and thumb pcbs

# basically it is a generator for ergogen generator :) allows me to define variables once, and keep things DRY

set -ex
rm -rf ./output
PCBS=("left" "right" "thumb" "test")
LAYERS=F.Cu,F.Paste,F.SilkS,F.Mask,B.Cu,B.Paste,B.SilkS,B.Mask,Edge.Cuts
OUTDIR=$(readlink -f "./output")
mkdir -p ./output
mkdir -p ./temp

# generate yaml file
node input/gen_yaml.js tpl/left.yaml
node input/gen_yaml.js tpl/test.yaml
node input/gen_yaml.js tpl/thumb.yaml

# mirror left.yaml to right.yaml
node input/mirror_left.js

# verify that the yaml files are using the same constants
node input/sane_constants.js left.yaml thumb.yaml

# some more verification
node input/sane.js

# generate kicad_pcb files using ergogen cli
node src/cli.js ./temp/left.yaml -o output/
node src/cli.js ./temp/right.yaml -o output/
node src/cli.js ./temp/thumb.yaml -o output/
node src/cli.js ./temp/test.yaml -o output/

# Ergogen(this fork) does not support routing pcbs, so I have bypassed that by manually routing pcbs
# saving them under ./input/routed and then copying the tracks from saved pcbs to the generated pcbs
# if the elements layout similar I only need to make a small fixup to the tracks
node ./input/copy_tracks.js

# close any existing pcbnew instances (purely a UI thing, you can skip this step, 
# I use it to be able to see the changes) 
pkill -x pcbnew || true

# generate step files
cd $OUTDIR
for PCB in ${PCBS[@]}; do
    mkdir -p $OUTDIR/$PCB
    cd $OUTDIR/$PCB
    /Applications/KiCad/KiCad.app/Contents/MacOS/kicad-cli pcb export step $OUTDIR/pcbs/$PCB.kicad_pcb
    mv ../outlines/${PCB}_* ./
    mv ../pcbs/${PCB}.kicad_pcb ./
    cp ../../input/bom/${PCB}.csv ./${PCB}_bom.csv
done
cd $OUTDIR
cd ..

# generate cpl files for SMT assembly (they are used to place components on the pcb)
node input/make_cpl.js left.yaml
node input/make_cpl.js right.yaml
node input/make_cpl.js thumb.yaml
node input/make_cpl.js test.yaml

#move generated files to their respective folders
for PCB in ${PCBS[@]}; do
    mv ./temp/${PCB}.yaml $OUTDIR/$PCB
done

#open file for manual inspection (again purely a UI thing, you can skip this step)
# open -n /Applications/KiCad/Pcbnew.app/ --args $OUTDIR/thumb/thumb.kicad_pcb
# open -n /Applications/KiCad/Pcbnew.app/ --args $OUTDIR/left/left.kicad_pcb
open -n /Applications/KiCad/Pcbnew.app/ --args $OUTDIR/test/test.kicad_pcb

# cleanup
rm -rf $OUTDIR/outlines
rm -rf $OUTDIR/pcbs
rm -rf ./temp


echo "\n\n\nAll done"