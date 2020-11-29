/**
 * @file Houses the class properties and methods for the Canton division.
 */
import settings from '../settings';
import Division from '../division';

/**
 * Canton pattern.
 *
 * @class
 * @classdesc The Canton pattern describes a small quarter of the flag, usually the top dexter quarter. It is often filled by a pattern, like in the flag of the United States, or an entire flag in the case of many British colony flags.
 * @augments Division
 * @namespace Divisions.Canton
 * @todo Write the Canton export class.
 */
export class Canton extends Division {
    constructor(color, aspect) {
        const limit = 1;
        super(1, limit, color);
        this.aspect = aspect;
    }
    drawInstructions() {
        return [
            {moveTo: [0, 0]}, // start top-left
            {lineTo: [settings.flagWidth / 2, settings.flagHeight / 2]}, // draw to center
            {lineTo: [0, settings.flagHeight]}, // draw to bottom left.
        ];
    }
    draw() {

    }
}
