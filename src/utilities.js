// Generate a pseudo-random hex color based on a given seed.
//
// @args
//   seed  -  float : a float below 0;
//
export function randomHex(seed, modifier) {
    modifier = typeof modifier !== 'undefined' ? modifier : 15;
    return '#'+((seed * modifier % 1) * 0xFFFFFF << 0).toString(16).padStart(6, '0');
}

// Take a hex value and turn it into an RGB object.
export function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

// Take a hex value and output it as an RGB string.
export const convertHex = (hex) => {
// var convertHex = function(hex) {
    const rgbObject = hexToRgb(hex);
    return 'rgb(' + rgbObject.r + ', ' + rgbObject.g + ', ' + rgbObject.b + ')';
}