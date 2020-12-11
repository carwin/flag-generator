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
class Flag2 {
    // When randomizing, we should use this fibonacci sequence of ratios
    // 1:1, 1:2, 2:3, 3:5, 5:8
  constructor(id, aspectRatio = '3:5') {
    // Aspect ratio is width / height, so height will be width divided by aspect ratio and
    // width will be height multiplied by aspect ratio.
    this.color = Utilities.generateColor();
    this.aspect = Utilities.processAspectRatioString(aspectRatio);
    this.dimensions = Utilities.setDimensionsFromAspectObject(this.aspect);
    this.totalArea = this.dimensions.h * this.dimensions.w;
    this.divisionCount = Utilities.generateCount(3, .4689, settings.seed);
    this.divisions = this.generateDivisions(this.divisionCount);
    this.parentID = id;
    console.log('this flag division count', this.divisionCount);
    console.log('colerrrr', Utilities.generateColor());
  }
  generateDivisions(count) {
    let divisions = [];
    const divisionsOptions = [
      new Pales(),
      new Cross(),
      new Fesses(),
      new Saltire(undefined, true),
      new Border(),
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
// Generate seed used for random generation.
// const generateSeed = (seedString) => {
//     let seed = typeof seedString !== 'undefined' ? seedrandom(seedString, {state: true}) : seedrandom(Math.floor(Math.random() * 1e9).toString(), {state: true});
//     console.log('generating a seed value to base everything on: ', seed());
//
//     settings.seed = seed();
// }


const flagGenerator = (id = 'root', seed, subFlag) => {
    console.log('Running the Flag Generator...');
    console.log('Seed received by flagGenerator(): ', seed);
    // Placeholders:
    let divisions = [];

    // If we have no seed, go get one:
    // seed = typeof seed != 'undefined' ? seed : generateSeed();
    seed = settings.seed !== false ? seed : typeof seed !== 'undefined' ? seed : Utilities.generateSeed();

    // Generate our flag's base color:
    const seededColor = Utilities.randomHex(seed);
    console.log('Seeded color: ', seededColor);

    // Decide if there should be any divisions:
    //
    // We'll use the seed to generate a binary value to decide whether or not we want any divisions at all.
    const divisionChoice = Math.round(seed);
    console.log('Do we want any division(s)? ', divisionChoice ? 'yes' : 'no');

    // If we do want some number of divisions, we'll figure out how many by using the seed's last digit.
    if (divisionChoice) {
        // const divisionCount = +(seed.toString().slice(-1))
        // divisionCount ? console.log('How many divisions do we want? ', divisionCount) : null;

        // Now we'll create new Division instances for that number.
        // Initialize an empty array
        // Do a loop, instantiate Division objects, add them to the array.
        // console.log('Generate this many divisions: ', divisionCount);
        // for (let i = 0; i < divisionCount; i++) {
        //     const newDivision = new Division((i + 1) * divisionCount);
        //     console.log('A new division to push into the array:', newDivision);
        //     divisions.push(newDivision);
        // }
    }



  console.log('got an ID from caller: ', id);
  const newFlag2 = new Flag2(id, '3:5');

    console.log('-----');
    console.log('NEW FLAG:', newFlag2);
    console.log('-----');

    newFlag2.drawFlag();

};




export default {settings, Utilities, flagGenerator};
