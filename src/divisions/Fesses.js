/**
 * @file Houses the class properties and methods for the Fesses division.
 */
import Division from '../division';

/** @module flag-generator/divisions */

/**
 * Fesses pattern.
 *
 * @class
 * @classdesc The Fesses pattern describes one or more vertical divisions of the field.
 * @augments Division
 */
export default class Fesses extends Division {
    /**
     * Create fesses.
     *
     * @example
     * // Returns a Fesses instance.
     * const fesses = new Fesses(2, '#3febeb');
     * @param {number} count - The number of Fesses in this instance.
     * @param {number} gapPercentage - A whole number representing a percentage of the containerWidth. Used to place gaps during draw time.
     * @param {string} color - A hexadecimal color string.
     * @todo Switch up the draw function to use draw instructions in the same way as the Pall division.
     */
    constructor(count, gapPercentage, color) {
        const limit = 5;
        super(count, limit, color);
        this.gapPercentage = gapPercentage || 0;
    }
    /**
     * Draw Fesses on a canvas.
     *
     * @example
     * // Draws a Fesses instance on a canvas.
     * fesses.drawFesses(ctx, 500);
     * @param {object} ctx - A canvas Context.
     * @param {number} containerWidth - The width of the area on which to draw Fesses.
     * @param {number} gapPercentage - A whole number representing a percentage of the containerWidth.
     * @todo  The gapPercentage cannot exceed a certain value, but I don't know how to calculate a stop. Keep it below 20. It's probably something like: the gap percentage cannot exceed a certain value based on the number of gaps.
     */
    draw(ctx, containerWidth = 500, gapPercentage = this.gapPercentage) {
        let singleGapWidth,
            singleGapPercentage,
            totalGapPercent,
            numGaps,
            singleFessWidthPercentage,
            singleFessWidth,
            remainingContainerWidth;

        // If we're only drawing 1 division, center it.
        if (this.count === 1) {
            gapPercentage = 33;
        }


        // What percentage of the whole WIDTH should each fess take up?
        singleFessWidthPercentage = ((100 / this.count)) / 100;
        // Given the current count of Fesses, how many gaps are there? One on each side and N gaps between.
        numGaps = (this.count * 2) - (this.count - 1); // I don't remember how I arrived at this, but it seems correct.
        // Turn our whole number gapPercentage into a decimal for math.
        singleGapPercentage = gapPercentage / 100; // Divide the whole number value by 100 to get a decimal.
        // Get the total % of the container width taken up by gaps.
        totalGapPercent = singleGapPercentage * numGaps; // Multiply the decimal from above by the number of gaps to get a total % value of the whole. Useful for later.
        // How wide is a single gap?
        singleGapWidth = (containerWidth * singleGapPercentage);
        // How much of the flag is left for Fesses after we draw gaps?
        remainingContainerWidth = containerWidth - (totalGapPercent * containerWidth);
        // Calculate the width of a single Fess by multiplying the fess width percentage by the remaining flag width.
        singleFessWidth = (singleFessWidthPercentage * remainingContainerWidth);

        // Figure out x/y coordinates for each fess
        let incrementXpos = singleGapWidth;
        for (let i = 0; i < this.count; i++) {
            // ctx.fillStyle = randomHex(settings.seed, i + 2); // @TODO: Handle color more elegantly, I'd like the colors to be complimentary.
            switch (this.count) {
                case 1:
                    ctx.fillStyle = this.color.color;
                    break;
                case 2:
                    ctx.fillStyle = i === 0 ? this.color.color : this.color.complement;
                    break;
                case 3:
                    ctx.fillStyle = this.color.triad[i];
                    break;
                case 4:
                    ctx.fillStyle = this.color.tetrad[i]
                    break;
                default:
                    ctx.fillStyle = this.color.monochromatic[i];
                    break;
            }
            let ypos = 0; // start at the top always
            let xpos = incrementXpos;
            let w = singleFessWidth;
            let h = 300;
            incrementXpos = incrementXpos + singleFessWidth + singleGapWidth;
            ctx.fillRect(xpos, ypos, w, h);
        }

    }
}