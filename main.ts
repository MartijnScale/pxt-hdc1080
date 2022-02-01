//% color=190 weight=100 icon="\uf2c8" block="HDC1080"

namespace HDC1080 {
    const chipAddress = 0x40
    const HDC1080_TEMP = 0x00
    const HDC1080_HUMID = 0x01
    const HDC1080_CONF = 0x02
    const HDC1080_SER_FIRST = 0xFB
    const HDC1080_SER_MID = 0xFC
    const HDC1080_SER_LAST = 0xFD
    const HDC1080_MANUF_ID = 0xFE
    const HDC1080_DEV_ID = 0xFF

    function command(address: number, register: number) {
        let tempbuf = pins.createBuffer(1)
        tempbuf[0] = register
        pins.i2cWriteBuffer(address, tempbuf, false)
    }

    function getResponse(adress: number) {
        let i2cBuffer = pins.i2cReadBuffer(chipAddress, 2, false)  //response always two bytes
        return i2cBuffer.getNumber(NumberFormat.UInt16BE, 0)
    }

    //% block="Manufacturer ID"
    export function getManufID() {
        command(chipAddress, HDC1080_MANUF_ID)
        return getResponse(chipAddress)
    }

    //% block="Device ID"
    function getDeviceID() {
        command(chipAddress, HDC1080_DEV_ID)
        return getResponse(chipAddress)
    }

    //% block="Serial ID"
    function getSerialID() {
        command(chipAddress, HDC1080_SER_FIRST)
        let first = getResponse(chipAddress)
        command(chipAddress, HDC1080_SER_MID)
        let mid = getResponse(chipAddress)
        command(chipAddress, HDC1080_SER_LAST)
        let last = getResponse(chipAddress)
        let strOut = first.toString() + "-" + mid.toString() + "-" + last.toString()
        return strOut
    }

    //% block="Get Temperature"
    function getTemp() {
        command(chipAddress, HDC1080_TEMP)
        basic.pause(100)                                 //100 ms for measurement to complete
        let tempRaw = getResponse(chipAddress)
        let temp = ((tempRaw / 65536) * 165) - 40
        return temp
    }

    //% block="Get Humidity"
    function getHumid() {
        command(chipAddress, HDC1080_HUMID)
        basic.pause(100)                                 //10 ms for measurement to complete
        let humidRaw = getResponse(chipAddress)
        let humid = ((humidRaw / 65536) * 100)
        return humid
    }
}