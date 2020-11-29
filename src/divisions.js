/**
 * @file Houses the class definitions for Divisions.
 */
import tinycolor from 'tinycolor2';
import * as Utilities from './utilities';
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
     * @param {number} limit - A number representing the limit for the number of divisions to draw.
     * @param {string} color - A hexadecimal color string.
     * @param {number} seed - A pseudo-random string generated based on a string value.
     * @see {@link module:flag-generator/utilities~generateSeed|generateSeed()} for more info about the seed.
     * @todo Create a generateGap function for the Division sub-classes that might use it: Fesses, Pales, etc...
     * @todo Create some border methods: generateBorderWidth(), etc...
     * @todo Implement some border properties that sub-classes can use.
     */
    constructor(count, limit, color, seed) {
        this.limit = limit;
        this.seed = typeof seed !== 'undefined' ? seed : settings.seed;
        this.seedMultiplier = this.generateSeedMultiplier(this.constructor.name);
        this.color = typeof color !== 'undefined' ? color : Utilities.generateColor(seed, this.seedMultiplier);
        this.count = typeof count !== 'undefined' ? count : this.generateCount(limit);
    }

    /**
     * Generates a count of divisions to draw.
     *
     * @example
     * // Returns 1
     * const division = new Division();
     * division.generateCount(5, 0.8112494706388412, 0.6568774660735);
     * @param {number} limit - The maximum value of the count to be returned.
     * @param {number} seed - The seed number on which generation depends.
     * @param {number} seedMultiplier - The multiplier used to alter the seed to generate values.
     * @returns {number} A count of divisions.
     */
    generateCount(limit, seed = this.seed, seedMultiplier = this.seedMultiplier) {
        // Modify the seed.
        const modifiedSeed = Utilities.modifySeed(seed, seedMultiplier);
        // Use the last digit as the number of divisions.
        let generated = Utilities.getLastDigit(modifiedSeed);
        // If generated is 0, or if it's higher than the limit, set it to 1.
        if (generated > limit || generated === 0) {
           generated = 1;
        }
        return generated;
    }

    /**
     * Generates a seed multiplier converting the characters of the caller's name.
     *
     * @example
     * // Returns 0.5363260631705106
     * const division = new Division();
     * division.generateSeedMultiplier('Border');
     * @param {string} str - A string value to turn into charcodes.
     * @returns {number} A multiplier to be used with seeds.
     */
    generateSeedMultiplier(str) {
        // Make sure the string is a string.
        console.log(str);
        str = str.toString();
        // Add each character to an array.
        let multiplier = '';
        const strArray = str.toString().split('');
        // Loop over the array of characters, turn them into a number, and add them to a string.
        // I could probably do this more simply with array.map() or reduce() somehow.
        for (let i = 0; i < strArray.length; i++) {
            multiplier = multiplier + strArray[i].charCodeAt(0);
        }
        // Turn our multiplier string into an actual number.
        multiplier = parseFloat('.' + multiplier * settings.seed);
        console.log('Generated multiplier:', multiplier);
        return multiplier;
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
        const limit = 4;
        super(count, limit, color);
        this.gapPercentage = gapPercentage || 0;
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
        const limit = 1;
        super(count, limit, color);
        this.border = border;
        this.borderWidth = borderWidth > 0 ? borderWidth : this.generateSaltireWidth((settings.seed * .1234));
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

/** Chevron pattern.
 *
 * @class
 * @classdesc The Chevron pattern describes two diagonal lines beginning from two corners and stopping in the center of the field where they meet.
 * @augments Division
 */
export class Chevron extends Division {
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
    constructor(direction, color, width, border, borderWidth, borderColor) {
        const limit = 1;
        super(1, limit, color);
        this.border = border;
        this.width = width;
        this.direction = typeof direction !== 'undefined' ? direction : this.generateDirection();

        // @TODO: extrapolate generateSaltireWidth into Division.
        // this.borderWidth = borderWidth > 0 ? borderWidth : this.generateSaltireWidth((settings.seed * .1234));
        this.borderWidth = borderWidth || 50;
        this.borderColor = borderColor || Utilities.generateColor(undefined, .50000);
        console.log('')
        console.log('THIS CONSTRUCTOR', this);
        console.log('')
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
                ctx.[step](...stepParams);
            }
            ctx.lineWidth = chevronWidth + this.borderWidth;
            ctx.strokeStyle = this.color.complement;
            ctx.stroke();
        }

        for (let i = 0, len = drawSteps.length; i < len; i++) {
            const step = Object.keys(drawSteps[i]);
            const stepParams = Object.values(drawSteps[i])[0];
            ctx.[step](...stepParams);
        }
        console.log('')
        console.log('THIS CONSTRUCTOR', this);
        console.log('')

        console.log('chevronWidth', chevronWidth)
        console.log('chevron color', this.color.color)
        ctx.strokeStyle = this.color.color;
        ctx.lineWidth = chevronWidth;
        ctx.stroke();
    }
}

/**
 * Bends pattern.
 *
 * @class
 * @classdesc The Bends pattern describes a single diagonal line in either the dexter or sinister direction.
 * @augments Division
 */
export class Bend extends Division {
    /**
     * Creates a Bend.
     *
     * @example
     * // Creates two white Bends across the flag with black borders
     * const bend = new Bend(2, 'dexter', false, '#ffffff', undefined, true, 20, '#000000');
     * // Creates a single Bend division as a party of the flag.
     * const bendFilled = new Bend(1, 'sinister', true, '#ffffff');
     * @param {number} count - The number of divisions to draw.
     * @param {string} direction - The orientation of the Pall. One of: dexter, sinister.
     * @param {boolean} party - Whether this division should take up an entire diagonal half of the flag.
     * @param {string} color - A hexadecimal color string.
     * @param {number} width - A width value for drawing the division.
     * @param {boolean} border - Whether or not to draw a border around the Pall.
     * @param {number} borderWidth - The width of the border.
     * @param {string} borderColor - A hexadecimal color string.
     * @todo Enhance the generation of border widths, possibly extrapolate whatever we come up with into parent Division class.
     */
    constructor(count, direction, party = false, color, width, border, borderWidth, borderColor) {
        let limit;
        if (party) {
            limit = 1;
        } else {
            limit = 3;
        }
        super(count, limit, color);
        this.party = party;
        this.border = border;
        this.width = width;
        this.direction = typeof direction !== 'undefined' ? direction : this.generateDirection();

        // @TODO: extrapolate generateSaltireWidth into Division.
        // this.borderWidth = borderWidth > 0 ? borderWidth : this.generateSaltireWidth((settings.seed * .1234));
        this.borderWidth = borderWidth || 50;
        this.borderColor = borderColor || Utilities.generateColor(undefined, .50000);
    }
    /**
     * Generate a direction value for the Bend.
     *
     * @example
     * // Returns 'dexter'
     * const newBend = new Bend();
     * newBend.generateDirection(.1337)
     * @param {number} seed - The seed number used for generated values.
     * @returns {string} - One of: 'dexter', 'sinister'.
     */
    generateDirection(seed = this.seed) {
        let generated;
        const seedDigit = Utilities.getLastDigit(Utilities.modifySeed(this.seed, this.seedMultiplier));
        if (seedDigit >=0 && seedDigit <= 5) {
            generated = 'dexter';
        } else if (seedDigit >=6 && seedDigit <= 9) {
            generated = 'sinister';
        }
        return generated;
    }
    /**
     * Returns the proper draw function instructions for a given direction.
     *
     * @example
     * // Returns drawInstructionsDexter();
     * const bend = new Bends();
     * chevron.drawInstructions('dexter');
     * @param {string} direction - One of: dexter, sinister.
     * @returns {Function} The draw instruction function corresponding to the direction.
     */
    drawInstructions(direction) {
        let instructions;
        switch (direction) {
            case 'dexter':
                instructions = this.drawInstructionsDexter();
                break;
            case 'sinister':
                instructions = this.drawInstructionsSinister();
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
     * const bends = new Bends();
     * const instructions = bends.drawInstructionsDexter();
     * @param {boolean} party - Whether or not the division should be filled.
     * @returns {Array} An array of objects containing canvas drawing instructions.
     */
    drawInstructionsDexter(party = this.party) {
        let instructions;
        if (!party) {
            instructions = [
                {moveTo: [0, 0]}, // start top-left
                {lineTo: [settings.flagWidth, settings.flagHeight]}, // draw to bottom-right
            ]
        } else {
            instructions = [
                {moveTo: [0, 0]}, // start top-left
                {lineTo: [settings.flagWidth, settings.flagHeight]}, // draw to bottom-right
                {lineTo: [0, settings.flagHeight]}, // draw to bottom-left
                {lineTo: [0, 0]}, // draw to top-left
            ]
        }
        return instructions;
    }
    /**
     * Generates the draw instructions for the sinister.
     *
     * @example
     * // Returns an instruction set for the sinister direction based on the flag dimensions.
     * // [
     * //     {moveTo: [x, y]},
     * //     {lineTo: [x, y]},
     * //     {lineTo: [x, y]},
     * // ]
     * const bends = new Bends();
     * const instructions = bends.drawInstructionsSinister();
     * @param {boolean} party - Whether or not the division should be filled.
     * @returns {Array} An array of objects containing canvas drawing instructions.
     */
    drawInstructionsSinister(party = this.party) {
        let instructions;
        if (!party) {
            instructions = [
                {moveTo: [settings.flagWidth, 0]}, // start top right
                {lineTo: [0, settings.flagHeight]}, // draw to bottom left
            ];
        } else {
            instructions = [
                {moveTo: [settings.flagWidth, 0]}, // start top right
                {lineTo: [0, settings.flagHeight]}, // draw to bottom left
                {lineTo: [settings.flagWidth, settings.flagHeight]}, // draw to bottom right
                {lineTo: [settings.flagWidth, 0]}, // draw to top right
            ];
        }
        return instructions;
    }

    /**
     * A semi-curried function that applies the passed arguments to drawSteps.
     * Used as a callback for array.map() to pass arguments into the map function's
     * callback function.
     *
     * @example
     * // Applies a shift width of 100 to a drawStep's parameters.
     * for (let i = 0, len = drawSteps.length; i < len; i++) {
           const step = Object.keys(drawSteps[i]);
           const stepParams = Object.values(drawSteps[i])[0];
           ctx[step](...stepParams.map(shiftStep(positionShift, 'sinister', 'dexter')));
     * }
     * @param {number} positionShift - The value by which we will shift the inner function's p parameter.
     * @param {string} direction - The string value of the current operating direction.
     * @param {string} oddDirection - The odd-man-out direction that needs special processing.
     * @returns {Function} A callback function that operates using the values of shiftStep().
     * @todo The shift position is based entirely on 3:5 flags, make it more... Betterer...
     * @todo Come up with a better description, and maybe a better name for the oddDirection parameter.
     */
    shiftStep(positionShift, direction, oddDirection) {
        return (p, index) => {
            // If the direction is the oddDirection, we need to add the positionShift to
            // the x coordinate (0) and subtract the positionShift from the y coordinate (1).
            let calculated;
            if (direction === oddDirection) {
                calculated = index === 0 ? p + positionShift : p - positionShift;
            }
            // If the direction is not the oddDirection, we can simply add the positionShift
            // to both the x and y coords.
            else {
                calculated = p + positionShift;
            }
            return calculated;
        }
    }
    /**
     * Draws the Chevron division on a canvas.
     *
     * @example
     * // Draws the Bends division on the canvas.
     * const bend = new Bend();
     * bend.draw(ctx);
     * @param {object} ctx - An object containing a canvas context.
     */
    draw(ctx) {
        const drawSteps = this.drawInstructions(this.direction);
        const bendWidth = this.width || Math.round(this.seed * 100);
        ctx.beginPath();

        // Bends has a ton of possible options, so we start by looping over the count.
        for (let i = 0, len = this.count; i < len; i++) {
            // If we have more than one bend to draw, we need to set some
            // offsets for the second and third bends. That's what's happening
            // here with the switch and the positionShift variable.
            let positionShift = 0;
            // If there are 2 bends, split them somewhat equally from the center.
            if (this.count === 2) {
                switch (true) {
                    case i === 0 && !this.party:
                        positionShift = -70;
                        break;
                    case i === 1:
                        positionShift = 70;
                        break;
               }
            // If there are 3 bends, draw one in the center and the others spaced equally from it.
            } else if (this.count === 3) {
                switch (i) {
                    case 0:
                        positionShift = 0;
                        break;
                    case 1:
                        positionShift = -100;
                        break;
                    case 2:
                        positionShift = 100;
                        break;
                }
            }
            // Now that we have that out of the way, let's do some drawing.
            // Loop over the draw steps. For each step, apply the position shift
            // we decided on above.
            //
            // We'll start with borders, since they sit behind the main drawing.
            // If there's a border, draw it first with a larger width.
            if (this.border && !this.party) {
                for (let k = 0, len3 = drawSteps.length; k < len3; k++) {
                    const step = Object.keys(drawSteps[k]);
                    const stepParams = Object.values(drawSteps[k])[0];
                    // This is a pretty complicated set of instructions. If you're
                    // having trouble following the logic, it's repeated and
                    // documented in the shiftStep function definition.
                    // Basically, we're applying the positionShift to the bend coords.
                    ctx[step](...stepParams.map(this.shiftStep(positionShift, this.direction, 'dexter')));
                }
                ctx.lineWidth = bendWidth + this.borderWidth;
                ctx.strokeStyle = this.color.complement;
                ctx.stroke();
            }

            // Keep in mind this is a loop within a loop, so for every bend (outer loop),
            // we're running each of the draw steps (inner loop).
            for (let j = 0, len2 = drawSteps.length; j < len2; j++) {
                // Get the method name from the drawStep's key.
                const step = Object.keys(drawSteps[j]);
                // Get the parameters to apply to each method. These are all x,y coordinates.
                const stepParams = Object.values(drawSteps[j])[0];
                // Run the method off of the ctx object, that's what it references!
                // For the parameters, send them all using the ... notation, and then run
                // an array.map() callback to apply the position shift.
                ctx[step](...stepParams.map(this.shiftStep(positionShift, this.direction, 'dexter')));
            }
            // If we're drawing the division as a party, we can only have a single bend.
            // Instead of stroking the path, we're going to fill it so that it takes up
            // a diagonal half of the entire flag.
            if (this.party) {
                ctx.fillStyle = this.color.color;
                ctx.fill();
                // Since we can only have 1 Bend if we're drawing it as a party, let's break
                // the loop as soon as we've created it.
                break;
            }
            // If we don't want a party per bend, we'll stroke the lines we drew during the
            // earlier drawStep stage, then continue on with the loop in case there are
            // more bends to draw.
            else {
                ctx.strokeStyle = this.color.color;
                ctx.lineWidth = bendWidth;
                ctx.stroke();
            }
        }
    }
}

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