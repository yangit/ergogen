set -ex
node input/sane_constants.js config-flactyl-left.yaml config-flactyl-right.yaml config-flactyl-thumb.yaml
node input/sane.js config-flactyl-left.yaml
node input/sane.js config-flactyl-right.yaml
node input/sane.js config-flactyl-thumb.yaml
node src/cli.js ./input/config-flactyl-left.yaml -o output/flactyl
node src/cli.js ./input/config-flactyl-right.yaml -o output/flactyl
node src/cli.js ./input/config-flactyl-thumb.yaml -o output/flactyl
