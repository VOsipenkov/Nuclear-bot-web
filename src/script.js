function button(){
    return "button";
}

class Slider {
    constructor(width, height, counter) {
        this.width = width;
        this.height = height;
        this.counter = counter;
    }

    nextSlide(){
        console.log("Move forward");
    }

    prevSlide(){
        console.log("Move backward");
    }

    whoAmI(){
        console.log(`Width: ${this.width}, Height: ${this.height}, Counter: ${this.counter}`);
    }
}

const slider = new Slider(600, 400, 5);
slider.whoAmI();

class AutoSlider extends Slider {
    constructor(width, height, counter, auto) {
        super(width, height, counter);
        this.auto = auto;
    }

    play(){
        console.log(`Auto play is ${this.auto}`);
    }
}

const autoslider = new AutoSlider(800, 600, 10, true);
autoslider.whoAmI();

export {button, Slider, AutoSlider};