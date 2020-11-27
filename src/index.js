/**
 * @file Flag generator base.
 */
/**
 * Flag module.
 *
 * @module flag-generator
 */
import * as Utilities from './utilities';
import * as Divisions from './divisions';

// Ideas:
//   - Take the flag width and height and divide it into 9 parts (rule of 3rds). Process each of the 9 parts individually for color
//     After than use the 4 intersections to add more complexity.
//
//     Expanding on this idea, we should be able to apply patterns if we want to the Divisions themselves, looking to
//     heraldry designs for inspiration:
//      * Paly bendy
//      * Lozengy  - diamonds in a pattern
//
//   - Use some common flag ratios when choosing a flag size. The following are all real flag ratios, and
//     it turns out that, in order, they're a fibonacci sequence!  1:1, 1:2, 2:3, 3:5, 5:8
//      * 1:1 (1.0)   - Vatican and Switzerland...
//      * 1:2 (2.0)   - Canada, Croatia, Cuba, Ireland...
//      * 2:3 (1.5)   - Netherlands, Romania, Morocco, Turkey, China...
//      * 3:5 (1.666) - Bulgaria, Bahrain, Luxembourg, Bangladesh...
//      * 5:8 (1.6)   - Poland, Sweden, Argentina...
//     We can expand the sequence to create more interesting flags of different ratios.
//
import seedrandom from 'seedrandom';
/** The current generator settings. */
export let settings = {
    seed: false,
    flagWidth: 500,
    flagHeight: 300,
}

// Prototypes / Classes
// --------------------------------------------------------------------------------------------------------------

/** Class representing the whole flag. */
class Flag {
    constructor(baseColor, canton, Divisions) {
        this.baseColor = baseColor ? Utilities.convertHex(baseColor) : Utilities.convertHex('#cfcfcf');
        this.canton = typeof canton != 'undefined' ? canton : false;
        this.Divisions = typeof Divisions != 'undefined' ? Divisions : false;
    }
    createFlag() {
        // Create a canvas to draw on:
        const canvas = document.createElement('canvas');
        canvas.setAttribute('id', 'flagCanvas');
        canvas.setAttribute('style', 'border: 1px solid black;');
        canvas.setAttribute('width', '500');
        canvas.setAttribute('height', '300');
        document.body.appendChild(canvas);
        
        // Prepare for drawing
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = this.baseColor;
        ctx.fillRect(0, 0, 500, 300);

        // If we were passed a Canton, let's draw it:
        if (typeof this.canton !== 'undefined') {
            ctx.fillStyle = this.canton.color;
            ctx.fillRect(0, 0, 500 / 2, 300 / 2);
            // If we have an embeddedFlag to use as a canton, let's do that:
            if (typeof this.canton.embeddedFlag !== 'undefined') {
                this.canton.embeddedFlag.createFlag();
            }
        }

        // New division test area:
        console.log('Draw fesses!')
        const fesses = new Divisions.Fesses(2, '#3febeb');
        fesses.drawFesses(ctx, 500);


        const saltire = new Divisions.Saltire(true);
        saltire.drawSaltire(ctx);

        const borders = new Divisions.Border(25);
        borders.drawBorder(ctx);

        // This bit here is the original way I was drawin divisions.
        // If we were passed an array of divisions, let's draw them.
        // Before we do, let's try to make the divisions make sense.
        // If there is more than one division, they should be complimentary
        // in both position and color.
        // We might even want to see if there are overlapping divisions
        // and combine them into division patterns like the Union Jack.
        //
        // Ground rules:
        //  - Two Divisions with the same direction
        //      * @TODO: should not overlap
        //      * @TODO: should each have the same width
        //      * @TODO: should have complimentary, contrasting colors to the background
        //  - Two Divisions with different directions
        //      * @TODO: should intersect in the center of the flag
        //      * @TODO: should each have the same width
        // for (let i = 0; i < this.divisions.length; i++) {
        //     console.log('Drawing a division. Index ', i);
        //     this.divisions[i].drawDivision(ctx);
        // }
        
    }
 

}

// Canton
//
// @arg
//   embeddedFlag  - Flag   : a flag object
//   color         - string : a hex color value
//
const Canton = (embeddedFlag, color) => {
    this.embeddedFlag = embeddedFlag ? embeddedFlag : false;
    this.color = color ? color : '#dfdfdf';
}

// Division
//
// @args
//   color      -  string  :  a hex color value
//   direction  -  string  :  ['horizontal', 'vertical', 'diagonal']
//
// class Division {
//     constructor(index, color, colorModifier, direction, offset) {
//         this.index = index;
//         this.color = typeof color !== 'undefined' ? convertHex(color) : convertHex(this.generateColor());
//         this.colorModifier = colorModifier ? colorModifier : 15;
//         this.direction = typeof direction !== 'undefined' ? this.handleDirection(direction) : this.handleDirection();
//         this.offset = offset;
//     }
//     handleDirection(direction) {
//         let generatedDirection, seedDigits, possibleDirections;
//         // Did we get a direction?
//         if (typeof direction !== 'undefined') {
//             if (['horizontal', 'vertical', 'diagonal'].includes(direction)) {
//                 console.log('direction passed to handleDirection is one of our list items.');
//                 generatedDirection = 'horizontal'; // @TODO
//             } else {
//                 console.log('direction passed to handleDirection is not in our list.');
//                 generatedDirection = 'horizontal'; // @TODO
//             }
//         }
//         // If we didn't get a direction, let's set one randomly.
//         // We'll take the seed and generate a three-way choice using the last 3 digits of the seed:
//         else {
//             console.log('We didn\'t get a division! Now generating a direction for a Division...');
//             // let possibleDirections = { 0: false, 1: false, 2: false };
//
//             // Generate digits.
//             seedDigits = this.generateDigits();
//             // Process the digits into 3 boolean values, only one of which will be true.
//             possibleDirections = this.processDigits(seedDigits);
//             // Get a direction string based on which of the boolean values above was true.
//             generatedDirection = this.processPossibleDirections(possibleDirections, 1);
//             console.log('Now we have a direction for this division: ', generatedDirection);
//         }
//         return generatedDirection;
//     }
//     // generateDigits()
//     //
//     // - Returns an array of 3 digits based on the global Seed.
//     //
//     generateDigits() {
//         let seedDigits;
//         // Take the seed and give it some math action to change it up by a static value.
//         // We can't use something truly random or we'll never be able to reproduce this
//         // same output using the same seed.
//         const modifiedSeed = 10 - (settings.seed * this.index + 1.5); // This is just some random math on the seed.
//         console.log('Modified seed:', modifiedSeed);
//         seedDigits = +(modifiedSeed.toString().substr(-3)) ;
//         seedDigits = ("" + seedDigits).split("");
//         return seedDigits;
//     }
//     // processDigits
//     //
//     // - Takes an array of digits and runs some modifying math on each one, then
//     //   rounds the digit to either 1 or 0. If none of the digits are rounded to 1,
//     //   the function does a followup addition to each digit and re-runs itself with
//     //   the newly summed digits.
//     //
//     // - Returns an object of boolean values.
//     //
//     processDigits(digits) {
//         let outputSet = {0: false, 1: false, 2: false};
//         for (let i = 0; i < digits.length; i++) {
//             const processedDigit = Math.round((+digits[i]) / 10); // More random modifications to values off the seed digits.
//             console.log('processed Digit: ', processedDigit);
//             if (processedDigit >= 1) {
//                 outputSet[i] = true;
//                 break;
//             }
//         }
//         // If after all of that we don't have a single true value, let's try again.
//         if (!Object.values(outputSet).includes(true)) {
//             console.log('Not a single true value! Try again!');
//             let newDigits = [];
//             // Bump each digit by one.
//             for (let i = 0; i < digits.length; i++) {
//                 newDigits.push(+digits[i] + 1);
//             }
//             // Rerun this function we're in to try again.
//             this.processDigits(newDigits);
//         }
//
//         console.log('outputset: ', outputSet);
//
//         return outputSet;
//     }
//     // processPossibleDirections
//     //
//     // - Takes an object of boolean values.
//     // - Returns one of the following strings: 'horizontal', 'vertical', 'diagonal'.
//     //
//     processPossibleDirections(options) {
//         // Now let's loop over the options object and see if each key is
//         // true or not. If it's true, we'll map it to one of the direction strings.
//         //
//         // Because of how the processDigits() function works, one of the options will
//         // always be true. If that function isn't used to generate the options, this
//         // function will return undefined.
//         let directionString;
//         let unfinished = true;
//         // Throw the option values into an array for better looping.
//         const optionsArray = Object.values(options);
//         // Check that we are not finished. Possibly unnecessary.
//         // @TODO: Check if this condition is necessary.
//         if (Boolean(unfinished) === true) {
//             // Loop over each option value.
//             for (let i = 0; i < optionsArray.length; i++) {
//                 // If the current loop index of the optionsArray has a value of true:
//                 if (Boolean(options[i]) === true) {
//                     switch(i) {
//                         case 0:
//                             directionString = 'horizontal';
//                             unfinished = false;
//                             break;
//                         case 1:
//                             directionString = 'vertical';
//                             unfinished = false;
//                             break;
//                         case 2:
//                             directionString = 'diagonal';
//                             unfinished = false;
//                             break;
//                     }
//
//                 }
//                 // The current Loop index is not true
//                 if (Boolean(unfinished) === false) {
//                     console.log('Exiting For loop because `unfinished` is false now.');
//                     break;
//                 }
//             }
//         }
//         return directionString;
//     }
//     // generateColor()
//     //
//     // - Returns a value from randomHex() using the current seed and a modifier based
//     //   on the current Division's index.
//     //
//     generateColor() {
//         const modifier = this.index;
//         console.log('Generating a new hex for the division: ', randomHex(settings.seed, modifier));
//         return randomHex(settings.seed, modifier);
//     }
//     // drawDivision()
//     //
//     // - Returns canvas instructions for the division.
//     //
//     drawDivision(ctx) {
//         let xpos;
//         let xpos2;
//         let ypos;
//         let ypos2;
//         let w;
//         let h;
//         ctx.fillStyle = this.color;
//
//
//         console.log('drawin the division with this direction: ', this.direction);
//         switch (this.direction) {
//             case 'horizontal':
//                 // Start at the left. This one's easy.
//                 xpos = 0;
//                 // Horizontally position the division in the center of the flag with a 3rd of the flag height
//                 //         half flag      half of the division height
//                 // ypos: (flag height / 2) - ((flag height / 3) / 2)
//                 ypos = (300 / 2) - ((300 / 3) / 2);
//                 // A third of the flag width wide.
//                 w = 500;
//                 // The full height of the flag.
//                 h = 300 / 3;
//                 ctx.fillRect(xpos, ypos, w, h);
//                 break;
//             case 'vertical':
//                 // Vertically position the division in the center of the flag with a 3rd of the flag width
//                 //         half flag      half of the division width
//                 // xpos: (flag width / 2) - ((flag width / 3) / 2)
//                 xpos = (500 / 2) - ((500 / 3) / 2);
//                 // Start at the top. This one's easy.
//                 ypos = 0;
//                 // A third of the flag width wide.
//                 w = 500 / 3;
//                 // The full height of the flag.
//                 h = 300;
//                 ctx.fillRect(xpos, ypos, w, h);
//                 break;
//             case 'diagonal':
//                 xpos = 0;
//                 ypos = 0;
//                 xpos2 = 500;
//                 ypos2 = 300;
//                 w = (500 + 300) / 2;
//                 h = (500 + 300) / 2;
//
//                 ctx.beginPath();
//                 ctx.moveTo(xpos, ypos);
//                 ctx.lineTo(xpos2, ypos2);
//                 ctx.lineWidth = (500 - 300) * .5;
//                 ctx.strokeStyle = this.color;
//                 ctx.stroke();
//
//                 break;
//         }
//     }
// }

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



    console.log('Generating a flag');
    console.log('Here are the global settings: ', settings);
    let newFlag = new Flag(seededColor, false, divisions);
    newFlag.createFlag();

}




export default {settings, Utilities, flagGenerator};
