
import { Cursors } from "./../cursors";

export class Cursor1 extends Cursors{

  constructor(index) {
    super(index);
    this.speed = 0.5;
    this.setParamsCursor();
    this.setParamsParticles();
    this.drawCursor();
  }

  setParamsCursor() {
    this.radiusCursor = 15;
    this.colorCursor = getComputedStyle(document.body).getPropertyValue('--color-third');
    this.maxSqueeze = 0.6;
    this.accelerator = 1000;
  }

  setParamsParticles() {
    this.strokeWidthParticles = 1.25;
    this.strokeColorParticles = getComputedStyle(document.body).getPropertyValue('--color-third');
    this.radiusStart = this.radiusCursor*3;
    this.radiusDiff = 7;
    this.nbrParticles = Math.round((this.diagonalWindow() + this.radiusDiff - this.radiusStart) / this.radiusDiff);
    this.transitionParticles = {
      duration: 1,
      delay: 6,
      easing : "linear"
    };
  }

  diagonalWindow() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    return Math.ceil(Math.sqrt(this.width*this.width + this.height*this.height));
  }
}

