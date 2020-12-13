/**
 * @file Houses the class properties and methods for the Chevron division.
 */
import * as Utilities from '../utilities';
import settings from '../settings';
import Division from '../division';

/** Chevron pattern.
 *
 * @class
 * @classdesc The Chevron pattern describes two diagonal lines beginning from two corners and stopping in the center of the field where they meet.
 * @augments Division
 * @namespace Divisions.Chevron
 */
export default class Chevron extends Division {
    /**
     * Creates a Chevron.
     *
     * @example
     * // Creates a horizontally oriented, white Pall with a black border.
     * const pall = new Pall('fesswise', '#ffffff', true, 20, '#000000');
     * @param {string} direction - The orientation of the Pall. One of: fesswise, palewise, fesswiseReversed, palewiseReverse.
     * @param {string} color - A hexadecimal color string.
     * @param {number} width - A width value for drawing the division.
     * @param {boolean} border - Whether or not to draw a border around the Pall.
     * @param {number} borderWidth - The width of the border.
     * @param {string} borderColor - A hexadecimal color string.
     */
  constructor(params = {direction, color, width, border, borderWidth, borderColor, seed}) {
    // Only 1 Chevron per instance, ever.
    const limit = 1;
    super({seed: params.seed, count: 1, limit, color: params.color});
    this.border = params.border;
    this.width = params.width;
    this.direction = typeof params.direction !== 'undefined' ? params.direction : this.generateDirection();

    // @TODO: extrapolate generateSaltireWidth into Division.
    // this.borderWidth = borderWidth > 0 ? borderWidth : this.generateSaltireWidth((settings.seed * .1234));
    this.borderWidth = params.borderWidth || 50;
    this.borderColor = params.borderColor || Utilities.generateColor(undefined, .50000);
  }
    /**
     * Generate a direction value for the Chevron.
     *
     * @example
     * // Returns 'palewiseReversed'
     * const newChevron = new Chevron();
     * newPale.generateDirection(.1337)
     * @param {number} seed - The seed number used for generated values.
     * @returns {string} - One of: 'pallwise', 'fesswise', 'pallwiseReversed', 'fesswiseReversed'.
     * @todo Rethink the directions, use some kind of probability or something more elegant than this.
     */
    generateDirection(seed = this.seed) {
        let generated;
        const seedDigit = Utilities.getLastDigit(Utilities.modifySeed(this.seed, this.seedMultiplier));
        if (seedDigit >=1 && seedDigit <= 3) {
            generated = 'palewise';
        } else if (seedDigit === 4 || seedDigit === 5) {
            generated = 'fesswise';
        } else if (seedDigit === 6 || seedDigit === 7) {
            generated = 'palewiseReversed';
        } else if (seedDigit === 8 || seedDigit === 9) {
            generated = 'fesswiseReversed';
        } else {
            generated = 'fesswiseReversed';
        }
        return generated;
    }

    /**
     * Returns the proper draw function instructions for a given direction.
     *
     * @example
     * // Returns drawInstructionsPalewise();
     * const chevron = new Chevron();
     * chevron.drawInstructions('palewise');
     * @param {string} direction - One of: 'fesswise', 'palewise', 'fesswiseReversed', 'palewiseReversed'.
     * @returns {Function} The draw instruction function corresponding to the direction.
     */
    drawInstructions(direction) {
        let instructions;
        switch (direction) {
            case 'palewise':
                instructions = this.drawInstructionsPalewise();
                break;
            case 'palewiseReversed':
                instructions = this.drawInstructionsPalewise(true);
                break;
            case 'fesswise':
                instructions = this.drawInstructionsFesswise();
                break;
            case 'fesswiseReversed':
                instructions = this.drawInstructionsFesswise(true);
                break;
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
     * const chevron = new Chevron();
     * const instructions = chevron.drawInstructionsPalewise();
     * @param {boolean} reversed - Whether or not to return the reverse draw instructions.
     * @returns {Array} An array of objects containing canvas drawing instructions.
     */
    drawInstructionsPalewise(reversed) {
        let instructions;
        if (!reversed) {
            instructions = [
                {moveTo: [0, 0]}, // start top-left
                {lineTo: [settings.flagWidth / 2, settings.flagHeight / 2]}, // draw to center
                {lineTo: [0, settings.flagHeight]}, // draw to bottom left.
            ]
        } else {
            instructions = [
                {moveTo: [settings.flagWidth, 0]}, // start top-right
                {lineTo: [settings.flagWidth / 2, settings.flagHeight / 2]}, // draw to center
                {lineTo: [settings.flagWidth, settings.flagHeight]}, // draw to bottom right
            ]
        }
        return instructions;
    }
    /**
     * Generates the draw instructions for the fesswise and fesswiseReversed directions.
     *
     * @example
     * // Returns an instruction set for the fesswise direction based on the flag dimensions.
     * // [
     * //     {moveTo: [x, y]},
     * //     {lineTo: [x, y]},
     * //     {lineTo: [x, y]},
     * // ]
     * const chevron = new Chevron();
     * const instructions = chevron.drawInstructionsFesswise();
     * @param {boolean} reversed - Whether or not to return the reverse draw instructions.
     * @returns {Array} An array of objects containing canvas drawing instructions.
     */
    drawInstructionsFesswise(reversed) {
        let instructions;
        if (!reversed) {
            instructions = [
                {moveTo: [0, 0]}, // start top left
                {lineTo: [settings.flagWidth / 2, settings.flagHeight / 2]}, // draw to center
                {lineTo: [settings.flagWidth, 0]}, // draw to top right
            ];
        } else {
            instructions = [
                {moveTo: [0, settings.flagHeight]}, // start bottom left
                {lineTo: [settings.flagWidth / 2, settings.flagHeight / 2]}, // draw to center
                {lineTo: [settings.flagWidth, settings.flagHeight]}, // draw to bottom right
            ];
        }
        return instructions;
    }

    /**
     * Draws the Chevron division on a canvas.
     *
     * @example
     * // Draws the Chevron division on the canvas.
     * const chevron = new Chevron();
     * chevron.draw(ctx);
     * @param {object} ctx - An object containing a canvas context.
     */
    draw(ctx) {
        const drawSteps = this.drawInstructions(this.direction);
        const chevronWidth = this.width || Math.round(this.seed * 100);
        ctx.beginPath();

        // If there's a border, draw it first with a larger width.
        if (this.border) {
            for (let i = 0, len = drawSteps.length; i < len; i++) {
                const step = Object.keys(drawSteps[i]);
                const stepParams = Object.values(drawSteps[i])[0];
                ctx[step](...stepParams);
            }
            ctx.lineWidth = chevronWidth + this.borderWidth;
            ctx.strokeStyle = this.color.complement;
            ctx.stroke();
        }

        for (let i = 0, len = drawSteps.length; i < len; i++) {
            const step = Object.keys(drawSteps[i]);
            const stepParams = Object.values(drawSteps[i])[0];
            ctx[step](...stepParams);
        }

        ctx.strokeStyle = this.color.color;
        ctx.lineWidth = chevronWidth;
        ctx.stroke();
    }
}
