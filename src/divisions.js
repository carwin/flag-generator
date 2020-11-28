/**
 * @file Houses the export class definitions for Divisions.
 */
import tinycolor from 'tinycolor2';
import { randomHex, convertHex, hexToRgb } from './utilities';
import settings from './settings';

/**
 * Divisions module.
 *
 * @module flag-generator/divisions
 */

/**
 * Common methods and properties of all Divisions.
 *
 * @class
 * @classdesc A collection of methods and properties common to all the Division pattern classes.
 */
class Division {
    /**
     * Creates a Division.
     *
     * @example
     * // Creates a Division. This would usually not be done.
     * const genericDivisionObject = new Division(1, '#ffffff', '.2349785241913');
     * @param {number} count - The number of divisions to draw.
     * @param {string} color - A hexadecimal color string.
     * @param {number} seed - A pseudo-random string generated based on a string value.
     * @see {@link module:flag-generator/utilities~generateSeed|generateSeed()} for more info about the seed.
     */
    constructor(count, color, seed = settings.seed) {
        this.count = typeof count !== 'undefined' ? count : this.generateCount();
        console.log('Division count in parent constructor', this.count);
        this.seed = seed;
        this.seedMultiplier = this.generateSeedMultiplier(this.constructor.name);
        this.color = typeof color !== 'undefined' ? color : this.generateColor(this.seedMultiplier);
    }
    generateCount(seed = this.seed, seedMultiplier = this.seedMultiplier) {
        // modify the seed.
        const modifiedSeed = seed * seedMultiplier;
        // Use the last digit as the number of divisions.
        return +(modifiedSeed.toString().substr(-1));
    }
    generateSeedMultiplier(str) {
        console.log('calling generateSeedMultiplier with', str);
        // Make sure the string is a string.
        let multiplier = '';
        const strArray = str.toString().split('');
        for (let i = 0; i < strArray.length; i++) {
            multiplier = multiplier + strArray[i].charCodeAt(0);
        }
        multiplier = parseFloat('.' + multiplier * settings.seed);
        return multiplier;
    }
    generateColor(seed = settings.seed, seedMultiplier = 80857473) {
        let generated = randomHex(seed, seedMultiplier);
        return {
            color: tinycolor(generated).toHexString(),
            complement: tinycolor(generated).complement().toHexString(),
            splitComplement: tinycolor(generated).splitcomplement().map((sc) => sc.toHexString()),
            triad: tinycolor(generated).triad().map((tr) => tr.toHexString()),
            tetrad: tinycolor(generated).tetrad().map((te) => te.toHexString()),
            analogous: tinycolor(generated).analogous().map((an) => an.toHexString()),
            monochromatic: tinycolor(generated).monochromatic().map((mo) => mo.toHexString()),
        }
    }
}

/**
 * Fesses pattern.
 *
 * @class
 * @classdesc The Fesses pattern describes one or more vertical divisions of the field.
 * @augments Division
 */
export class Fesses extends Division {
    /**
     * Create fesses.
     *
     * @example
     * // Returns a Fesses instance.
     * const fesses = new Fesses(2, '#3febeb');
     * @param {number} count - The number of Fesses in this instance.
     * @param {number} gapPercentage - A whole number representing a percentage of the containerWidth. Used to place gaps during draw time.
     * @param {string} color - A hexadecimal color string.
     * @todo Implement a count limiter.
     */
   constructor(count, gapPercentage, color) {
       if (typeof count !== undefined) {
           super(count, color);
       } else {
           super();
       }
       this.gapPercentage = gapPercentage || 0;
       console.log('Fess count from the caller', count);
       console.log('Fess count in its constructor, after super', super.count);
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
       console.log('Fess count during draw', this.count);
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
           console.log('Fess count during draw', this.count);
           if (this.count === 2 && i == 0) {
               ctx.fillStyle = this.color.complement;
           } else if (this.count === 2 && i != 0) {
               ctx.fillStyle = this.color.color;
           }
           if (this.count === 3) {
               ctx.fillStyle = this.color.triad[i];
           }
           if (this.count === 4) {
               ctx.fillStyle = this.color.tetrad[i];
           }
           if (this.count > 4 && this.count <= 6) {
               ctx.fillStyle = this.color.monochromatic[Math.floor(Math.random() * 5)];
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

/** Pales pattern.
 *
 * @class
 * @classdesc The Pales pattern describes one or more horizontal divisions of the field.
 * @augments Division
 */
export class Pales extends Division {
    /**
     * Instantiates a Pales pattern.
     *
     * @example
     * // Instantiates a Pales pattern.
     * const pales = new Pales()
     * @param {number} count - The number of Pales in this instance.
     * @param {number} gapPercentage - A whole number representing a percentage of the containerWidth. Used to place gaps during draw time.
     * @param {string} color - A hexadecimal color string.
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
     * @param {number} count - The number of Saltires in this instance. Should typically only be one.
     * @param {boolean} border - A boolean value to decide whether or not to draw a border based on the global seed setting.
     * @param {number} borderWidth - A number value to use when generating border width. This number is used in addition
     * to the randomly generated border width determined by the seed.
     * @param {string} color - A hexadecimal color string.
     * @param {string} borderColor - A hexadecimal color string.
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
 * @augments Division
 */
export class Pall extends Division {
    /**
     * Creates a Pall.
     *
     * @example
     * // Creates a horizontally oriented, white Pall with a black border.
     * const pall = new Pall('fesswise', '#ffffff', true, 20, '#000000');
     * @param {string} direction - The orientation of the Pall. One of: fesswise, palewise, fesswiseReversed, palewiseReverse.
     * @param {string} color - A hexadecimal color string.
     * @param {boolean} border - Whether or not to draw a border around the Pall.
     * @param {number} borderWidth - The width of the border.
     * @param {string} borderColor - A hexadecimal color string.
     */
   constructor(direction, color, border = false, borderWidth, borderColor) {
       console.log('Constructing Pall');
       super(count, color);
       this.direction = direction || 'palewise';
       this.border = border;
       // @TODO: extrapolate generateSaltireWidth into Division.
       // this.borderWidth = borderWidth > 0 ? borderWidth : this.generateSaltireWidth((settings.seed * .1234));
       this.borderWidth = borderWidth;
       this.borderColor = borderColor || this.generateColor(undefined, .12345);
   }
   draw(ctx) {
       switch (this.direction) {
           case 'palewise':
               break;
           case 'fesswise':
               break;
           case 'palewiseReversed':
               break;
           case 'fesswiseReversed':
               break;
       }
   }
}

/** Border pattern.
 *
 * @class
 * @classdesc The Border pattern on a flag describes a border around each edge of the field.
 * <br>
 * If multiple Divisions are ever combined on a flag, the Border pattern should likely be
 * drawn last to provide a frame effect.
 * @augments Division
 */
export class Border extends Division {
    /**
     * Creates Border.
     *
     * @example
     * // Instantiates a Border
     * const border = new Border(20);
     * @param {string} color - A hex color value.
     * @param {number} borderWidth - A number representing the size of the border. This is used for coordinate drawing on a canvas for now.
     * @todo Handle border width more elegantly than taking a flat value from the caller.
     */
    constructor(color, borderWidth) {
        super(color)
        this.color = color || this.generateColor(undefined, .7039);
        this.borderWidth = borderWidth || 20;
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