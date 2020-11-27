import { randomHex } from './utilities';
import { settings } from './index';

/** Class representing the Fesses division pattern **/
export class Fesses {
    /**
     * Create fesses.
     * @param {number} fessCount - The number of fesses to create.
     * @param {string} seedColor - A string representing a hexadecimal color value.
     */
   constructor(fessCount, seedColor) {
      this.fessCount = fessCount;
      this.seedColor = seedColor;
   }
   /**
    * Draw Fesses on a canvas.
    * @param {Object} ctx            - A canvas Context
    * @param {Number} containerWidth - The width of the area on which to draw Fesses
    * @param {Number} gapPercentage  - A whole number representing a percentage of the containerWidth.
    * @todo  gapPercentage cannot exceed a certain value, but I don't know how to calculate a stop. Keep it below 20. It's probably something like: the gap percentage cannot exceed a certain value based on the number of gaps
    */
   drawFesses(ctx, containerWidth = 500, gapPercentage = 0) {
       console.log(typeof ctx);
       let singleGapWidth,
           singleGapPercentage,
           totalGapPercent,
           numGaps,
           fessCount,
           singleFessWidthPercentage,
           singleFessWidth,
           remainingContainerWidth;


       // How many fesses should we draw?
       fessCount = this.fessCount;

       // What percentage of the whole WIDTH should each fess take up?
       singleFessWidthPercentage = ((100 / fessCount)) / 100;
       // Given the current count of Fesses, how many gaps are there? One on each side and N gaps between.
       numGaps = (fessCount * 2) - (fessCount - 1); // I don't remember how I arrived at this, but it seems correct.
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
       for (let i = 0; i < fessCount; i++) {
           ctx.fillStyle = randomHex(settings.seed, i + 2); // @TODO: Handle color more elegantly, I'd like the colors to be complimentary.
           let ypos = 0; // start at the top always
           let xpos = incrementXpos;
           let w = singleFessWidth;
           let h = 300;
           incrementXpos = incrementXpos + singleFessWidth + singleGapWidth;
           ctx.fillRect(xpos, ypos, w, h);
       }

   }
}