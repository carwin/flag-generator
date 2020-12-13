/**
 * @file Houses the class properties and methods for the Saltire division.
 */
import settings from '../settings';
import Division from '../division';

/** Saltire pattern.
 *
 * @class
 * @classdesc The Saltire pattern describes two diagonal lines crossing in the center of the field. An X pattern.
 * @augments Division
 */
class Saltire extends Division {
    /**
     * Creates a Saltire.
     *
     * @example
     * // Instantiates a Saltire without a border.
     * const saltire = new Saltire();
     * // Instantiates a Saltire with a border.
     * const saltireWithBorder = new Saltire(true);
     * @param {number} count - The number of Saltires in this instance. Should typically only be one.
     * @param {boolean} border - A boolean value to decide whether or not to draw a border based on the global seed setting.
     * @param {number} borderWidth - A number value to use when generating border width. This number is used in addition
     * to the randomly generated border width determined by the seed.
     * @param {string} color - A hexadecimal color string.
     * @param {string} borderColor - A hexadecimal color string.
     */
  constructor(params = {seed, count, border: false, borderWidth: 0, color, borderColor}) {
    const limit = 1;
    super({seed: params.seed, count: params.count, limit, color: params.color});
    this.border = params.border;
    this.borderWidth = params.borderWidth > 0 ? params.borderWidth : this.generateSaltireWidth((this.seed * .1234));
    // this.borderColor = borderColor || this.generateColor(undefined, .12345);
  }
    /**
     * Generates a percentage width for the Saltire lines based on the seed.
     *
     * @example
     * // Returns 81, meaning 81%
     * saltire.generateWidth(0.8112494706388412);
     * @param {number} seed - A pseudo-random string generated based on a string value.
     * @see {@link module:flag-generator/utilities~generateSeed|generateSeed()} for more info about the seed.
     * @returns {number} A whole number used elsewhere as a percentage value.
     */
    generateSaltireWidth(seed = this.seed) {
        return Math.round(seed * 100);
    }
    /**
     * Generate border information for the Saltire.
     *
     * @example
     * // Returns an object with width and color keys.
     * const border = this.generateSaltireBorder(.123747918512398745);
     * @param {number} seed - A pseudo-random string generated based on a string value.
     * @see {@link module:flag-generator/utilities~generateSeed|generateSeed()} for more info about the seed.
     * @returns {object} An object containing width and color keys.
     */
    generateSaltireBorder(seed = this.seed) {
        // let borderWidth = this.borderWidth;
        let borderInfo = {};

        // borderInfo.width = borderWidth + this.generateSaltireWidth((seed * .1234));
        borderInfo.width = this.borderWidth;

        return borderInfo;
    }
    /**
     * Draws the Saltire on the given canvas.
     *
     * @example
     * // Draws a Saltire on the canvas.
     * const saltire = new Saltire();
     * saltire.drawSaltire(ctx);
     * @param {object} ctx - A canvas Context.
     */
    draw(ctx) {
        const saltireWidth = this.generateSaltireWidth();

        // Handle any borders first. We draw the borders as a background.
        if (this.border) {
            const border = this.generateSaltireBorder();
            ctx.beginPath();
            ctx.moveTo(0, 0); // Move to top left corner. Start here.
            ctx.lineTo(settings.flagWidth, settings.flagHeight);

            ctx.moveTo(0, settings.flagHeight);
            ctx.lineTo(settings.flagWidth, 0);

            ctx.strokeStyle = this.color.complement;
            ctx.lineWidth = saltireWidth + (border.width * 2);
            ctx.stroke();
        }

        // Now draw the main Saltire.
        ctx.beginPath();

        // First line of the X
        ctx.moveTo(0, 0); // Move to top left corner. Start here.
        ctx.lineTo(settings.flagWidth, settings.flagHeight);

        // Second line of the X
        ctx.moveTo(0, settings.flagHeight);
        ctx.lineTo(settings.flagWidth, 0);

        // Stroke it.
        ctx.strokeStyle = this.color.color;
        ctx.lineWidth = saltireWidth;
        ctx.stroke();
    }
}

export default Saltire;
