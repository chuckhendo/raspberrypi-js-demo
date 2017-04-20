const gpio = require("rpi-gpio");

gpio.setMode(gpio.MODE_BCM);

function setupPin(pin, direction) {
    return new Promise((resolve, reject) => {
        gpio.setup(pin, direction, resolve);
    });
}

function writePin(pin, value) {
    return new Promise((resolve, reject) => {
        gpio.write(pin, value, resolve);
    });
}

function setupPins() {
    return Promise.all([setupPin(24, gpio.DIR_OUT), setupPin(23, gpio.DIR_OUT), setupPin(18, gpio.DIR_OUT)]);
}

function resetPins() {
    return Promise.all([writePin(18, false), writePin(23, false), writePin(24, false)]);
}

async function main() {
    await setupPins();
    await resetPins();

    const pins = [18, 23, 24];
    let currentIndex = 0;

    setInterval(async function() {
        const currentPin = pins[currentIndex];
        await resetPins();
        await writePin(currentPin, true);
        currentIndex = currentIndex + 1 >= pins.length ? 0 : currentIndex + 1;
    }, 300);


}

main();