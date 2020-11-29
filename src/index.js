/**
 * @file Flag generator base.
 */
/**
 * Flag module.
 *
 * @module flag-generator
 */
import tinycolor from 'tinycolor2';
import * as Utilities from './utilities';
import * as Divisions from './divisions';
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
    constructor(aspectRatio = '3:5') {
        // Aspect ratio is width / height, so height will be width divided by aspect ratio and
         // width will be height multiplied by aspect ratio.
        this.color = Utilities.generateColor();
        this.aspect = this.processAspectRatio(aspectRatio);
        this.dimensions = this.processDimensions();
        this.totalArea = this.dimensions.h * this.dimensions.w;
        this.divisionCount = this.generateDivisionCount(2, .4689);
        this.divisions = this.generateDivision(this.divisionCount);
    }
    processAspectRatio(aspect) {
        aspect = aspect.toString().split(':');
        let aspectObj = {};
        for (let i = 0; i < aspect.length; i++) {
           switch(i) {
               case 0:
                   aspectObj.h = aspect[i];
                   break;
               case 1:
                   aspectObj.w = aspect[i];
                   break;
               default:
                   throw('I don\'t know how to process this aspect ratio.');
                   break;
           }
        }
        return aspectObj;
    }
    generateDivisionCount(limit, seedMultiplier, seed = settings.seed) {
        const modifiedSeed = Utilities.modifySeed(seed, seedMultiplier);
        console.log('modified seed', modifiedSeed);
        let generated = Utilities.getLastDigit(modifiedSeed);
        console.log('generated count', generated);
        if (generated > limit || generated === 0) {
            generated = 1;
        }
        return generated;
    }
    processDimensions(multiplier = 100) {
        return {
            h: this.aspect.h * multiplier,
            w: this.aspect.w * multiplier,
        };
    }
    generateCanvas() {
       const canvas = document.createElement('canvas');
       canvas.setAttribute('id', 'flagCanvas2');
       canvas.setAttribute('style', 'border: 1px solid black;');
       canvas.setAttribute('width', this.dimensions.w);
       canvas.setAttribute('height', this.dimensions.h);
       document.body.appendChild(canvas);
    }
    generateDivision(count) {
        let divisions = [];
        const divisionsOptions = [
            new Divisions.Pales(),
            new Divisions.Fesses(),
            new Divisions.Saltire(undefined, true),
            new Divisions.Border(),
            new Divisions.Pall(),
            new Divisions.Chevron(),
            new Divisions.Bend(),
        ];

        const shuffled = Utilities.pseudoShuffle(divisionsOptions, settings.seed);

        // Randomly choose a number of divisions from the array:
        for (let i = 0, len = count; i < count; i++) {
            divisions.push(shuffled[i]);
        }

        return divisions;
    }
    drawFlag() {
        this.generateCanvas();
        const flagArea = this.dimensions.h * this.dimensions.w;
        console.log('flag area:', flagArea);
        const canvas = document.getElementById('flagCanvas2');
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = Utilities.convertHex(tinycolor.random().toHexString());
        ctx.fillStyle = this.color.color;
        console.log('Flag2 fill style: ', settings.seed);
        ctx.fillRect(0, 0, 500, 300);

        for (let i = 0; i < this.divisions.length; i++) {
            // Drawing pales.
            this.divisions[i].draw(ctx);
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


const flagGenerator = (seed, subFlag) => {
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



    const newFlag2 = new Flag2('3:5');

    console.log('-----')
    console.log('NEW FLAG:', newFlag2)
    console.log('-----')

    newFlag2.drawFlag();

}




export default {settings, Utilities, flagGenerator};
