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
     * @abstract
     * @see {@link generateSeed} for more info about the seed.
     * @todo Create a generateGap function for the Division sub-classes that might use it: Fesses, Pales, etc...
     * @todo Create some border methods: generateBorderWidth(), etc...
     * @todo Implement some border properties that sub-classes can use.
     */
  constructor(params = {count, limit, color, seed}) {
    this.limit = params.limit;
    this.seed = params.seed;
    this.seedMultiplier = Utilities.generateSeedMultiplier(this.seed, this.constructor.name);
    this.color = typeof params.color !== 'undefined' ? Utilities.generateColor(params.color) : Utilities.generateColor(undefined, this.seed, this.seedMultiplier);
    this.count = typeof params.count !== 'undefined' ? params.count : Utilities.generateCount(params.limit, this.seed, this.seedMultiplier);
  }
}

/**
 * CenterShape pattern.
 *
 * @class
 * @classdesc The CenterShape pattern is a generic pattern that simply creates a shape on the center of the field. Think of the Japanese flag.
 * @todo Write the CenterShape export class.
 */
class CenterShape {}

/**
 * @TODO: This might make a better /field/ pattern than division pattern. Though technically it is a division?
 * Quarterly pattern.
 *
 * @class
 * @classdesc The Quarterly pattern describes a field with four separate and equal sections.
 * @todo Write the Quarterly export class.
 */
class Quarterly {}

export default Division;
