
> Open this page at [https://martijnscale.github.io/pxt-hdc1080/](https://martijnscale.github.io/pxt-hdc1080/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.
It is a basic micro:bit extension for the HDC1080, a Low Power, High Accuracy Digital Humidity Sensor with Temperature Sensor from Texas Instruments. More information about Texas Instruments can be found at: www.ti.com. The author of this extensions has no links or interests in Texas Instruments or it's products, other than as a user. 
The code is developed for and tested with a CJMCU-8118 breakout board, on which the HDC1080 and a CCS811 sensor are mounted.

To use this **extension** with the micro:bit:
* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/martijnscale/pxt-hdc1080** and import

## Blocks preview

The extension has the following blocks:
- Manufacturer ID: Returns the manufacturer ID for Texas Instruments, currently 21577 (0x5449)
- Device ID: Returns the ID of the HDC1080 device, currently 4176 (0x1050)
- Serial ID: Returns a string of 3 bytes with the Serial ID of the HDC1080 device, in the form of aaaaa-bbbbb-ccccc
- Get Temperature: Returns the temperature as calculated from the raw Temperature measurement output. See Datasheet for more details
- Get Humidity: Returns the humidity as calculated from the raw Humidity measurement output. See Datasheet for more details

## Harwdare

The HDC1080 sensor uses I2C to communicate with the micro:bit. The following connections should be made:

|HDC1080|micro:bit|
|:---:|:---:|
|Vdd|3V|
|GND (EP)|GND|
|SCL|SCL (GPIO 19)|
|SDA|SDA (GPIO 20)|

(I used the simple CJMCU-8118 breakout board, on which the HDC1080 and a CCS811 sensor are mounted. For this board, the remaining pins (INT, RST, ADD and WAK) are not connected. If you want to use this breakout board with the CCS811 sensor as well, then the WAK pin should be connected according the descirption for the CCS811 extension).

For a description of the CCS811 extension, go to https://martijnscale.github.io/pxt-ccs811/

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
* Texas Instruments
* HDC1080
* CJMCU-8118
* Humidity and temperature
