const gpio = require("rpi-gpio");

gpio.setMode(gpio.MODE_BCM);

function setupPin(pin, direction) {
    return new Promise((resolve, reject) => {
        gpio.setup(pin, direction, resolve);
    });
}

Promise.all([setupPin(24, gpio.DIR_OUT)]).then(() => {
    gpio.write(24, true);
});
