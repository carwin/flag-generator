/**
 * @file Houses the export class definitions for Divisions.
 */
/**
 * Divisions module.
 *
 * @module flag-generator/divisions
 */

class Division {
    constructor(count, color, seed = settings.seed) {
        this.count = count || this.generateCount();
        this.seed = seed;
        this.seedMultiplier = this.generateSeedMultiplier(this.constructor.name);
        this.color = color || this.generateColor(this.seedMultiplier);
    }
    generateCount(seed = this.seed, seedMultiplier = this.seedMultiplier) {
        // modify the seed.
        const modifiedSeed = seed * seedMultiplier;
        // Use the last digit as the number of divisions.
        return +(modifiedSeed.toString().substr(-1));
    }
    generateSeedMultiplier(str) {
        // Make sure the string is a string.
        let multiplier = '';
        const strArray = str.toString().split('');
        for (let i = 0; i < strArray.length; i++) {
            multiplier = multiplier + strArray[i].charCodeAt(0);
        }
        multiplier = parseFloat('.' + multiplier);
        return multiplier;
    }
    generateColor(seed = settings.seed, seedMultiplier = 80857473) {
        return randomHex(seed, seedMultiplier);
    }
}

import { randomHex, convertHex, hexToRgb } from './utilities';
import { settings } from './index';

/**
 * Fesses pattern.
 *
 * @class
 * @classdesc The Fesses pattern describes one or more vertical divisions of the field.
 */
export class Fesses extends Division {
    /**
     * Create fesses.
     *
     * @example
     * // Returns a Fesses instance.
     * const fesses = new Fesses(2, '#3febeb');
     * @param {number} fessCount - The number of fesses to create.
     * @param {string} seedColor - A string representing a hexadecimal color value.
     */
   constructor(count, gapPercentage, color) {
       super(count, color);
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
   draw(ctx, containerWidth = 500, gapPercentage= this.gapPercentage) {
       let singleGapWidth,
           singleGapPercentage,
           totalGapPercent,
           numGaps,
           singleFessWidthPercentage,
           singleFessWidth,
           remainingContainerWidth;


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
           ctx.fillStyle = this.color;
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
 */
export class Pales extends Division {
    /**
     * Instantiates a Pales pattern.
     *
     * @example
     * // Instantiates a Pales pattern.
     * const pales = new Pales()
     * @param {number} count - The number of Pales in this instance.
     */
    constructor(count, gapPercentage, color) {
        super(count, color);
        this.gapPercentage = gapPercentage || 0;
        console.log('this', this);
        console.log('PALE COUNT', count);
    }
    draw(ctx, containerWidth = settings.flagWidth, containerHeight = settings.flagHeight, gapPercentage = this.gapPercentage) {
        console.log(`Drawing ${this.count} pales...`);
        let singleGapHeight,
            singleGapPercentage,
            totalGapPercent,
            numGaps,
            singlePaleHeightPercentage,
            singlePaleHeight,
            remainingContainerHeight;


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
            ctx.fillStyle = this.color;
            let ypos = incrementYpos; // start at the top always
            let xpos = 0;
            let w = containerWidth;
            let h = singlePaleHeight;
            incrementYpos = incrementYpos + singlePaleHeight + singleGapHeight;
            ctx.fillRect(xpos, ypos, w, h);
        }
    }
}

/** Saltire pattern.
 *
 * @class
 * @classdesc The Saltire pattern describes two diagonal lines crossing in the center of the field. An X pattern.
 */
export class Saltire extends Division {
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
    constructor(count, border = false, borderWidth = 0, color, borderColor) {
        super(count, color);
        this.border = border;
        this.borderWidth = borderWidth > 0 ? borderWidth : this.generateSaltireWidth((settings.seed * .1234));
        this.borderColor = borderColor || this.generateColor(undefined, .12345);
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
    generateSaltireBorderColor(rgb = this.color) {
        // This whole thing is kind of stupid, I could just add a param.
        rgb = hexToRgb(rgb);
        const newRgb = {r: 0, g: 0, b: 0};
        console.log('parts', rgb)
        for (let val in rgb) {
            const i = Object.keys(rgb).indexOf(val);
            const newVal = 255 - (i * rgb[val]);
            newRgb[val] = newVal;
        }
        return 'rgb(' + newRgb.r + ', ' + newRgb.g + ', ' + newRgb.b + ')';
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
        // let borderWidth = this.borderWidth;
        let borderInfo = {};

        // borderInfo.width = borderWidth + this.generateSaltireWidth((seed * .1234));
        borderInfo.width = this.borderWidth;
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

            ctx.strokeStyle = this.borderColor;
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
 * @todo Write the Pall export class.
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
export class Border extends Division {
    /**
     * Creates Border.
     *
     * @example
     * // Instantiates a Border
     * const border = new Border(20);
     * @param {number} borderWidth - A number representing the size of the border. This is used for coordinate drawing on a canvas for now.
     * @todo Handle border width more elegantly than taking a flat value from the caller.
     */
    constructor(color, borderWidth) {
        super(color)
        this.color = color || this.generateColor(undefined, .7039);
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
    draw(ctx) {
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
 * @todo Write the Chevron export class.
 */
export class Chevron {}

/**
 * Bends pattern.
 *
 * @class
 * @classdesc The Bends pattern describes a single diagonal line in either the dexter or sinister direction.
 * @todo Write the Bends export class.
 */
export class Bends {}

/**
 * Canton pattern.
 *
 * @class
 * @classdesc The Canton pattern describes a small quarter of the flag, usually the top dexter quarter. It is often filled by a pattern, like in the flag of the United States, or an entire flag in the case of many British colony flags.
 * @todo Write the Canton export class.
 */
export class Canton {}

/**
 * Cross pattern.
 *
 * @class
 * @classdesc The Cross pattern describes two intersecting lines across the field. There are many variants that may make good sub-export classes: NordicCross, GreekCross, SymmetricCross, etc...
 * @todo Write the Cross export class.
 */
export class Cross {}

/**
 * Lozenge pattern.
 *
 * @class
 * @classdesc The Lozenge pattern describes a diamond on the field with each intersection of lines touching the edge of the field.
 * @todo Write the Lozenge export class.
 */
export class Lozenge {}

/**
 * Fusil pattern.
 *
 * @class
 * @classdesc The Fusil pattern is much like the Lozenge pattern, except that the horizontal intersections to not touch the edge of the field. A skinny diamond.
 * @todo Write the Fusil export class.
 */
export class Fusil {}

/**
 * CenterShape pattern.
 *
 * @class
 * @classdesc The CenterShape pattern is a generic pattern that simply creates a shape on the center of the field. Think of the Japanese flag.
 * @todo Write the CenterShape export class.
 */
export class CenterShape {}

/**
 * Quarterly pattern.
 *
 * @class
 * @classdesc The Quarterly pattern describes a field with four separate and equal sections.
 * @todo Write the Quarterly export class.
 */
export class Quarterly {}

// @TODO: This is an idea for handling complimentary division patterns.
export const complimentaryDivisions = () => {
    return {
        2: [
            {divisionGroup: [new Fesses(3, 33), new Pales(3)]},
            {divisionGroup: [new Saltire(), new Border]}
        ],
        3: [
            {divisionGroup: [new Fesses(), new Saltire(), new Border]}
        ]
    }
}