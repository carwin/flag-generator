/**
 * @file Utilities for flag generation.
 */

import seedrandom from "seedrandom";
import settings from "./settings";

/**
 * Utilities for flag generation.
 *
 * @module flag-generator/utilities
 */

/**
 * Generate the seed from a seed string.
 *
 * @example
 * // Returns 0.8112494706388412
 * generateSeed('carwin');
 * @param {string} seedString - A string on which to run the prng function.
 */
const generateSeed = (seedString) => {
    let seed = typeof seedString !== 'undefined' ? seedrandom(seedString, {state: true}) : seedrandom(Math.floor(Math.random() * 1e9).toString(), {state: true});
    console.log('generating a seed value to base everything on: ', seed());

    settings.seed = seed();
}

/**
 * Generate a random hex color based on the seed.
 *
 * @example
 * // returns #2b32ad
 * randomHex(0.8112494706388412);
 * @param {number} seed - The prng generated seed value under 1.
 * @param {number} modifier - A number used to perform modifications to the seed.
 * @returns {string} The pseudo-randomly generated hexadecimal color value.
 */
function randomHex(seed = settings.seed, modifier = 15) {
    return '#'+((seed * modifier % 1) * 0xFFFFFF << 0).toString(16).padStart(6, '0');
}

/**
 * Turn a hexadecimal color string into an rgb() object.
 *
 * @example
 * // returns {r: 255, g: 255, b: 255}
 * hexToRgb('#ffffff');
 * @param {string} hex - A hexadecimal color string.
 * @returns {{r: number, b: number, g: number}|null} - An object containing RGB keys.
 */
function hexToRgb(hex) {
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
 * @example
 * // Returns rgb(255, 255, 255)
 * convertHex('#ffffff');
 * @param {string} hex - A hexadecimal color string.
 * @returns {string} - An RGB color string.
 */
const convertHex = (hex) => {
    const rgbObject = hexToRgb(hex);
    return 'rgb(' + rgbObject.r + ', ' + rgbObject.g + ', ' + rgbObject.b + ')';
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
//
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
export {generateSeed, convertHex, randomHex, hexToRgb}
//
//