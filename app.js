function addClass(selector, myClass) {
    elements = document.querySelectorAll(selector);
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add(myClass);
    }
}
function removeClass(selector, myClass) {
    elements = document.querySelectorAll(selector);
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove(myClass);
    }
}

const DEFAULT_ENERGY = 95;
let Battery = function () {
    this.energy = 0;
    this.getEnergy = function () {
        return this.energy;
    };
    this.setEnergy = function (energy) {
        this.energy = energy;
    };
    this.decreaseEnergy = function () {
        if (this.energy > 0) {
            this.energy -= 30;
        }
    }
};

let FlashLamp = function () {
    this.status = false;
    this.setBattery = function (battery) {
        this.battery = battery;
    };
    this.getBatteryInfo = function () {
        return this.battery.getEnergy();
    };
    this.turnOn = function () {
        this.status = true;
    };
    this.turnOff = function () {
        this.status = false;
    };

    this.lightActivate = function () {
        if (this.status) {
            addClass(".color-night", 'yellow');
        } else {
            removeClass(".color-night", 'yellow');
        }
    }
};
let rabbitBattery = new Battery();
let flashlight = new FlashLamp();

function setBattery() {
    rabbitBattery.setEnergy(DEFAULT_ENERGY);
}
function isBatteryEnergy() {
    flashlight.setBattery(rabbitBattery);
    if (flashlight.getBatteryInfo() > 0) {
        return true;
    } else {
        return false
    }
}
function changeStatus() {
    if (isBatteryEnergy()) {
        if (flashlight.status) {
            flashlight.turnOff();
            flashlight.lightActivate();
        } else {
            flashlight.turnOn();
            console.log(flashlight.status)
            flashlight.lightActivate();
            flashlight.battery.decreaseEnergy();
            console.log(flashlight.getBatteryInfo());
        }
    } else {
        flashlight.turnOff();
       flashlight.lightActivate()
    }
}




