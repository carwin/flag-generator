/**
 * @file Utilities for flag generation.
 */

import seedrandom from 'seedrandom';
import settings from './settings';
import tinycolor from 'tinycolor2';

/**
 * Utilities for flag generation.
 *
 * @module flag-generator/utilities
 */

/**
 * Generate the seed from a seed string.
 *
 * @function
 * @example
 * // Returns 0.8112494706388412
 * generateSeed('test');
 * @param {string} seedString - A string on which to run the prng function.
 */
export const generateSeed = (seedString) => {
  const seed = typeof seedString !== 'undefined' ? seedrandom(seedString, {state: true}) : seedrandom(Math.floor(Math.random() * 1e9).toString(), {state: true});

  settings.seed = seed();
  return settings.seed;
}
/**
 * Generates a seed multiplier converting the characters of the provided string to numbers name.
 *
 * @function
 * @example
 * // Returns 0.5363260631705106
 * generateSeedMultiplier('Border');
 * @param {string} str - A string value to turn into charcodes.
 * @returns {number} A multiplier to be used with seed multiplication based decision making.
 * @todo I've read somewhere that parseFloat is dangerous without radx, I should figure out if that's true.
 * @todo: handle the case where settings.seed may not be set.
 */
export const generateSeedMultiplier = (str) => {
  // Make sure the string is a string.
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
  return multiplier;
}

/**
 * Modify a seed by multiplying it by a value.
 *
 * @function
 * @example
 * // Returns 0.05483563
 * modifySeed(0.2602354456965794, 0.2107154537);
 * @param {number} seed - The seed number on which generation depends.
 * @param {number} seedMultiplier - The multiplier used to alter the seed to generate values.
 * @returns {number} - The product of seed and seedMultiplier.
 */
// export const modifySeed = (seed, seedMultiplier) => seed * seedMultiplier
export const modifySeed = (seed, seedMultiplier) => {
  // console.log('seed to mod', seed);
  // console.log('multi', seedMultiplier);
  return seed * seedMultiplier
}


/**
 * Gets the last digit from a number.
 *
 * @function
 * @example
 * // Returns 7
 * getLastDigit(.2357);
 * @param {number} n - A number.
 * @returns {number} The last digit of n.
 */
export const getLastDigit = (n) => +(n.toString().substr(-1));


/**
 * Generate a random hex color based on the seed.
 *
 * @function
 * @example
 * // returns #2b32ad
 * randomHex(0.8112494706388412);
 * @param {number} seed - The prng generated seed value under 1.
 * @param {number} seedModifier - A number used to perform modifications to the seed.
 * @returns {string} The pseudo-randomly generated hexadecimal color value.
 */
export const randomHex = (seed = settings.seed, seedModifier) => {
    return '#'+((modifySeed(seed, seedModifier) % 1) * 0xFFFFFF << 0).toString(16).padStart(6, '0');
};

/**
 * Turn a hexadecimal color string into an rgb() object.
 *
 * @function
 * @example
 * // returns {r: 255, g: 255, b: 255}
 * hexToRgb('#ffffff');
 * @param {string} hex - A hexadecimal color string.
 * @returns {{r: number, b: number, g: number}} - An object containing RGB keys.
 */
export function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

/**
 * Convert a hexadecimal color string to an rgb() string.
 *
 * @function
 * @example
 * // Returns rgb(255, 255, 255)
 * convertHex('#ffffff');
 * @param {string} hex - A hexadecimal color string.
 * @returns {string} - An RGB color string.
 */
export const convertHex = (hex) => {
    const rgbObject = hexToRgb(hex);
    return 'rgb(' + rgbObject.r + ', ' + rgbObject.g + ', ' + rgbObject.b + ')';
}
/**
 * A color object.
 *
 * @typedef {object} ColorObject
 * @property {object} analogous - An object containing 6 hexadecimal color strings analogous to the originally generated color.
 * @property {string} color - A hexadecimal color value generated from the seed and a seedMultiplier.
 * @property {string} complement - A complement hexadecimal color value to the color string.
 * @property {object} monochromatic - An object containing 6 hexadecimal color strings describing the monochrome range of the original generated color.
 * @property {object} splitComplement - An object containing the originally generated color and two hexadecimal color string complements.
 * @property {object} tetrad - An object containing the originally generated color's tetrad.
 * @property {object} triad - An object containing the originally generated color's triad.
 */
/**
 * Generates a color object from a modified seed using the tinycolor2 library.
 *
 * @function
 * @example
 * // Generates a ColorObject with a primary color key of #575109;
 * const colorObject = generateColor(80857473, 0.06556305047688744);
 * @param {number} seedMultiplier - The multiplier used to alter the seed to generate values.
 * @param {number} seed - The seed number on which generation depends.
 * @returns {...ColorObject} A {@link module:flag-generator/utilities~ColorObject}.
 */
export const generateColor = (hex, seedMultiplier = 80857473, seed = settings.seed) => {
    let generated = randomHex(seed, seedMultiplier);
    if (/^#/.test(hex)) {
      generated = hex;
    }
    const color = {
        color: tinycolor(generated).toHexString(),
        complement: tinycolor(generated).complement().toHexString(),
        splitComplement: tinycolor(generated).splitcomplement().map((sc) => sc.toHexString()),
        triad: tinycolor(generated).triad().map((tr) => tr.toHexString()),
        tetrad: tinycolor(generated).tetrad().map((te) => te.toHexString()),
        analogous: tinycolor(generated).analogous().map((an) => an.toHexString()),
        monochromatic: tinycolor(generated).monochromatic().map((mo) => mo.toHexString()),
    }
    return color;
}

/**
 * Shuffles an array predictably using the Fisher Yates shuffle algorithm.
 *
 * @function
 * @example
 * // Returns [1, 2, 3, 5, 4]
 * const originalArray = [1, 2, 3, 4, 5]
 * const shuffledArray = pseudoShuffle(originalArray, 0.7243609520746538);
 * @param {Array} arr - The array to be shuffled.
 * @param {number} seed - The pseudorandom string used to predictabbly apply the algorithm.
 * @returns {Array} The arr parameter, but shuffled.
 */
export const pseudoShuffle = (arr, seed = settings.seed) => {
    let m = arr.length;
    let t, i

    while (m) {
        i = Math.floor(seed * m--)
        t = arr[m]
        arr[m] = arr[i]
        arr[i] = t
    }
    return arr;
};
/**
 * Takes an aspect ratio string, e.g.: 1:2, 2:3, 3:5, and returns an object with height (h) and width (w) keys.
 *
 * @function
 * @example
 * // Returns
 * // {
 * //     h: 3,
 * //     w: 5,
 * // }
 * const aspectObject = processAspectRatioString('3:5');
 * @param {string} aspect - A string describing a ratio.
 * @returns {object} An aspect ratio object containing height (h) and width (w) keys from the aspect ratio string.
 * @todo This function could be shortened significantly with a map callback.
 */
export const processAspectRatioString = (aspect) => {
  aspect = aspect.toString().split(':');
  let aspectObj = {};
  for (let i = 0; i < aspect.length; i++) {
    switch(i) {
      case 0:
        aspectObj.h = +(aspect[i]);
        break;
      case 1:
        aspectObj.w = +(aspect[i]);
        break;
      default:
        throw new Error('Could not process given aspect ratio string.');
      }
  }
  return aspectObj;
}

/**
 * Turn an aspect object into more realistic dimensions.
 *
 * @function
 * @example
 * // Returns
 * // {
 * //   h: 300,
 * //   w: 500,
 * // }
 * const dimensions = setDimensionsFromAspectObject({h: 3, w: 5});
 * @param {object} aspect - An aspect object.
 * @param {number} multiplier - A number to multiply the aspect keys by. Defaults to 100.
 * @returns {object} An object containing height (h) and width (w) keys representing dimensions.
 */
export const setDimensionsFromAspectObject = (aspect, multiplier = 100) => ({
  h: aspect.h * multiplier,
  w: aspect.w * multiplier
});

/**
 * Creates a canvas element and append it to the document body.
 *
 * @function
 * @example
 * // Creates and appends the canvas with an id of 'myCanvas'.
 * generateCanvas(document, 'myCanvas');
 * @param {object} document - A document object.
 * @param {string} id - The Id to give the created canvas element.
 * @param {object} dimensions - An object containing height(h) and width (w) keys.
 */
export const generateCanvas = (document, parentID, canvasID, dimensions) => {
  const parent = document.getElementById(parentID);
  const canvas = document.createElement('canvas');
  canvas.setAttribute('id', canvasID);
  canvas.setAttribute('style', 'border: 1px solid black;');
  canvas.setAttribute('width', dimensions.w);
  canvas.setAttribute('height', dimensions.h);
  parent.appendChild(canvas);
}
/**
 * Generates a number used for decision making based on the seed and a given multiplier.
 *
 * @function
 * @example
 * // Returns 1
 * generateCount(5, 0.8112494706388412, 0.6568774660735);
 * @param {number} limit - The maximum value of the count to be returned. Values above 9 are ignored.
 * @param {number} seedMultiplier - The multiplier used to alter the seed to generate values.
 * @param {number} seed - The seed number on which generation depends.
 * @returns {number} A single digit number between 0 and 9.
 */
export const generateCount = (limit, seedMultiplier, seed = settings.seed) => {
    const modifiedSeed = modifySeed(seed, seedMultiplier);
    let generated = getLastDigit(modifiedSeed);
    if (generated > limit || generated === 0) {
        generated = 1;
    }
    return generated;
}

export const findGreaterNumber = (a, b) => {
  let greater;
  greater = a >= b ? a : b;
  return greater;
}

// /**
//  *
//  * @returns {SVGSVGElement}
//  */
// const makeSVG = () => {
//     console.log('Make an SVG.');
//
//     let svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//     svg1.setAttribute("width", "400");
//     svg1.setAttribute("height", "400");
//     svg1.setAttribute("viewBox", "0 0 800 300");

//     let cir1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
//     cir1.setAttribute("cx", 50);
//     cir1.setAttribute("cy", 50);
//     cir1.setAttribute("r", 50);
//
//     svg1.appendChild(cir1);
//
//     return svg1;
//
// }
//
//
//
