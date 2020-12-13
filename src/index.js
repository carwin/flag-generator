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
//   - Take the flag width and height and divide it into 9 parts (rule of 3rds). Process each of the 9 parts individually for color
//     After than use the 4 intersections to add more complexity.
//
//     Expanding on this idea, we should be able to apply patterns if we want to the Divisions themselves, looking to
//     heraldry designs for inspiration:
//      * Paly bendy
//      * Lozengy  - diamonds in a pattern
//

/** The current generator settings. */
// export let settings = {
//     seed: false,
//     flagWidth: 500,
//     flagHeight: 300,
// }

// Prototypes / Classes
// --------------------------------------------------------------------------------------------------------------
/** Class representing a differently envisioned Flag. */
class Flag {

    // When randomizing, we should use this fibonacci sequence of ratios
    // 1:1, 1:2, 2:3, 3:5, 5:8
  constructor(id, aspectRatio = '5:5') {
    // Aspect ratio is width / height, so height will be width divided by aspect ratio and
    // width will be height multiplied by aspect ratio.
    this.color = Utilities.generateColor();
    this.aspect = Utilities.processAspectRatioString(aspectRatio);
    this.dimensions = Utilities.setDimensionsFromAspectObject(this.aspect);
    this.totalArea = this.dimensions.h * this.dimensions.w;
    this.divisionCount = Utilities.generateCount(undefined, .4689, settings.seed);
    this.divisions = this.generateDivisions(this.divisionCount);
    this.parentID = id;
    // this.drawFlag() = this.drawFlag();
    console.log('this flag division count', this.divisionCount);
    console.log('colerrrr', Utilities.generateColor());
    settings.flagHeight = this.dimensions.h;
    settings.flagWidth = this.dimensions.w;
  }

  generateDivisions(count) {
    let divisions = [];
    const divisionsOptions = [
      new Pales(),
      new Fesses(),
      new Fusil(),
      new Border(),
      new Lozenge(),
      new Cross(),
      new Saltire(),
      new Pall(),
      new Chevron(),
      new Bend(),
    ];

    const shuffled = Utilities.pseudoShuffle(divisionsOptions, settings.seed);

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
    const seed = settings.seed;
    const parentID = this.parentID !== 'undefined' ? this.parentID : 'root';
    const canvasID = typeof this.canvasID !== 'undefined' ? this.canvasID : 'flag_' + seed;
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
