set -ex
node input/mirror_left.js
node input/sane_constants.js config-flactyl-left.yaml config-flactyl-thumb.yaml
node input/sane.js
# node input/sane.js config-flactyl-right.yaml
# node input/sane.js config-flactyl-thumb.yaml
node src/cli.js ./input/config-flactyl-left.yaml -o output/flactyl
node src/cli.js ./input/config-flactyl-right.yaml -o output/flactyl
node src/cli.js ./input/config-flactyl-thumb.yaml -o output/flactyl
node ./input/copy_segments.js
pkill -x pcbnew ||true
open -n /Applications/KiCad/Pcbnew.app/ --args ~/Dropbox/github/keyboard/ergogen/output/flactyl/pcbs/right.kicad_pcb
mkdir -p ~/Dropbox/github/keyboard/ergogen/output/flactyl/step
# cd ~/Dropbox/github/keyboard/ergogen/output/flactyl/pcb
# /Applications/KiCad/KiCad.app/Contents/MacOS/kicad-cli pcb export step ~/Dropbox/github/keyboard/ergogen/output/flactyl/pcbs/left.kicad_pcb
# /Applications/KiCad/KiCad.app/Contents/MacOS/kicad-cli pcb export step ~/Dropbox/github/keyboard/ergogen/output/flactyl/pcbs/right.kicad_pcb
# /Applications/KiCad/KiCad.app/Contents/MacOS/kicad-cli pcb export step ~/Dropbox/github/keyboard/ergogen/output/flactyl/pcbs/thumb.kicad_pcb
