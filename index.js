const gpio = require("rpi-gpio");

gpio.setMode(gpio.MODE_BCM);

function setupPin(pin, direction) {
    return new Promise((resolve, reject) => {
        gpio.setup(pin, direction, resolve);
    });
}

function setupPins() {
    return Promise.all([setupPin(24, gpio.DIR_OUT), setupPin(23, gpio.DIR_OUT), setupPin(18, gpio.DIR_OUT)]);
}

function resetPins() {
    gpio.write(18, false);
    gpio.write(23, false);
    gpio.write(24, false);
}

async function main() {
    await setupPins();
    resetPins();
}

main();