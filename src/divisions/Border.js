/**
 * @file Houses the class properties and methods for the Border division.
 */
import settings from '../settings';
import Division from '../division';

/** Border pattern.
 *
 * @class
 * @classdesc The Border pattern on a flag describes a border around each edge of the field.
 * <br>
 * If multiple Divisions are ever combined on a flag, the Border pattern should likely be
 * drawn last to provide a frame effect.
 * @augments Division
 * @namespace Division.Border
 */
export default class Border extends Division {
    /**
     * Creates Border.
     *
     * @example
     * // Instantiates a Border
     * const border = new Border(20);
     * @param {string} color - A hex color value.
     * @param {number} borderWidth - A number representing the size of the border. This is used for coordinate drawing on a canvas for now.
     * @augments Division
     * @todo Handle border width more elegantly than taking a flat value from the caller.
     */
    constructor(color, borderWidth) {
        const limit = 1;
        super(1, limit, color);
        this.borderWidth = borderWidth || 20;
    }
    /**
     * Draws the Border pattern on a canvas.
     *
     * @example
     * // Draws the Border pattern.
     * border.draw(ctx);
     * @param {object} ctx - An object containing a canvas context.
     */
    draw(ctx) {
        // Set the line width
        ctx.lineWidth = this.borderWidth;
        ctx.strokeStyle = this.color.color;
        ctx.strokeRect(0, 0, settings.flagWidth, settings.flagHeight);
    }
}
