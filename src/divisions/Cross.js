import Division from '../division';
import * as Utilities from '../utilities';
import settings from '../settings';

/**
 * Cross pattern.
 *
 * @class
 * @classdesc The Cross pattern describes two intersecting divisions of the field.
 * @augments Division
 * @namespace Divisions.Pales
 */
export default class Cross extends Division {

  constructor(crossType, color, width, border, borderWidth, borderColor) {
    const count = 1;
    const limit = 1;
    super(count, limit, color);
    this.crossType = typeof crossType !== 'undefined' ? crossType : this.generateCrossType(this.seed, this.seedMultiplier);
    this.crossWidth = width || this.generateCrossWidth(this.seed, this.seedMultiplier);
    this.border = border || false;
    this.borderWidth = borderWidth || this.generateBorderWidth(this.seed + this.seedMultiplier); // @todo Generate a border width
    this.borderColor = Utilities.generateColor(borderColor) || Utilities.generateColor(undefined, this.seed * this.seedMultiplier, this.seedMultiplier);
  }

  /**
   * Generates a "crossType" string.
   *
   * @example
   * // Returns 'greek'.
   * const newCross = new Cross();
   * newCross.generateCrossType(.123, .1);
   * @param {number} seed - A number less than one and more than 0 is expected.
   * @param {number} seedMultiplier - A number less than one and more than 0 is expected.
   * @returns {string} One of the available crossTypes: nordic, greek, symmetric.
   */
  generateCrossType(seed, seedMultiplier) {
    const crossTypes = ['nordic', 'greek', 'symmetric']
    // Generate a number between 0 & 2 to choose from the list of crossTypes.
    let choice = (seed * seedMultiplier * seed);
    let returnedChoice;
    // Let's be weird and loop over every digit in the multiplier and pick the last 0, 1, or 2.
    ('' + choice).split('').map((v, i) => {
      if (parseInt(v) === 0 || parseInt(v) === 1 || parseInt(v) === 2) {
        returnedChoice = crossTypes[parseInt(v)];
      }
    })
    return returnedChoice;
  }

  generateCrossWidth(seed, seedMultiplier) {
    const funcSeed = seed || this.seed;
    const funcSeedMultiplier = seedMultiplier || this.seedMultiplier;
    let width;
    width = Math.ceil(Utilities.modifySeed(funcSeed, funcSeedMultiplier) * 100) + 1; // Add one so we never have 0.
    if (width >= 100) {
      width = width / 2; // Cap width at 100, any larger and we lose the shape.
    }
    return width;
  }

  generateBorderWidth() {
    return this.crossWidth + (this.crossWidth * .6); // Return a border that's +6% of the cross' width.
  }

  draw(ctx) {
    switch(this.crossType) {
    case 'nordic':
      this.drawNordicCross(ctx);
      break;
    case 'greek':
      this.drawGreekCross(ctx);
      break;
    case 'symmetric':
      this.drawSymmetricCross(ctx);
      break;
    }
  }

  drawNordicCross(ctx) {

    const drawCross = (width, color) => {
      ctx.beginPath();
      // straight across.
      ctx.moveTo(0, settings.flagHeight/2);
      ctx.lineTo(settings.flagWidth, settings.flagHeight/2);
      // the vertical line.
      ctx.moveTo(settings.flagWidth / 3, 0);
      ctx.lineTo(settings.flagWidth / 3, settings.flagHeight);

      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.stroke();
    }

    if (this.border === true && this.borderWidth > 0 && /^#/.test(this.borderColor.color)) {
      drawCross(this.borderWidth, this.borderColor.color);
      drawCross(this.crossWidth, this.color.color);
    } else {
      drawCross(this.crossWidth, this.color.color);
    }

  }

  drawGreekCross(ctx) {
    const lineLength = Utilities.findGreaterNumber(settings.flagWidth, settings.flagHeight) * .20; // 20% of either the flag height or width, whichever is greater.
    const borderLineLength = (lineLength + (this.borderWidth / 12)); // Divide by twelve because that's the number of edges.

    const drawCross = (width, color, extra = 0) => {
      ctx.beginPath();
      ctx.moveTo(settings.flagWidth / 2, settings.flagHeight/2); // move to center.
      ctx.lineTo((settings.flagWidth / 2) - (extra + +(extra - lineLength)), (settings.flagHeight / 2));
      ctx.moveTo(settings.flagWidth / 2, settings.flagHeight/2); // move to center.
      ctx.lineTo((settings.flagWidth / 2) + (extra + +(extra - lineLength)), (settings.flagHeight / 2));
      ctx.moveTo(settings.flagWidth / 2, settings.flagHeight / 2); // move to center.
      ctx.lineTo((settings.flagWidth / 2), (settings.flagHeight / 2) - (extra + +(extra - lineLength)));
      ctx.moveTo(settings.flagWidth / 2, settings.flagHeight / 2); // move to center.
      ctx.lineTo((settings.flagWidth / 2), (settings.flagHeight / 2) + (extra + +(extra - lineLength)));
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.stroke();
    }

    if (this.border === true && this.borderWidth > 0 && /^#/.test(this.borderColor.color)) {
      drawCross(this.borderWidth, this.borderColor.color, borderLineLength);
      drawCross(this.crossWidth, this.color.color);
    } else {
      drawCross(this.crossWidth, this.color.color);
    }

  }

  drawSymmetricCross(ctx) {

    const drawCross = (width, color) => {
      ctx.beginPath();
      // straight across.
      ctx.moveTo(0, settings.flagHeight/2);
      ctx.lineTo(settings.flagWidth, settings.flagHeight/2);
      // the vertical line.
      ctx.moveTo(settings.flagWidth / 2, 0);
      ctx.lineTo(settings.flagWidth / 2, settings.flagHeight);
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.stroke();
    }

    if (this.border === true && this.borderWidth > 0 && /^#/.test(this.borderColor.color)) {
      drawCross(this.borderWidth, this.borderColor.color);
      drawCross(this.crossWidth, this.color.color);
    } else {
      drawCross(this.crossWidth, this.color.color);
    }
  }

}
