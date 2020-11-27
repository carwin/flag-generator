/**
 * @file Houses the class definitions for Divisions.
 */
/**
 * Divisions module.
 *
 * @module flag-generator/divisions
 */
import { randomHex } from './utilities';
import { settings } from './index';

/**
 * Fesses pattern.
 *
 * @class
 * @classdesc The Fesses pattern describes one or more vertical divisions of the field.
 * @todo Figure out a better way to handle colors.
 */
export class Fesses {
    /**
     * Create fesses.
     *
     * @example
     * // Returns a Fesses instance.
     * const fesses = new Fesses(2, '#3febeb');
     * @param {number} fessCount - The number of fesses to create.
     * @param {string} seedColor - A string representing a hexadecimal color value.
     */
   constructor(fessCount, seedColor) {
      this.fessCount = fessCount;
      this.seedColor = seedColor;
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
   drawFesses(ctx, containerWidth = 500, gapPercentage = 0) {
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

/** Pales pattern.
 *
 * @class
 * @classdesc The Pales pattern describes one or more horizontal divisions of the field.
 * @todo Write the Pales class.
 */
export class Pales {}

/** Saltire pattern.
 *
 * @class
 * @classdesc The Saltire pattern describes two diagonal lines crossing in the center of the field. An X pattern.
 */
export class Saltire {
    /**
     * Creates a Saltire.
     *
     * @example
     * // Instantiates a Saltire without a border.
     * const saltire = new Saltire();
     * // Instantiates a Saltire with a border.
     * const saltireWithBorder = new Saltire(true);
     * @param {boolean} border - A boolean value to decide whether or not to draw a border based on the global seed setting.
     * @param {number} borderWidth - A number value to use when generating border width. This number is used in addition
     * to the randomly generated border width determined by the seed.
     */
    constructor(border = false, borderWidth = 0) {
        this.color = this.generateSaltireColor();
        this.border = border;
        this.borderWidth = borderWidth;
        this.borderColor = this.generateSaltireColor(settings.seed * .1010220);
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
    generateSaltireWidth(seed = settings.seed) {
       return Math.round(seed * 100);
    }

    /**
     * Generate a hex color for the Saltire.
     *
     * @example
     * // Returns a random hexadecimal color string.
     * const hexColor = this.generateSaltireColor(.9823719751231457);
     * @param {number} seed - A pseudo-random string generated based on a string value.
     * @see {@link module:flag-generator/utilities~generateSeed|generateSeed()}
     * @see {@link module:flag-generator/utilities~generateSeed|generateSeed()} for more info about the seed.
     * @returns {string} A hexadecimal color value.
     * @todo I seem to be creating a lot of these color functions. I bet I can extrapolate it for re-use.
     */
    generateSaltireColor(seed = settings.seed) {
       let color = randomHex(seed * .5678);
       return color;
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
    generateSaltireBorder(seed = settings.seed) {
        let borderWidth = this.borderWidth;
        let borderInfo = {};

        borderInfo.width = borderWidth + this.generateSaltireWidth((seed * .1234));
        borderInfo.color = this.borderColor;

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
    drawSaltire(ctx) {
        const saltireWidth = this.generateSaltireWidth();

        // Handle any borders first. We draw the borders as a background.
        if (this.border) {
            const border = this.generateSaltireBorder();
            ctx.beginPath();
            ctx.moveTo(0, 0); // Move to top left corner. Start here.
            ctx.lineTo(settings.flagWidth, settings.flagHeight);

            ctx.moveTo(0, settings.flagHeight);
            ctx.lineTo(settings.flagWidth, 0);

            ctx.strokeStyle = border.color;
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
        ctx.strokeStyle = this.color;
        ctx.lineWidth = saltireWidth;
        ctx.stroke();
    }
}

/** Pall pattern.
 *
 * @class
 * @classdesc The Pall pattern describes a Y shape on the field, typically oriented so the top of the Y is on the left of the field.
 * @todo Write the Pall class.
 */
export class Pall {}

/** Border pattern.
 *
 * @class
 * @classdesc The Border pattern on a flag describes a border around each edge of the field.
 * <br>
 * If multiple Divisions are ever combined on a flag, the Border pattern should likely be
 * drawn last to provide a frame effect.
 */
export class Border {
    /**
     * Creates Border.
     *
     * @example
     * // Instantiates a Border
     * const border = new Border(20);
     * @param {number} borderWidth - A number representing the size of the border. This is used for coordinate drawing on a canvas for now.
     * @todo Handle border width more elegantly than taking a flat value from the caller.
     */
    constructor(borderWidth) {
        this.color = this.generateBorderColor();
        this.borderWidth = borderWidth;
    }
    /**
     * Generate a hex color for the Border.
     *
     * @example
     * // Returns a random hexadecimal color string.
     * const hexColor = this.generateBorderColor(.9823719751231457);
     * @param {number} seed - A pseudo-random string generated based on a string value.
     * @see {@link module:flag-generator/utilities~generateSeed|generateSeed()}
     * @see {@link module:flag-generator/utilities~generateSeed|generateSeed()} for more info about the seed.
     * @returns {string} A hexadecimal color value.
     * @todo I seem to be creating a lot of these color functions. I bet I can extrapolate it for re-use.
     */
    generateBorderColor(seed = settings.seed) {
        return randomHex(seed * .7039);
    }
    /**
     * Draws the Border pattern on a canvas.
     *
     * @example
     * // Draws the Border pattern.
     * border.drawBorder(ctx);
     * @param {object} ctx - An object containing a canvas context.
     */
    drawBorder(ctx) {
        // Set the line width
        ctx.lineWidth = this.borderWidth;
        ctx.strokeStyle = this.color;
        ctx.strokeRect(0, 0, settings.flagWidth, settings.flagHeight);
    }
}

/** Chevron pattern.
 *
 * @class
 * @classdesc The Chevron pattern describes two diagonal lines beginning from two corners and stopping in the center of the field where they meet.
 * @todo Write the Chevron class.
 */
export class Chevron {}

/**
 * Bends pattern.
 *
 * @class
 * @classdesc The Bends pattern describes a single diagonal line in either the dexter or sinister direction.
 * @todo Write the Bends class.
 */
export class Bends {}

/**
 * Canton pattern.
 *
 * @class
 * @classdesc The Canton pattern describes a small quarter of the flag, usually the top dexter quarter. It is often filled by a pattern, like in the flag of the United States, or an entire flag in the case of many British colony flags.
 * @todo Write the Canton class.
 */
export class Canton {}

/**
 * Cross pattern.
 *
 * @class
 * @classdesc The Cross pattern describes two intersecting lines across the field. There are many variants that may make good sub-classes: NordicCross, GreekCross, SymmetricCross, etc...
 * @todo Write the Cross class.
 */
export class Cross {}

/**
 * Lozenge pattern.
 *
 * @class
 * @classdesc The Lozenge pattern describes a diamond on the field with each intersection of lines touching the edge of the field.
 * @todo Write the Lozenge class.
 */
export class Lozenge {}

/**
 * Fusil pattern.
 *
 * @class
 * @classdesc The Fusil pattern is much like the Lozenge pattern, except that the horizontal intersections to not touch the edge of the field. A skinny diamond.
 * @todo Write the Fusil class.
 */
export class Fusil {}

/**
 * CenterShape pattern.
 *
 * @class
 * @classdesc The CenterShape pattern is a generic pattern that simply creates a shape on the center of the field. Think of the Japanese flag.
 * @todo Write the CenterShape class.
 */
export class CenterShape {}

/**
 * Quarterly pattern.
 *
 * @class
 * @classdesc The Quarterly pattern describes a field with four separate and equal sections.
 * @todo Write the Quarterly class.
 */
export class Quarterly {}