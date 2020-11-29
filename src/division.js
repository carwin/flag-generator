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
 * @requires module:flag-generator/utilities
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
        this.seedMultiplier = Utilities.generateSeedMultiplier(this.constructor.name);
        this.color = typeof color !== 'undefined' ? color : Utilities.generateColor(seed, this.seedMultiplier);
        this.count = count || Utilities.generateCount(limit, this.seed, this.seedMultiplier)
    }
}







/**
 * Cross pattern.
 *
 * @class
 * @classdesc The Cross pattern describes two intersecting lines across the field. There are many variants that may make good sub-export classes: NordicCross, GreekCross, SymmetricCross, etc...
 * @todo Write the Cross export class.
 */
class Cross {}

/**
 * Lozenge pattern.
 *
 * @class
 * @classdesc The Lozenge pattern describes a diamond on the field with each intersection of lines touching the edge of the field.
 * @todo Write the Lozenge export class.
 */
class Lozenge {}

/**
 * Fusil pattern.
 *
 * @class
 * @classdesc The Fusil pattern is much like the Lozenge pattern, except that the horizontal intersections to not touch the edge of the field. A skinny diamond.
 * @todo Write the Fusil export class.
 */
class Fusil {}

/**
 * CenterShape pattern.
 *
 * @class
 * @classdesc The CenterShape pattern is a generic pattern that simply creates a shape on the center of the field. Think of the Japanese flag.
 * @todo Write the CenterShape export class.
 */
class CenterShape {}

/**
 * Quarterly pattern.
 *
 * @class
 * @classdesc The Quarterly pattern describes a field with four separate and equal sections.
 * @todo Write the Quarterly export class.
 */
class Quarterly {}

export default Division;