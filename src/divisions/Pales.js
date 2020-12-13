/**
 * @file Houses the class properties and methods for the Pales division.
 */
import settings from '../settings';
import Division from '../division';

/** Pales pattern.
 *
 * @class
 * @classdesc The Pales pattern describes one or more horizontal divisions of the field.
 * @augments Division
 * @namespace Divisions.Pales
 */
export default class Pales extends Division {
    /**
     * Instantiates a Pales pattern.
     *
     * @example
     * // Instantiates a Pales pattern.
     * const pales = new Pales()
     * @param {number} count - The number of Pales in this instance.
     * @param {number} gapPercentage - A whole number representing a percentage of the containerWidth. Used to place gaps during draw time.
     * @param {string} color - A hexadecimal color string.
     * @todo The count limit of 3 is only here because I can't figure out a way
     *       to make 4 consistently look good. It always comes out like a rainbow
     *       or a monochrome step.
     */
  constructor(params = {count, gapPercentage, color}) {
    const limit = 3; // No more than 3 Pales per instance.
    super({seed: params.seed, count: params.count, limit, color: params.color});
    this.gapPercentage = params.gapPercentage || 0;
  }
    draw(ctx, containerWidth = settings.flagWidth, containerHeight = settings.flagHeight, gapPercentage = this.gapPercentage) {
        let singleGapHeight,
            singleGapPercentage,
            totalGapPercent,
            numGaps,
            singlePaleHeightPercentage,
            singlePaleHeight,
            remainingContainerHeight;

        // If we're only generating one Pale, let's center it.
        if (this.count === 1) {
            gapPercentage = 33;
        }

        // What percentage of the whole WIDTH should each pale take up?
        singlePaleHeightPercentage = ((100 / this.count)) / 100;
        // Given the current count of pales, how many gaps are there? One on each side and N gaps between.
        numGaps = (this.count * 2) - (this.count - 1); // I don't remember how I arrived at this, but it seems correct.
        // Turn our whole number gapPercentage into a decimal for math.
        singleGapPercentage = gapPercentage / 100; // Divide the whole number value by 100 to get a decimal.
        // Get the total % of the container width taken up by gaps.
        totalGapPercent = singleGapPercentage * numGaps; // Multiply the decimal from above by the number of gaps to get a total % value of the whole. Useful for later.
        // How wide is a single gap?
        singleGapHeight = (containerHeight * singleGapPercentage);
        // How much of the flag is left for pales after we draw gaps?
        remainingContainerHeight = containerHeight - (totalGapPercent * containerHeight);
        // Calculate the width of a single pale by multiplying the fess width percentage by the remaining flag width.
        singlePaleHeight = (singlePaleHeightPercentage * remainingContainerHeight);

        // Figure out x/y coordinates for each pale
        let incrementYpos = singleGapHeight;
        for (let i = 0; i < this.count; i++) {
            // ctx.fillStyle = randomHex(settings.seed, i + 2); // @TODO: Handle color more elegantly, I'd like the colors to be complimentary.
            // ctx.fillStyle = this.generateColor(settings.seed, (i + .527)); // @TODO: Handle color more elegantly, I'd like the colors to be complimentary.
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
            let ypos = incrementYpos; // start at the top always
            let xpos = 0;
            let w = containerWidth;
            let h = singlePaleHeight;
            incrementYpos = incrementYpos + singlePaleHeight + singleGapHeight;
            ctx.fillRect(xpos, ypos, w, h);
        }
    }
}
