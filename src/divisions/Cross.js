import Division from '../division';
import settings from '../settings';

export default class Cross extends Division {

  constructor(crossType, color) {
    const count = 1;
    const limit = 1;
    super(count, limit, color);
    this.crossType = typeof crossType !== 'undefined' ? crossType : this.generateCrossType(this.seed, this.seedMultiplier);
  }

  generateCrossType(seed, seedMultiplier) {
    const crossTypes = ['nordic', 'greek', 'symmetric']
    // Generate a number between 0 & 2 to choose from the list of crossTypes.
    let choice = (seed * seedMultiplier * 120);
    let returnedChoice;
    // Let's be weird and loop over every digit in the multiplier and pick the last 0, 1, or 2.
    ('' + choice).split('').map((v, i) => {
      if (parseInt(v) === 0 || parseInt(v) === 1 || parseInt(v) === 2) {
        returnedChoice = crossTypes[parseInt(v)];
      }
    })
    console.log('CHOICE', returnedChoice);
    return returnedChoice;
  }

  generateCrossWidth(seed = settings.seed) {
    // @todo: Do a better job of generating the width of things.
    //        This is reproducable, but the variation between seeds is really minor.
    console.log('--------------------', (this.crossType.length * parseInt(seed.toString().substr(-1))));
    return Math.round(Math.ceil(seed * this.seedMultiplier) * (this.crossType.length) * parseInt(seed.toString().substr(-1)) + 1 );
  }

  draw(ctx) {
    console.log(`drawing a ${this.crossType} cross...`);

    switch(this.crossType) {
    case 'nordic':
      this.drawNordicCross(ctx);
      break;
    }

  }

  drawNordicCross(ctx) {
    const crossWidth = this.generateCrossWidth();
    console.log('CROSS WIDTH', crossWidth);

    ctx.beginPath();
    // straight across.
    ctx.moveTo(0, settings.flagHeight/2);
    ctx.lineTo(settings.flagWidth, settings.flagHeight/2);
    // the vertical line.
    ctx.moveTo(settings.flagWidth / 3, 0);
    ctx.lineTo(settings.flagWidth / 3, settings.flagHeight);
    ctx.strokeStyle = this.color.color;
    ctx.lineWidth = crossWidth;
    ctx.stroke();
  }

}
