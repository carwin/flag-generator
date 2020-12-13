/**
 * @file Flag generator base.
 */
/**
 * Flag module.
 *
 * @module flag-generator
 */
import * as Utilities from './utilities';
import Bend from './divisions/Bend';
import Border from './divisions/Border';
import Canton from './divisions/Canton';
import Chevron from './divisions/Chevron';
import Cross from './divisions/Cross';
import Fesses from './divisions/Fesses';
import Fusil from './divisions/Fusil';
import Lozenge from './divisions/Lozenge';
import Pales from './divisions/Pales';
import Pall from './divisions/Pall';
import Saltire from './divisions/Saltire';
import settings from './settings';

// Ideas:
//   - Take the flag width and height and divide it into 9 parts (rule of 3rds).
//     Process each of the 9 parts individually for color
//     After that use the 4 intersections to add more complexity.
//
//     Expanding on this idea, we should be able to apply patterns if we want to the Divisions themselves, looking to
//     heraldry designs for inspiration:
//      * Paly bendy
//      * Lozengy  - diamonds in a pattern
//

// Prototypes / Classes
// --------------------------------------------------------------------------------------------------------------
/** Class representing a differently envisioned Flag. */
class Flag {

  constructor(params = {id, aspectRatio, divisionCount, divisions, seed, color}) {
    this.seed = params.seed ? params.seed : Utilities.generateSeed();
    this.color = Utilities.generateColor(params.color, undefined, this.seed);
    this.aspect = params.aspectRatio ? Utilities.processAspectRatioString(params.aspectRatio) : Utilities.processAspectRatioString(this.generatePseudoRandomRatio());
    this.dimensions = Utilities.setDimensionsFromAspectObject(this.aspect);
    this.totalArea = this.dimensions.h * this.dimensions.w;
    this.divisionCount = params.divisionCount ? params.divisionCount : Utilities.generateCount(undefined, .4689, this.seed);
    this.divisions = this.generateDivisions(this.divisionCount);
    this.parentID = params.id;
    // this.drawFlag() = this.drawFlag();
    settings.flagHeight = this.dimensions.h;
    settings.flagWidth = this.dimensions.w;
    // settings.seed = this.seed;

    // this.generatePseudoRandomRatio(1, 6);
    console.log('flag constructor params', params);
    console.log('flag generated color', this.color.color);


  }

  /**
   * Generate a random aspect ratio string of the style '3:5'
   *
   * This function takes the limit value and generates a fibonacci sequence of
   * aspect ratios up to that limit, then shuffles the ratios, and chooses
   * one based on the seed.
   * @example
   * // Returns 3:5
   * const newFlag = new Flag({id: 'test', seed: 0.3994258342288038});
   * newFlag.generatePseudoRandomRatio();
   * @param {number} limit - The maximum number of ratio strings to generate.
   * @returns {string} An aspect ratio string.
   */
  generatePseudoRandomRatio(limit) {
    const genLimit = Utilities.getLastDigit(this.seed);
    const numSequence = limit || genLimit > 5 ? 5 : genLimit;
    const arr = [[1, 1], [1, 2]];

    for (let i = 1; i < numSequence; i++) {
      const opGroup = arr[i];
      const prevGroup = arr[i - 1];

      let x = opGroup[0] + prevGroup[0];
      let y = opGroup[1] + prevGroup[1];

      arr[i + 1] = [x, y];
    }

    const shuffledArr = Utilities.pseudoShuffle(arr);
    const choiceDigit = Utilities.getLastDigit(numSequence);

    console.log('arr', shuffledArr);
    return `${shuffledArr[choiceDigit][0]}:${shuffledArr[choiceDigit][1]}`;
  }

  generateDivisions(count) {
    const basicOptions = {
      seed: this.seed,
    }
    let divisions = [];
    const divisionsOptions = [
      new Pales(basicOptions),
      new Cross(basicOptions),
      new Fusil(basicOptions),
      new Border(basicOptions),
      new Lozenge(basicOptions),
      new Fesses(basicOptions),
      new Saltire(basicOptions),
      new Pall(basicOptions),
      new Chevron(basicOptions),
      new Bend(basicOptions),
    ];

    const shuffled = Utilities.pseudoShuffle(divisionsOptions, this.seed);

    // Randomly choose a number of divisions from the array:
    for (let i = 0, len = count; i < count; i++) {
      divisions.push(shuffled[i]);
    }
    return divisions;
  }

  drawFlag() {
    const dimensions = this.dimensions;
    const divisions = this.divisions;
    const primaryColor = this.color.color;
    const seed = this.seed;
    const parentID = this.parentID !== 'undefined' ? this.parentID : 'root';
    const canvasID = 'flag_' + (Math.round(seed * 100));
    Utilities.generateCanvas(document, parentID, canvasID, dimensions);
    const canvas = document.getElementById(canvasID);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = primaryColor;
    ctx.fillRect(0, 0, dimensions.w, dimensions.h);
    for (let i = 0; i < divisions.length; i++) {
      // Drawing pales.
      divisions[i].draw(ctx);
    }
  }

  destroyFlag(seed) {
    const canvas = document.getElementById('flag_' + (Math.round(seed * 100)));
    canvas.remove();
  }

}

// Flag testing area
// ----------------------------------------------------------------------------------------------------------------

const flagGenerator = (params = {id: 'root', seed: undefined, subFlag: undefined}) => {
  console.log('Running the Flag Generator...');
  console.log('Seed received by flagGenerator(): ', params.seed);
  // Placeholders:
  let divisions = [];
  const seed = typeof params.seed !== 'undefined' ? params.seed : Utilities.generateSeed();

  // Generate our flag's base color:
  const seededColor = Utilities.randomHex(seed);
  // console.log('Seeded color: ', seededColor);

  // If we have no seed, go get one:
  // seed = typeof seed != 'undefined' ? seed : generateSeed();
  // seed = params.seed ? params.seed : typeof params.seed !== 'undefined' ? params.seed : Utilities.generateSeed();



  // Decide if there should be any divisions:
  // We'll use the seed to generate a binary value to decide whether or not we want any divisions at all.
  // const divisionChoice = Math.round(seed);
  // console.log('Do we want any division(s)? ', divisionChoice ? 'yes' : 'no');

  console.log('got an ID from caller: ', params.id);
  const newFlag = new Flag(params.id, '3:5');

  return newFlag;

};




export default {settings, Utilities, Flag, flagGenerator};
