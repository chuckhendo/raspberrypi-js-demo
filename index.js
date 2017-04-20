const gpio = require("rpi-gpio");

gpio.setMode(gpio.MODE_BCM);

function promiseSetupPin(pin, direction) {
    return new Promise((resolve, reject) => {
        gpio.setup(pin, direction, resolve);
    });
}

Promise.all(promiseSetupPin(18, gpio.DIR_OUT)).then(() => {
    gpio.write(18, true);
});
