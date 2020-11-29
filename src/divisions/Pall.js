/**
 * @file Houses the class properties and methods for the Pall division.
 */
import * as Utilities from '../utilities';
import settings from '../settings';
import Division from '../division';

/** Pall pattern.
 *
 * @class
 * @classdesc The Pall pattern describes a Y shape on the field, typically oriented so the top of the Y is on the left of the field.
 * @augments Division
 * @namespace Divisions.Pall
 */
export default class Pall extends Division {
    /**
     * Creates a Pall.
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
    constructor(direction, color, width, border, borderWidth, borderColor) {
        super(1, 1, color);
        this.border = border;
        this.width = width;
        this.direction = typeof direction !== 'undefined' ? direction : this.generateDirection();

        // @TODO: extrapolate generateSaltireWidth into Division.
        // this.borderWidth = borderWidth > 0 ? borderWidth : this.generateSaltireWidth((settings.seed * .1234));
        this.borderWidth = borderWidth || 50;
        this.borderColor = borderColor || Utilities.generateColor(undefined, .12345);

        console.log('')
        console.log('THIS CONSTRUCTOR', this);
        console.log('')
    }
    /**
     * Generate a direction value for the Pall.
     *
     * @example
     * // Returns 'palewiseReversed'
     * const newPale = new Pale();
     * newPale.generateDirection(.1337)
     * @param {number} seed - The seed number used for generated values.
     * @returns {string} - One of: 'pallwise', 'fesswise', 'pallwiseReversed', 'fesswiseReversed'.
     */
    generateDirection(seed = this.seed) {
        let generated;
        // let seedDigit = +(Math.round(this.seed * this.seedMultiplier).toString().substr(-1));
        const seedDigit = Utilities.getLastDigit(Utilities.modifySeed(this.seed, this.seedMultiplier));
        if (seedDigit >=1 && seedDigit <= 4) {
            generated = 'palewise';
        } else if (seedDigit === 5 || seedDigit === 6) {
            generated = 'fesswise';
        } else if (seedDigit === 7 || seedDigit === 8) {
            generated = 'palewiseReversed';
        } else if (seedDigit === 0 || seedDigit === 9) {
            generated = 'fesswiseReversed';
        }
        return generated;
    }

    /**
     * Returns the proper draw function instructions for a given direction.
     *
     * @example
     * // Returns drawInstructionsPalewise();
     * const pall = new Pall();
     * pall.drawInstructions('palewise');
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
     * //     {moveTo: [x, y]},
     * //     {lineTo: [x, y]},
     * // ]
     * const pall = new Pall();
     * const instructions = pall.drawInstructionsPalewise();
     * @param {boolean} reversed - Whether or not to return the reverse draw instructions.
     * @returns {Array} An array of objects containing canvas drawing instructions.
     */
    drawInstructionsPalewise(reversed) {
        let instructions;
        if (!reversed) {
            instructions = [
                {moveTo: [0, 0]},
                {lineTo: [settings.flagWidth / 2, settings.flagHeight / 2]},
                {lineTo: [0, settings.flagHeight]},
                {moveTo: [settings.flagWidth / 2, settings.flagHeight / 2]},
                {lineTo: [settings.flagWidth, settings.flagHeight / 2]},
            ]
        } else {
            instructions = [
                {moveTo: [settings.flagWidth, 0]}, // start top-right
                {lineTo: [settings.flagWidth / 2, settings.flagHeight / 2]}, // draw to center
                {lineTo: [settings.flagWidth, settings.flagHeight]}, // draw to bottom right
                {moveTo: [settings.flagWidth / 2, settings.flagHeight / 2]}, // move to center
                {lineTo: [0, settings.flagHeight / 2]}, // Draw to center left side
            ]
        }
        console.log(instructions);
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
     * //     {moveTo: [x, y]},
     * //     {lineTo: [x, y]},
     * // ]
     * const pall = new Pall();
     * const instructions = pall.drawInstructionsFesswise();
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
                {moveTo: [settings.flagWidth / 2, settings.flagHeight / 2]}, // move to center
                {lineTo: [settings.flagWidth / 2, settings.flagHeight]}, // draw to center bottom
            ];
        } else {
            instructions = [
                {moveTo: [0, settings.flagHeight]}, // start bottom left
                {lineTo: [settings.flagWidth / 2, settings.flagHeight / 2]}, // draw to center
                {lineTo: [settings.flagWidth, settings.flagHeight]}, // draw to bottom right
                {moveTo: [settings.flagWidth / 2, settings.flagHeight / 2]}, // move to center
                {lineTo: [settings.flagWidth / 2, settings.flagHeight - settings.flagHeight]}, // draw to center top
            ];
        }
        return instructions;
    }

    /**
     * Draws the Pall pattern on a canvas.
     *
     * @example
     * // Draws the Pall pattern.
     * pall.draw(ctx);
     * @param {object} ctx - An object containing a canvas context.
     */
    draw(ctx) {
        const drawSteps = this.drawInstructions(this.direction);
        const pallWidth = this.width || Math.round(this.seed * 100);
        ctx.beginPath();
        // If there's a border, draw it first with a larger width.
        if (this.border) {
            for (let i = 0, len = drawSteps.length; i < len; i++) {
                const step = Object.keys(drawSteps[i]);
                const stepParams = Object.values(drawSteps[i])[0];
                ctx.[step](...stepParams);
            }
            ctx.lineWidth = pallWidth + this.borderWidth;
            ctx.strokeStyle = this.color.complement;
            ctx.stroke();
        }

        for (let i = 0, len = drawSteps.length; i < len; i++) {
            const step = Object.keys(drawSteps[i]);
            const stepParams = Object.values(drawSteps[i])[0];
            ctx.[step](...stepParams);
        }
        console.log('')
        console.log('THIS', this);
        console.log('')


        ctx.strokeStyle = this.color.color;
        ctx.lineWidth = pallWidth;
        ctx.stroke();
    }
}
