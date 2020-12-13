/**
 * @file Houses the class properties and methods for the Bend division.
 */
import * as Utilities from '../utilities';
import settings from '../settings';
import Division from '../division';

/**
 * Bends pattern.
 *
 * @class
 * @classdesc The Bends pattern describes a single diagonal line in either the dexter or sinister direction.
 * @augments Division
 * @namespace Divisions.Bend
 */
export default class Bend extends Division {
    /**
     * Creates a Bend.
     *
     * @example
     * // Creates two white Bends across the flag with black borders
     * const bend = new Bend(2, 'dexter', false, '#ffffff', undefined, true, 20, '#000000');
     * // Creates a single Bend division as a party of the flag.
     * const bendFilled = new Bend(1, 'sinister', true, '#ffffff');
     * @param {number} count - The number of divisions to draw.
     * @param {string} direction - The orientation of the Pall. One of: dexter, sinister.
     * @param {boolean} party - Whether this division should take up an entire diagonal half of the flag.
     * @param {string} color - A hexadecimal color string.
     * @param {number} width - A width value for drawing the division.
     * @param {boolean} border - Whether or not to draw a border around the Pall.
     * @param {number} borderWidth - The width of the border.
     * @param {string} borderColor - A hexadecimal color string.
     * @todo Enhance the generation of border widths, possibly extrapolate whatever we come up with into parent Division class.
     */
  constructor(params = {seed, limit, count: 1, direction, party: false, color, width, border, borderWidth, borderColor}) {
    let limit;
    if (params.party) {
      limit = 1;
    } else {
      limit = params.limit ? params.limit : 3;
    }

    super({seed: params.seed, count: params.count, limit, color: params.color});

    this.party = params.party;
    this.border = params.border;
    this.width = params.width;
    this.direction = typeof params.direction !== 'undefined' ? params.direction : this.generateDirection(this.seed);
    // this.borderWidth = borderWidth > 0 ? borderWidth : this.generateSaltireWidth((settings.seed * .1234));
    this.borderWidth = params.borderWidth || 50;
    this.borderColor = params.borderColor || Utilities.generateColor(undefined, .50000);
  }
    /**
     * Generate a direction value for the Bend.
     *
     * @example
     * // Returns 'dexter'
     * const newBend = new Bend();
     * newBend.generateDirection(.1337)
     * @param {number} seed - The seed number used for generated values.
     * @returns {string} - One of: 'dexter', 'sinister'.
     */
    generateDirection(seed = this.seed) {
      let generated;
      const seedDigit = Utilities.getLastDigit(Utilities.modifySeed(seed, this.seedMultiplier));
      if (seedDigit >=0 && seedDigit <= 5) {
        generated = 'dexter';
      } else if (seedDigit >=6 && seedDigit <= 9) {
        generated = 'sinister';
      } else {
        throw new Error('seedDigit was not between 0 and 9');
      }
      return generated;
    }
    /**
     * Returns the proper draw function instructions for a given direction.
     *
     * @example
     * // Returns drawInstructionsDexter();
     * const bend = new Bends();
     * chevron.drawInstructions('dexter');
     * @param {string} direction - One of: dexter, sinister.
     * @returns {Function} The draw instruction function corresponding to the direction.
     */
    drawInstructions(direction) {
      let instructions;
      switch (direction) {
        case 'dexter':
          instructions = this.drawInstructionsDexter();
          break;
        case 'sinister':
          instructions = this.drawInstructionsSinister();
          break;
        default:
          throw new Error('Direction passed to Bend\'s drawInstructions method was not one of \'sinister\' or \'dexter\'.');
        }
        return instructions;
    }

    /**
     * Generates the draw instructions for the palewise and palewiseReversed directions.
     *
     * @example
     * // Returns an instruction set for the palewise direction based on the flag dimensions.
     * // [
     * //     {moveTo: [x, y]},
     * //     {lineTo: [x, y]},
     * //     {lineTo: [x, y]},
     * // ]
     * const bends = new Bends();
     * const instructions = bends.drawInstructionsDexter();
     * @param {boolean} party - Whether or not the division should be filled.
     * @returns {Array} An array of objects containing canvas drawing instructions.
     */
    drawInstructionsDexter(party = this.party) {
        let instructions;
        if (!party) {
            instructions = [
                {moveTo: [0, 0]}, // start top-left
                {lineTo: [settings.flagWidth, settings.flagHeight]}, // draw to bottom-right
            ]
        } else {
            instructions = [
                {moveTo: [0, 0]}, // start top-left
                {lineTo: [settings.flagWidth, settings.flagHeight]}, // draw to bottom-right
                {lineTo: [0, settings.flagHeight]}, // draw to bottom-left
                {lineTo: [0, 0]}, // draw to top-left
            ]
        }
        return instructions;
    }
    /**
     * Generates the draw instructions for the sinister.
     *
     * @example
     * // Returns an instruction set for the sinister direction based on the flag dimensions.
     * // [
     * //     {moveTo: [x, y]},
     * //     {lineTo: [x, y]},
     * //     {lineTo: [x, y]},
     * // ]
     * const bends = new Bends();
     * const instructions = bends.drawInstructionsSinister();
     * @param {boolean} party - Whether or not the division should be filled.
     * @returns {Array} An array of objects containing canvas drawing instructions.
     */
    drawInstructionsSinister(party = this.party) {
        let instructions;
        if (!party) {
            instructions = [
                {moveTo: [settings.flagWidth, 0]}, // start top right
                {lineTo: [0, settings.flagHeight]}, // draw to bottom left
            ];
        } else {
            instructions = [
                {moveTo: [settings.flagWidth, 0]}, // start top right
                {lineTo: [0, settings.flagHeight]}, // draw to bottom left
                {lineTo: [settings.flagWidth, settings.flagHeight]}, // draw to bottom right
                {lineTo: [settings.flagWidth, 0]}, // draw to top right
            ];
        }
        return instructions;
    }

    /**
     * A semi-curried function that applies the passed arguments to drawSteps.
     * Used as a callback for array.map() to pass arguments into the map function's
     * callback function.
     *
     * @example
     * // Applies a shift width of 100 to a drawStep's parameters.
     * for (let i = 0, len = drawSteps.length; i < len; i++) {
           const step = Object.keys(drawSteps[i]);
           const stepParams = Object.values(drawSteps[i])[0];
           ctx[step](...stepParams.map(shiftStep(positionShift, 'sinister', 'dexter')));
     * }
     * @param {number} positionShift - The value by which we will shift the inner function's p parameter.
     * @param {string} direction - The string value of the current operating direction.
     * @param {string} oddDirection - The odd-man-out direction that needs special processing.
     * @returns {Function} A callback function that operates using the values of shiftStep().
     * @todo The shift position is based entirely on 3:5 flags, make it more... Betterer...
     * @todo Come up with a better description, and maybe a better name for the oddDirection parameter.
     */
    shiftStep(positionShift, direction, oddDirection) {
      return (p, index) => {
        // If the direction is the oddDirection, we need to add the positionShift to
        // the x coordinate (0) and subtract the positionShift from the y coordinate (1).
        let calculated;
        if (direction === oddDirection) {
            calculated = index === 0 ? p + positionShift : p - positionShift;
        }
            // If the direction is not the oddDirection, we can simply add the positionShift
        // to both the x and y coords.
        else {
            calculated = p + positionShift;
        }
        return calculated;
      }
    }
    /**
     * Draws the Chevron division on a canvas.
     *
     * @example
     * // Draws the Bends division on the canvas.
     * const bend = new Bend();
     * bend.draw(ctx);
     * @param {object} ctx - An object containing a canvas context.
     */
    draw(ctx) {
        const drawSteps = this.drawInstructions(this.direction);
        const bendWidth = this.width || Math.round(this.seed * 100);
        ctx.beginPath();

        // Bends has a ton of possible options, so we start by looping over the count.
        for (let i = 0, len = this.count; i < len; i++) {
            // If we have more than one bend to draw, we need to set some
            // offsets for the second and third bends. That's what's happening
            // here with the switch and the positionShift variable.
            let positionShift = 0;
            // If there are 2 bends, split them somewhat equally from the center.
            if (this.count === 2) {
                switch (true) {
                    case i === 0 && !this.party:
                        positionShift = -70;
                        break;
                    case i === 1:
                        positionShift = 70;
                        break;
                }
                // If there are 3 bends, draw one in the center and the others spaced equally from it.
            } else if (this.count === 3) {
                switch (i) {
                    case 0:
                        positionShift = 0;
                        break;
                    case 1:
                        positionShift = -100;
                        break;
                    case 2:
                        positionShift = 100;
                        break;
                }
            }
            // Now that we have that out of the way, let's do some drawing.
            // Loop over the draw steps. For each step, apply the position shift
            // we decided on above.
            //
            // We'll start with borders, since they sit behind the main drawing.
            // If there's a border, draw it first with a larger width.
            if (this.border && !this.party) {
                for (let k = 0, len3 = drawSteps.length; k < len3; k++) {
                    const step = Object.keys(drawSteps[k]);
                    const stepParams = Object.values(drawSteps[k])[0];
                    // This is a pretty complicated set of instructions. If you're
                    // having trouble following the logic, it's repeated and
                    // documented in the shiftStep function definition.
                    // Basically, we're applying the positionShift to the bend coords.
                    ctx[step](...stepParams.map(this.shiftStep(positionShift, this.direction, 'dexter')));
                }
                ctx.lineWidth = bendWidth + this.borderWidth;
                ctx.strokeStyle = this.color.complement;
                ctx.stroke();
            }

            // Keep in mind this is a loop within a loop, so for every bend (outer loop),
            // we're running each of the draw steps (inner loop).
            for (let j = 0, len2 = drawSteps.length; j < len2; j++) {
                // Get the method name from the drawStep's key.
                const step = Object.keys(drawSteps[j]);
                // Get the parameters to apply to each method. These are all x,y coordinates.
                const stepParams = Object.values(drawSteps[j])[0];
                // Run the method off of the ctx object, that's what it references!
                // For the parameters, send them all using the ... notation, and then run
                // an array.map() callback to apply the position shift.
                ctx[step](...stepParams.map(this.shiftStep(positionShift, this.direction, 'dexter')));
            }
            // If we're drawing the division as a party, we can only have a single bend.
            // Instead of stroking the path, we're going to fill it so that it takes up
            // a diagonal half of the entire flag.
            if (this.party) {
                ctx.fillStyle = this.color.color;
                ctx.fill();
                // Since we can only have 1 Bend if we're drawing it as a party, let's break
                // the loop as soon as we've created it.
                break;
            }
                // If we don't want a party per bend, we'll stroke the lines we drew during the
                // earlier drawStep stage, then continue on with the loop in case there are
            // more bends to draw.
            else {
                ctx.strokeStyle = this.color.color;
                ctx.lineWidth = bendWidth;
                ctx.stroke();
            }
        }
    }
}
