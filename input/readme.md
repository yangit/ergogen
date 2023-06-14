# Export

Do read comments in `./input/build.sh`

```bash
./input/build.sh
```

After you have executed the build command you need to prepare the files for JLCPCB.com
So you go into `./output/*` and for every folder you do the steps below:

- Open the `.kicad` file under the generated folder
- Run DRC
- Press "B" to fill zones
- Phabrication Output => gerber
- Select 'Gerber2' format on drill page
- Export drill, pos, gerber
- Create .zip of the entire folder contents

## Order on jlcpb

- upload .zip form the above step
- select color
- select assembly
- select bottom side

## New footprints

Are taken from EasyEda online IDE by JLCPCB
Than converted using [this](https://wokwi.com/tools/easyeda2kicad) tool
That guarantees that when we order parts SMT service they will solder it in correct direction
