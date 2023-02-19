set -ex
node input/mirror_left.js
node input/sane_constants.js config-flactyl-left.yaml config-flactyl-thumb.yaml
node input/sane.js
node src/cli.js ./input/config-flactyl-left.yaml -o output/
node src/cli.js ./input/config-flactyl-right.yaml -o output/
node src/cli.js ./input/config-flactyl-thumb.yaml -o output/
node ./input/copy_segments.js
pkill -x pcbnew || true
open -n /Applications/KiCad/Pcbnew.app/ --args ~/Dropbox/github/keyboard/ergogen/output/pcbs/right.kicad_pcb

mkdir -p ~/Dropbox/github/keyboard/ergogen/output/step
cd ~/Dropbox/github/keyboard/ergogen/output/step
# /Applications/KiCad/KiCad.app/Contents/MacOS/kicad-cli pcb export step ~/Dropbox/github/keyboard/ergogen/output/pcbs/left.kicad_pcb
# /Applications/KiCad/KiCad.app/Contents/MacOS/kicad-cli pcb export step ~/Dropbox/github/keyboard/ergogen/output/pcbs/right.kicad_pcb
/Applications/KiCad/KiCad.app/Contents/MacOS/kicad-cli pcb export step ~/Dropbox/github/keyboard/ergogen/output/pcbs/thumb.kicad_pcb


mkdir -p ~/Dropbox/github/keyboard/ergogen/output/pos
cd ~/Dropbox/github/keyboard/ergogen/output/pos
/Applications/KiCad/KiCad.app/Contents/MacOS/kicad-cli pcb export pos ~/Dropbox/github/keyboard/ergogen/output/pcbs/left.kicad_pcb
/Applications/KiCad/KiCad.app/Contents/MacOS/kicad-cli pcb export pos ~/Dropbox/github/keyboard/ergogen/output/pcbs/right.kicad_pcb
/Applications/KiCad/KiCad.app/Contents/MacOS/kicad-cli pcb export pos ~/Dropbox/github/keyboard/ergogen/output/pcbs/thumb.kicad_pcb


mkdir -p ~/Dropbox/github/keyboard/ergogen/output/bom
cd ~/Dropbox/github/keyboard/ergogen/output/bom
/Applications/KiCad/KiCad.app/Contents/MacOS/kicad-cli sch export python-bom ~/Dropbox/github/keyboard/ergogen/input/schema/left.kicad_sch
/Applications/KiCad/KiCad.app/Contents/MacOS/kicad-cli sch export python-bom ~/Dropbox/github/keyboard/ergogen/input/schema/right.kicad_sch
/Applications/KiCad/KiCad.app/Contents/MacOS/kicad-cli sch export python-bom ~/Dropbox/github/keyboard/ergogen/input/schema/thumb.kicad_sch

mkdir -p ~/Dropbox/github/keyboard/ergogen/output/drill
cd ~/Dropbox/github/keyboard/ergogen/output/drill
/Applications/KiCad/KiCad.app/Contents/MacOS/kicad-cli pcb export drill ~/Dropbox/github/keyboard/ergogen/output/pcbs/left.kicad_pcb
/Applications/KiCad/KiCad.app/Contents/MacOS/kicad-cli pcb export drill ~/Dropbox/github/keyboard/ergogen/output/pcbs/right.kicad_pcb
/Applications/KiCad/KiCad.app/Contents/MacOS/kicad-cli pcb export drill ~/Dropbox/github/keyboard/ergogen/output/pcbs/thumb.kicad_pcb
