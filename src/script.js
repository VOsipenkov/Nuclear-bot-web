"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slider = exports.AutoSlider = void 0;
exports.btn = button;
function button() {
  return "button";
}
class Slider {
  constructor(width, height, counter) {
    this.width = width;
    this.height = height;
    this.counter = counter;
  }
  nextSlide() {
    console.log("Move forward");
  }
  prevSlide() {
    console.log("Move backward");
  }
  whoAmI() {
    console.log("Width: ".concat(this.width, ", Height: ").concat(this.height, ", Counter: ").concat(this.counter));
  }
}
exports.Slider = Slider;
const slider = new Slider(600, 400, 5);
slider.whoAmI();
class AutoSlider extends Slider {
  constructor(width, height, counter, auto) {
    super(width, height, counter);
    this.auto = auto;
  }
  play() {
    console.log("Auto play is ".concat(this.auto));
  }
}
exports.AutoSlider = AutoSlider;
const autoslider = new AutoSlider(800, 600, 10, true);
autoslider.whoAmI();