(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("FlagGen", [], factory);
	else if(typeof exports === 'object')
		exports["FlagGen"] = factory();
	else
		root["FlagGen"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/divisions.js":
/*!**************************!*\
  !*** ./src/divisions.js ***!
  \**************************/
/*! namespace exports */
/*! export Fesses [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fesses": () => /* binding */ Fesses
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Fesses = /*#__PURE__*/function () {
  function Fesses(fessCount, seedColor) {
    _classCallCheck(this, Fesses);

    this.fessCount = fessCount;
    this.seedColor = seedColor;
  }

  _createClass(Fesses, [{
    key: "drawFesses",
    value: function drawFesses(ctx, containerWidth, gapPercentage) {
      // temp
      containerWidth = 500; // How many fesses should we draw?

      var fessCount = this.fessCount; // What percentage of the whole WIDTH should each fess take up?

      var fessWidthPercentage = 100 / fessCount / 100; // How wide is each fess in relation to the container?

      var fessWidth = fessWidthPercentage * containerWidth; // How much space between each fess?

      var fessGap = containerWidth - fessWidth * fessCount; // Modify things a bit if we're given a gapPercentage.

      var gapWidth;
      var numGaps;

      if (gapPercentage) {
        numGaps = fessCount * 2;
        gapPercentage = gapPercentage / 100;
        console.log('gap percentage: ', gapPercentage);
        console.log('fess width percentage', fessWidthPercentage);
        var newFessWidthPercentage = fessWidthPercentage - gapPercentage;
        console.log('NEW fessWidthPercentage', newFessWidthPercentage);
        fessWidth = newFessWidthPercentage * containerWidth;
        gapWidth = containerWidth * gapPercentage;
        console.log(gapWidth * numGaps + fessWidth * fessCount);
        console.log('gap width', gapWidth); // fessWidth = fessWidth - gapWidth;

        var newWidths = (fessWidthPercentage - gapPercentage / 100) / 100;
        console.log(newWidths);
        fessGap = containerWidth - fessWidth * fessCount;
      }

      console.log('fess count', fessCount);
      console.log('fess width', fessWidth);
      console.log('fess gap', fessGap); // Figure out x/y coordinates for each fess

      var incrementXpos = 0; //incrementXpos = gapWidth / 2;

      for (var i = 0; i < fessCount; i++) {
        ctx.fillStyle = (0,_index__WEBPACK_IMPORTED_MODULE_0__.randomHex)(_index__WEBPACK_IMPORTED_MODULE_0__.settings.seed, i + 2);
        var ypos = 0; // start at the top always

        var xpos = incrementXpos;
        var w = fessWidth;
        var h = 300;
        console.log('xpos', xpos);
        console.log('ypos', ypos);
        console.log('w', w);
        console.log('h', h);
        console.log('Iteration: ', i);

        if (i !== fessCount - 1) {
          incrementXpos = incrementXpos + fessGap / fessCount + fessWidth; // incrementXpos = incrementXpos + (gapWidth) + fessWidth;
        } else {
          console.log('This is the last one');
        }

        ctx.fillRect(xpos, ypos, w, h);
      }
    }
  }]);

  return Fesses;
}();

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! export convertHex [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export default [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export hexToRgb [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export makeSVG [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export randomHex [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export settings [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "settings": () => /* binding */ settings,
/* harmony export */   "randomHex": () => /* binding */ randomHex,
/* harmony export */   "hexToRgb": () => /* binding */ hexToRgb,
/* harmony export */   "convertHex": () => /* binding */ convertHex,
/* harmony export */   "makeSVG": () => /* binding */ makeSVG,
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _divisions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./divisions */ "./src/divisions.js");
/* harmony import */ var seedrandom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! seedrandom */ "./node_modules/seedrandom/index.js");
/* harmony import */ var seedrandom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(seedrandom__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

 // Ideas:
//   - Take the flag width and height and divide it into 9 parts (rule of 3rds). Process each of the 9 parts individually for color
//     After than use the 4 intersections to add more complexity.
//
//   - Instead of doing Divisions the way I am now, instead create division templates and choose from them randomly:
//      * Fesses3         - 3 vertical lines
//      * Fesses2         - 2 vertical lines
//      * Pales3          - 3 horizontal lines. I guess the American flag is Pales13 and Canton put together.
//      * Pales2          - 2 horizontal lines
//      * Canton          - A canton
//      * centerShape     - a shape in the center of the flag
//      * Bends           - Diagonal from top-right to bottom-left
//                          This one would have variations for Sinister and Dexter
//      * Chevron         - A triangle coming off the left side of the flag to the center or slightly less
//                          This one would have variations for Sinister/Dexter/Top/Bottom I guess
//      * Saltire         - An X shape in the center
//      * Pall            - A Y shape: Sinister/Dexter/Top/Bottom
//      * NordicCross     - A cross with the vertical bar shifted to the left: option to have the asymmetrical vert bar on the right
//      * SymmetricCross  - A full width/height centered cross
//      * GreekCross      - A smaller centered cross, maybe this is the same as center shape? See switzerlan
//      * Quarterly       - 4 equal squares
//      * Border          - A border around a flag
//      * Lozenge         - Diamond with points touching borders
//      * Fusil           - Same as Lozenge, but only the top points touch the border
//     Expanding on this idea, we should be able to apply patterns if we want to the divisions themselves, looking to
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


var settings = {
  seed: false
}; // Generate a pseudo-random hex color based on a given seed.
//
// @args
//   seed  -  float : a float below 0;
// 

function randomHex(seed, modifier) {
  modifier = typeof modifier !== 'undefined' ? modifier : 15;
  return '#' + (seed * modifier % 1 * 0xFFFFFF << 0).toString(16).padStart(6, '0');
} // Take a hex value and turn it into an RGB object.

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
} // Take a hex value and output it as an RGB string.

var convertHex = function convertHex(hex) {
  // var convertHex = function(hex) {
  var rgbObject = hexToRgb(hex);
  return 'rgb(' + rgbObject.r + ', ' + rgbObject.g + ', ' + rgbObject.b + ')';
}; // Example SVG function.

var makeSVG = function makeSVG() {
  console.log('Make an SVG.');
  var svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg1.setAttribute("width", "400");
  svg1.setAttribute("height", "400");
  svg1.setAttribute("viewBox", "0 0 800 300");
  var cir1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  cir1.setAttribute("cx", 50);
  cir1.setAttribute("cy", 50);
  cir1.setAttribute("r", 50);
  svg1.appendChild(cir1);
  return svg1;
}; // Prototypes / Classes
// --------------------------------------------------------------------------------------------------------------
// Flag
//
// @args
//   baseColor - string : a hex color value
//   canton    - Canton : a Canton object
//   divisions - array  : an array of Division objects
//
//const Flag = (baseColor, canton, divisions) => {
//}

var Flag = /*#__PURE__*/function () {
  function Flag(baseColor, canton, divisions) {
    _classCallCheck(this, Flag);

    this.baseColor = baseColor ? convertHex(baseColor) : convertHex('#cfcfcf');
    this.canton = typeof canton != 'undefined' ? canton : false;
    this.divisions = typeof divisions != 'undefined' ? divisions : false;
  }

  _createClass(Flag, [{
    key: "createFlag",
    value: function createFlag() {
      // Create a canvas to draw on:
      var canvas = document.createElement('canvas');
      canvas.setAttribute('id', 'flagCanvas');
      canvas.setAttribute('style', 'border: 1px solid black;');
      canvas.setAttribute('width', '500');
      canvas.setAttribute('height', '300');
      document.body.appendChild(canvas); // Prepare for drawing

      var ctx = canvas.getContext('2d');
      ctx.fillStyle = this.baseColor;
      ctx.fillRect(0, 0, 500, 300); // If we were passed a Canton, let's draw it:

      if (typeof this.canton !== 'undefined') {
        ctx.fillStyle = this.canton.color;
        ctx.fillRect(0, 0, 500 / 2, 300 / 2); // If we have an embeddedFlag to use as a canton, let's do that:

        if (typeof this.canton.embeddedFlag !== 'undefined') {
          this.canton.embeddedFlag.createFlag();
        }
      } // New division test area:


      console.log('Draw fesses!');
      var fesses = new _divisions__WEBPACK_IMPORTED_MODULE_0__.Fesses(3, '#3febeb');
      fesses.drawFesses(ctx, 500); // This bit here is the original way I was drawin divisions.
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
  }]);

  return Flag;
}(); // Canton
//
// @arg
//   embeddedFlag  - Flag   : a flag object
//   color         - string : a hex color value
//


var Canton = function Canton(embeddedFlag, color) {
  _this.embeddedFlag = embeddedFlag ? embeddedFlag : false;
  _this.color = color ? color : '#dfdfdf';
}; // Division
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


var generateSeed = function generateSeed(seedString) {
  var seed = typeof seedString !== 'undefined' ? seedrandom__WEBPACK_IMPORTED_MODULE_1___default()(seedString, {
    state: true
  }) : seedrandom__WEBPACK_IMPORTED_MODULE_1___default()(Math.floor(Math.random() * 1e9).toString(), {
    state: true
  });
  console.log('generating a seed value to base everything on: ', seed());
  settings.seed = seed();
};

var flagGenerator = function flagGenerator(seed, subFlag) {
  console.log('Running the Flag Generator...');
  console.log('Seed received by flagGenerator(): ', seed); // Placeholders:

  var divisions = []; // If we have no seed, go get one:
  // seed = typeof seed != 'undefined' ? seed : generateSeed();

  seed = settings.seed !== false ? seed : typeof seed !== 'undefined' ? seed : generateSeed(); // Generate our flag's base color:

  var seededColor = randomHex(seed);
  console.log('Seeded color: ', seededColor); // Decide if there should be any divisions:
  //
  // We'll use the seed to generate a binary value to decide whether or not we want any divisions at all.

  var divisionChoice = Math.round(seed);
  console.log('Do we want any division(s)? ', divisionChoice ? 'yes' : 'no'); // If we do want some number of divisions, we'll figure out how many by using the seed's last digit.

  if (divisionChoice) {// const divisionCount = +(seed.toString().slice(-1))
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
  var newFlag = new Flag(seededColor, false, divisions);
  newFlag.createFlag();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  settings: settings,
  generateSeed: generateSeed,
  flagGenerator: flagGenerator
});

/***/ }),

/***/ "./node_modules/seedrandom/index.js":
/*!******************************************!*\
  !*** ./node_modules/seedrandom/index.js ***!
  \******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// A library of seedable RNGs implemented in Javascript.
//
// Usage:
//
// var seedrandom = require('seedrandom');
// var random = seedrandom(1); // or any seed.
// var x = random();       // 0 <= x < 1.  Every bit is random.
// var x = random.quick(); // 0 <= x < 1.  32 bits of randomness.

// alea, a 53-bit multiply-with-carry generator by Johannes Baagøe.
// Period: ~2^116
// Reported to pass all BigCrush tests.
var alea = __webpack_require__(/*! ./lib/alea */ "./node_modules/seedrandom/lib/alea.js");

// xor128, a pure xor-shift generator by George Marsaglia.
// Period: 2^128-1.
// Reported to fail: MatrixRank and LinearComp.
var xor128 = __webpack_require__(/*! ./lib/xor128 */ "./node_modules/seedrandom/lib/xor128.js");

// xorwow, George Marsaglia's 160-bit xor-shift combined plus weyl.
// Period: 2^192-2^32
// Reported to fail: CollisionOver, SimpPoker, and LinearComp.
var xorwow = __webpack_require__(/*! ./lib/xorwow */ "./node_modules/seedrandom/lib/xorwow.js");

// xorshift7, by François Panneton and Pierre L'ecuyer, takes
// a different approach: it adds robustness by allowing more shifts
// than Marsaglia's original three.  It is a 7-shift generator
// with 256 bits, that passes BigCrush with no systmatic failures.
// Period 2^256-1.
// No systematic BigCrush failures reported.
var xorshift7 = __webpack_require__(/*! ./lib/xorshift7 */ "./node_modules/seedrandom/lib/xorshift7.js");

// xor4096, by Richard Brent, is a 4096-bit xor-shift with a
// very long period that also adds a Weyl generator. It also passes
// BigCrush with no systematic failures.  Its long period may
// be useful if you have many generators and need to avoid
// collisions.
// Period: 2^4128-2^32.
// No systematic BigCrush failures reported.
var xor4096 = __webpack_require__(/*! ./lib/xor4096 */ "./node_modules/seedrandom/lib/xor4096.js");

// Tyche-i, by Samuel Neves and Filipe Araujo, is a bit-shifting random
// number generator derived from ChaCha, a modern stream cipher.
// https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf
// Period: ~2^127
// No systematic BigCrush failures reported.
var tychei = __webpack_require__(/*! ./lib/tychei */ "./node_modules/seedrandom/lib/tychei.js");

// The original ARC4-based prng included in this library.
// Period: ~2^1600
var sr = __webpack_require__(/*! ./seedrandom */ "./node_modules/seedrandom/seedrandom.js");

sr.alea = alea;
sr.xor128 = xor128;
sr.xorwow = xorwow;
sr.xorshift7 = xorshift7;
sr.xor4096 = xor4096;
sr.tychei = tychei;

module.exports = sr;


/***/ }),

/***/ "./node_modules/seedrandom/lib/alea.js":
/*!*********************************************!*\
  !*** ./node_modules/seedrandom/lib/alea.js ***!
  \*********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, module.loaded, module.id, module, __webpack_require__.nmd, __webpack_require__.amdD, __webpack_require__.amdO, __webpack_require__, __webpack_exports__, __webpack_require__.* */
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;// A port of an algorithm by Johannes Baagøe <baagoe@baagoe.com>, 2010
// http://baagoe.com/en/RandomMusings/javascript/
// https://github.com/nquinlan/better-random-numbers-for-javascript-mirror
// Original work is under MIT license -

// Copyright (C) 2010 by Johannes Baagøe <baagoe@baagoe.org>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.



(function(global, module, define) {

function Alea(seed) {
  var me = this, mash = Mash();

  me.next = function() {
    var t = 2091639 * me.s0 + me.c * 2.3283064365386963e-10; // 2^-32
    me.s0 = me.s1;
    me.s1 = me.s2;
    return me.s2 = t - (me.c = t | 0);
  };

  // Apply the seeding algorithm from Baagoe.
  me.c = 1;
  me.s0 = mash(' ');
  me.s1 = mash(' ');
  me.s2 = mash(' ');
  me.s0 -= mash(seed);
  if (me.s0 < 0) { me.s0 += 1; }
  me.s1 -= mash(seed);
  if (me.s1 < 0) { me.s1 += 1; }
  me.s2 -= mash(seed);
  if (me.s2 < 0) { me.s2 += 1; }
  mash = null;
}

function copy(f, t) {
  t.c = f.c;
  t.s0 = f.s0;
  t.s1 = f.s1;
  t.s2 = f.s2;
  return t;
}

function impl(seed, opts) {
  var xg = new Alea(seed),
      state = opts && opts.state,
      prng = xg.next;
  prng.int32 = function() { return (xg.next() * 0x100000000) | 0; }
  prng.double = function() {
    return prng() + (prng() * 0x200000 | 0) * 1.1102230246251565e-16; // 2^-53
  };
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

function Mash() {
  var n = 0xefc8249d;

  var mash = function(data) {
    data = String(data);
    for (var i = 0; i < data.length; i++) {
      n += data.charCodeAt(i);
      var h = 0.02519603282416938 * n;
      n = h >>> 0;
      h -= n;
      h *= n;
      n = h >>> 0;
      h -= n;
      n += h * 0x100000000; // 2^32
    }
    return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
  };

  return mash;
}


if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__.amdD && __webpack_require__.amdO) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.alea = impl;
}

})(
  this,
   true && module,    // present in node.js
  __webpack_require__.amdD   // present with an AMD loader
);




/***/ }),

/***/ "./node_modules/seedrandom/lib/tychei.js":
/*!***********************************************!*\
  !*** ./node_modules/seedrandom/lib/tychei.js ***!
  \***********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, module.loaded, module.id, module, __webpack_require__.nmd, __webpack_require__.amdD, __webpack_require__.amdO, __webpack_require__, __webpack_exports__, __webpack_require__.* */
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "Tyche-i" prng algorithm by
// Samuel Neves and Filipe Araujo.
// See https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf

(function(global, module, define) {

function XorGen(seed) {
  var me = this, strseed = '';

  // Set up generator function.
  me.next = function() {
    var b = me.b, c = me.c, d = me.d, a = me.a;
    b = (b << 25) ^ (b >>> 7) ^ c;
    c = (c - d) | 0;
    d = (d << 24) ^ (d >>> 8) ^ a;
    a = (a - b) | 0;
    me.b = b = (b << 20) ^ (b >>> 12) ^ c;
    me.c = c = (c - d) | 0;
    me.d = (d << 16) ^ (c >>> 16) ^ a;
    return me.a = (a - b) | 0;
  };

  /* The following is non-inverted tyche, which has better internal
   * bit diffusion, but which is about 25% slower than tyche-i in JS.
  me.next = function() {
    var a = me.a, b = me.b, c = me.c, d = me.d;
    a = (me.a + me.b | 0) >>> 0;
    d = me.d ^ a; d = d << 16 ^ d >>> 16;
    c = me.c + d | 0;
    b = me.b ^ c; b = b << 12 ^ d >>> 20;
    me.a = a = a + b | 0;
    d = d ^ a; me.d = d = d << 8 ^ d >>> 24;
    me.c = c = c + d | 0;
    b = b ^ c;
    return me.b = (b << 7 ^ b >>> 25);
  }
  */

  me.a = 0;
  me.b = 0;
  me.c = 2654435769 | 0;
  me.d = 1367130551;

  if (seed === Math.floor(seed)) {
    // Integer seed.
    me.a = (seed / 0x100000000) | 0;
    me.b = seed | 0;
  } else {
    // String seed.
    strseed += seed;
  }

  // Mix in string seed, then discard an initial batch of 64 values.
  for (var k = 0; k < strseed.length + 20; k++) {
    me.b ^= strseed.charCodeAt(k) | 0;
    me.next();
  }
}

function copy(f, t) {
  t.a = f.a;
  t.b = f.b;
  t.c = f.c;
  t.d = f.d;
  return t;
};

function impl(seed, opts) {
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__.amdD && __webpack_require__.amdO) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.tychei = impl;
}

})(
  this,
   true && module,    // present in node.js
  __webpack_require__.amdD   // present with an AMD loader
);




/***/ }),

/***/ "./node_modules/seedrandom/lib/xor128.js":
/*!***********************************************!*\
  !*** ./node_modules/seedrandom/lib/xor128.js ***!
  \***********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, module.loaded, module.id, module, __webpack_require__.nmd, __webpack_require__.amdD, __webpack_require__.amdO, __webpack_require__, __webpack_exports__, __webpack_require__.* */
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "xor128" prng algorithm by
// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper

(function(global, module, define) {

function XorGen(seed) {
  var me = this, strseed = '';

  me.x = 0;
  me.y = 0;
  me.z = 0;
  me.w = 0;

  // Set up generator function.
  me.next = function() {
    var t = me.x ^ (me.x << 11);
    me.x = me.y;
    me.y = me.z;
    me.z = me.w;
    return me.w ^= (me.w >>> 19) ^ t ^ (t >>> 8);
  };

  if (seed === (seed | 0)) {
    // Integer seed.
    me.x = seed;
  } else {
    // String seed.
    strseed += seed;
  }

  // Mix in string seed, then discard an initial batch of 64 values.
  for (var k = 0; k < strseed.length + 64; k++) {
    me.x ^= strseed.charCodeAt(k) | 0;
    me.next();
  }
}

function copy(f, t) {
  t.x = f.x;
  t.y = f.y;
  t.z = f.z;
  t.w = f.w;
  return t;
}

function impl(seed, opts) {
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__.amdD && __webpack_require__.amdO) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xor128 = impl;
}

})(
  this,
   true && module,    // present in node.js
  __webpack_require__.amdD   // present with an AMD loader
);




/***/ }),

/***/ "./node_modules/seedrandom/lib/xor4096.js":
/*!************************************************!*\
  !*** ./node_modules/seedrandom/lib/xor4096.js ***!
  \************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, module.loaded, module.id, module, __webpack_require__.nmd, __webpack_require__.amdD, __webpack_require__.amdO, __webpack_require__, __webpack_exports__, __webpack_require__.* */
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of Richard Brent's Xorgens xor4096 algorithm.
//
// This fast non-cryptographic random number generator is designed for
// use in Monte-Carlo algorithms. It combines a long-period xorshift
// generator with a Weyl generator, and it passes all common batteries
// of stasticial tests for randomness while consuming only a few nanoseconds
// for each prng generated.  For background on the generator, see Brent's
// paper: "Some long-period random number generators using shifts and xors."
// http://arxiv.org/pdf/1004.3115v1.pdf
//
// Usage:
//
// var xor4096 = require('xor4096');
// random = xor4096(1);                        // Seed with int32 or string.
// assert.equal(random(), 0.1520436450538547); // (0, 1) range, 53 bits.
// assert.equal(random.int32(), 1806534897);   // signed int32, 32 bits.
//
// For nonzero numeric keys, this impelementation provides a sequence
// identical to that by Brent's xorgens 3 implementaion in C.  This
// implementation also provides for initalizing the generator with
// string seeds, or for saving and restoring the state of the generator.
//
// On Chrome, this prng benchmarks about 2.1 times slower than
// Javascript's built-in Math.random().

(function(global, module, define) {

function XorGen(seed) {
  var me = this;

  // Set up generator function.
  me.next = function() {
    var w = me.w,
        X = me.X, i = me.i, t, v;
    // Update Weyl generator.
    me.w = w = (w + 0x61c88647) | 0;
    // Update xor generator.
    v = X[(i + 34) & 127];
    t = X[i = ((i + 1) & 127)];
    v ^= v << 13;
    t ^= t << 17;
    v ^= v >>> 15;
    t ^= t >>> 12;
    // Update Xor generator array state.
    v = X[i] = v ^ t;
    me.i = i;
    // Result is the combination.
    return (v + (w ^ (w >>> 16))) | 0;
  };

  function init(me, seed) {
    var t, v, i, j, w, X = [], limit = 128;
    if (seed === (seed | 0)) {
      // Numeric seeds initialize v, which is used to generates X.
      v = seed;
      seed = null;
    } else {
      // String seeds are mixed into v and X one character at a time.
      seed = seed + '\0';
      v = 0;
      limit = Math.max(limit, seed.length);
    }
    // Initialize circular array and weyl value.
    for (i = 0, j = -32; j < limit; ++j) {
      // Put the unicode characters into the array, and shuffle them.
      if (seed) v ^= seed.charCodeAt((j + 32) % seed.length);
      // After 32 shuffles, take v as the starting w value.
      if (j === 0) w = v;
      v ^= v << 10;
      v ^= v >>> 15;
      v ^= v << 4;
      v ^= v >>> 13;
      if (j >= 0) {
        w = (w + 0x61c88647) | 0;     // Weyl.
        t = (X[j & 127] ^= (v + w));  // Combine xor and weyl to init array.
        i = (0 == t) ? i + 1 : 0;     // Count zeroes.
      }
    }
    // We have detected all zeroes; make the key nonzero.
    if (i >= 128) {
      X[(seed && seed.length || 0) & 127] = -1;
    }
    // Run the generator 512 times to further mix the state before using it.
    // Factoring this as a function slows the main generator, so it is just
    // unrolled here.  The weyl generator is not advanced while warming up.
    i = 127;
    for (j = 4 * 128; j > 0; --j) {
      v = X[(i + 34) & 127];
      t = X[i = ((i + 1) & 127)];
      v ^= v << 13;
      t ^= t << 17;
      v ^= v >>> 15;
      t ^= t >>> 12;
      X[i] = v ^ t;
    }
    // Storing state as object members is faster than using closure variables.
    me.w = w;
    me.X = X;
    me.i = i;
  }

  init(me, seed);
}

function copy(f, t) {
  t.i = f.i;
  t.w = f.w;
  t.X = f.X.slice();
  return t;
};

function impl(seed, opts) {
  if (seed == null) seed = +(new Date);
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (state.X) copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__.amdD && __webpack_require__.amdO) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xor4096 = impl;
}

})(
  this,                                     // window object or global
   true && module,    // present in node.js
  __webpack_require__.amdD   // present with an AMD loader
);


/***/ }),

/***/ "./node_modules/seedrandom/lib/xorshift7.js":
/*!**************************************************!*\
  !*** ./node_modules/seedrandom/lib/xorshift7.js ***!
  \**************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, module.loaded, module.id, module, __webpack_require__.nmd, __webpack_require__.amdD, __webpack_require__.amdO, __webpack_require__, __webpack_exports__, __webpack_require__.* */
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "xorshift7" algorithm by
// François Panneton and Pierre L'ecuyer:
// "On the Xorgshift Random Number Generators"
// http://saluc.engr.uconn.edu/refs/crypto/rng/panneton05onthexorshift.pdf

(function(global, module, define) {

function XorGen(seed) {
  var me = this;

  // Set up generator function.
  me.next = function() {
    // Update xor generator.
    var X = me.x, i = me.i, t, v, w;
    t = X[i]; t ^= (t >>> 7); v = t ^ (t << 24);
    t = X[(i + 1) & 7]; v ^= t ^ (t >>> 10);
    t = X[(i + 3) & 7]; v ^= t ^ (t >>> 3);
    t = X[(i + 4) & 7]; v ^= t ^ (t << 7);
    t = X[(i + 7) & 7]; t = t ^ (t << 13); v ^= t ^ (t << 9);
    X[i] = v;
    me.i = (i + 1) & 7;
    return v;
  };

  function init(me, seed) {
    var j, w, X = [];

    if (seed === (seed | 0)) {
      // Seed state array using a 32-bit integer.
      w = X[0] = seed;
    } else {
      // Seed state using a string.
      seed = '' + seed;
      for (j = 0; j < seed.length; ++j) {
        X[j & 7] = (X[j & 7] << 15) ^
            (seed.charCodeAt(j) + X[(j + 1) & 7] << 13);
      }
    }
    // Enforce an array length of 8, not all zeroes.
    while (X.length < 8) X.push(0);
    for (j = 0; j < 8 && X[j] === 0; ++j);
    if (j == 8) w = X[7] = -1; else w = X[j];

    me.x = X;
    me.i = 0;

    // Discard an initial 256 values.
    for (j = 256; j > 0; --j) {
      me.next();
    }
  }

  init(me, seed);
}

function copy(f, t) {
  t.x = f.x.slice();
  t.i = f.i;
  return t;
}

function impl(seed, opts) {
  if (seed == null) seed = +(new Date);
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (state.x) copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__.amdD && __webpack_require__.amdO) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xorshift7 = impl;
}

})(
  this,
   true && module,    // present in node.js
  __webpack_require__.amdD   // present with an AMD loader
);



/***/ }),

/***/ "./node_modules/seedrandom/lib/xorwow.js":
/*!***********************************************!*\
  !*** ./node_modules/seedrandom/lib/xorwow.js ***!
  \***********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, module.loaded, module.id, module, __webpack_require__.nmd, __webpack_require__.amdD, __webpack_require__.amdO, __webpack_require__, __webpack_exports__, __webpack_require__.* */
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "xorwow" prng algorithm by
// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper

(function(global, module, define) {

function XorGen(seed) {
  var me = this, strseed = '';

  // Set up generator function.
  me.next = function() {
    var t = (me.x ^ (me.x >>> 2));
    me.x = me.y; me.y = me.z; me.z = me.w; me.w = me.v;
    return (me.d = (me.d + 362437 | 0)) +
       (me.v = (me.v ^ (me.v << 4)) ^ (t ^ (t << 1))) | 0;
  };

  me.x = 0;
  me.y = 0;
  me.z = 0;
  me.w = 0;
  me.v = 0;

  if (seed === (seed | 0)) {
    // Integer seed.
    me.x = seed;
  } else {
    // String seed.
    strseed += seed;
  }

  // Mix in string seed, then discard an initial batch of 64 values.
  for (var k = 0; k < strseed.length + 64; k++) {
    me.x ^= strseed.charCodeAt(k) | 0;
    if (k == strseed.length) {
      me.d = me.x << 10 ^ me.x >>> 4;
    }
    me.next();
  }
}

function copy(f, t) {
  t.x = f.x;
  t.y = f.y;
  t.z = f.z;
  t.w = f.w;
  t.v = f.v;
  t.d = f.d;
  return t;
}

function impl(seed, opts) {
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__.amdD && __webpack_require__.amdO) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xorwow = impl;
}

})(
  this,
   true && module,    // present in node.js
  __webpack_require__.amdD   // present with an AMD loader
);




/***/ }),

/***/ "./node_modules/seedrandom/seedrandom.js":
/*!***********************************************!*\
  !*** ./node_modules/seedrandom/seedrandom.js ***!
  \***********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, top-level-this-exports, __webpack_require__, __webpack_exports__ */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
Copyright 2019 David Bau.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

(function (global, pool, math) {
//
// The following constants are related to IEEE 754 limits.
//

var width = 256,        // each RC4 output is 0 <= x < 256
    chunks = 6,         // at least six RC4 outputs for each double
    digits = 52,        // there are 52 significant digits in a double
    rngname = 'random', // rngname: name for Math.random and Math.seedrandom
    startdenom = math.pow(width, chunks),
    significance = math.pow(2, digits),
    overflow = significance * 2,
    mask = width - 1,
    nodecrypto;         // node.js crypto module, initialized at the bottom.

//
// seedrandom()
// This is the seedrandom function described above.
//
function seedrandom(seed, options, callback) {
  var key = [];
  options = (options == true) ? { entropy: true } : (options || {});

  // Flatten the seed string or build one from local entropy if needed.
  var shortseed = mixkey(flatten(
    options.entropy ? [seed, tostring(pool)] :
    (seed == null) ? autoseed() : seed, 3), key);

  // Use the seed to initialize an ARC4 generator.
  var arc4 = new ARC4(key);

  // This function returns a random double in [0, 1) that contains
  // randomness in every bit of the mantissa of the IEEE 754 value.
  var prng = function() {
    var n = arc4.g(chunks),             // Start with a numerator n < 2 ^ 48
        d = startdenom,                 //   and denominator d = 2 ^ 48.
        x = 0;                          //   and no 'extra last byte'.
    while (n < significance) {          // Fill up all significant digits by
      n = (n + x) * width;              //   shifting numerator and
      d *= width;                       //   denominator and generating a
      x = arc4.g(1);                    //   new least-significant-byte.
    }
    while (n >= overflow) {             // To avoid rounding up, before adding
      n /= 2;                           //   last byte, shift everything
      d /= 2;                           //   right using integer math until
      x >>>= 1;                         //   we have exactly the desired bits.
    }
    return (n + x) / d;                 // Form the number within [0, 1).
  };

  prng.int32 = function() { return arc4.g(4) | 0; }
  prng.quick = function() { return arc4.g(4) / 0x100000000; }
  prng.double = prng;

  // Mix the randomness into accumulated entropy.
  mixkey(tostring(arc4.S), pool);

  // Calling convention: what to return as a function of prng, seed, is_math.
  return (options.pass || callback ||
      function(prng, seed, is_math_call, state) {
        if (state) {
          // Load the arc4 state from the given state if it has an S array.
          if (state.S) { copy(state, arc4); }
          // Only provide the .state method if requested via options.state.
          prng.state = function() { return copy(arc4, {}); }
        }

        // If called as a method of Math (Math.seedrandom()), mutate
        // Math.random because that is how seedrandom.js has worked since v1.0.
        if (is_math_call) { math[rngname] = prng; return seed; }

        // Otherwise, it is a newer calling convention, so return the
        // prng directly.
        else return prng;
      })(
  prng,
  shortseed,
  'global' in options ? options.global : (this == math),
  options.state);
}

//
// ARC4
//
// An ARC4 implementation.  The constructor takes a key in the form of
// an array of at most (width) integers that should be 0 <= x < (width).
//
// The g(count) method returns a pseudorandom integer that concatenates
// the next (count) outputs from ARC4.  Its return value is a number x
// that is in the range 0 <= x < (width ^ count).
//
function ARC4(key) {
  var t, keylen = key.length,
      me = this, i = 0, j = me.i = me.j = 0, s = me.S = [];

  // The empty key [] is treated as [0].
  if (!keylen) { key = [keylen++]; }

  // Set up S using the standard key scheduling algorithm.
  while (i < width) {
    s[i] = i++;
  }
  for (i = 0; i < width; i++) {
    s[i] = s[j = mask & (j + key[i % keylen] + (t = s[i]))];
    s[j] = t;
  }

  // The "g" method returns the next (count) outputs as one number.
  (me.g = function(count) {
    // Using instance members instead of closure state nearly doubles speed.
    var t, r = 0,
        i = me.i, j = me.j, s = me.S;
    while (count--) {
      t = s[i = mask & (i + 1)];
      r = r * width + s[mask & ((s[i] = s[j = mask & (j + t)]) + (s[j] = t))];
    }
    me.i = i; me.j = j;
    return r;
    // For robust unpredictability, the function call below automatically
    // discards an initial batch of values.  This is called RC4-drop[256].
    // See http://google.com/search?q=rsa+fluhrer+response&btnI
  })(width);
}

//
// copy()
// Copies internal state of ARC4 to or from a plain object.
//
function copy(f, t) {
  t.i = f.i;
  t.j = f.j;
  t.S = f.S.slice();
  return t;
};

//
// flatten()
// Converts an object tree to nested arrays of strings.
//
function flatten(obj, depth) {
  var result = [], typ = (typeof obj), prop;
  if (depth && typ == 'object') {
    for (prop in obj) {
      try { result.push(flatten(obj[prop], depth - 1)); } catch (e) {}
    }
  }
  return (result.length ? result : typ == 'string' ? obj : obj + '\0');
}

//
// mixkey()
// Mixes a string seed into a key that is an array of integers, and
// returns a shortened string seed that is equivalent to the result key.
//
function mixkey(seed, key) {
  var stringseed = seed + '', smear, j = 0;
  while (j < stringseed.length) {
    key[mask & j] =
      mask & ((smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++));
  }
  return tostring(key);
}

//
// autoseed()
// Returns an object for autoseeding, using window.crypto and Node crypto
// module if available.
//
function autoseed() {
  try {
    var out;
    if (nodecrypto && (out = nodecrypto.randomBytes)) {
      // The use of 'out' to remember randomBytes makes tight minified code.
      out = out(width);
    } else {
      out = new Uint8Array(width);
      (global.crypto || global.msCrypto).getRandomValues(out);
    }
    return tostring(out);
  } catch (e) {
    var browser = global.navigator,
        plugins = browser && browser.plugins;
    return [+new Date, global, plugins, global.screen, tostring(pool)];
  }
}

//
// tostring()
// Converts an array of charcodes to a string
//
function tostring(a) {
  return String.fromCharCode.apply(0, a);
}

//
// When seedrandom.js is loaded, we immediately mix a few bits
// from the built-in RNG into the entropy pool.  Because we do
// not want to interfere with deterministic PRNG state later,
// seedrandom will not call math.random on its own again after
// initialization.
//
mixkey(math.random(), pool);

//
// Nodejs and AMD support: export the implementation as a module using
// either convention.
//
if ( true && module.exports) {
  module.exports = seedrandom;
  // When in node.js, try using crypto package for autoseeding.
  try {
    nodecrypto = __webpack_require__(/*! crypto */ "?8465");
  } catch (ex) {}
} else if (true) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return seedrandom; }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {}


// End anonymous scope, and pass initial values.
})(
  // global: `self` in browsers (including strict mode and web workers),
  // otherwise `this` in Node and other environments
  (typeof self !== 'undefined') ? self : this,
  [],     // pool: entropy pool starts empty
  Math    // math: package containing random, pow, and seedrandom
);


/***/ }),

/***/ "?8465":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd define */
/******/ 	(() => {
/******/ 		__webpack_require__.amdD = function () {
/******/ 			throw new Error('define cannot be used indirect');
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.js");
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9GbGFnR2VuL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9GbGFnR2VuLy4vc3JjL2RpdmlzaW9ucy5qcyIsIndlYnBhY2s6Ly9GbGFnR2VuLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0ZsYWdHZW4vLi9ub2RlX21vZHVsZXMvc2VlZHJhbmRvbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9GbGFnR2VuLy4vbm9kZV9tb2R1bGVzL3NlZWRyYW5kb20vbGliL2FsZWEuanMiLCJ3ZWJwYWNrOi8vRmxhZ0dlbi8uL25vZGVfbW9kdWxlcy9zZWVkcmFuZG9tL2xpYi90eWNoZWkuanMiLCJ3ZWJwYWNrOi8vRmxhZ0dlbi8uL25vZGVfbW9kdWxlcy9zZWVkcmFuZG9tL2xpYi94b3IxMjguanMiLCJ3ZWJwYWNrOi8vRmxhZ0dlbi8uL25vZGVfbW9kdWxlcy9zZWVkcmFuZG9tL2xpYi94b3I0MDk2LmpzIiwid2VicGFjazovL0ZsYWdHZW4vLi9ub2RlX21vZHVsZXMvc2VlZHJhbmRvbS9saWIveG9yc2hpZnQ3LmpzIiwid2VicGFjazovL0ZsYWdHZW4vLi9ub2RlX21vZHVsZXMvc2VlZHJhbmRvbS9saWIveG9yd293LmpzIiwid2VicGFjazovL0ZsYWdHZW4vLi9ub2RlX21vZHVsZXMvc2VlZHJhbmRvbS9zZWVkcmFuZG9tLmpzIiwid2VicGFjazovL0ZsYWdHZW4vaWdub3JlZHxjcnlwdG8iLCJ3ZWJwYWNrOi8vRmxhZ0dlbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9GbGFnR2VuL3dlYnBhY2svcnVudGltZS9hbWQgZGVmaW5lIiwid2VicGFjazovL0ZsYWdHZW4vd2VicGFjay9ydW50aW1lL2FtZCBvcHRpb25zIiwid2VicGFjazovL0ZsYWdHZW4vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vRmxhZ0dlbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vRmxhZ0dlbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0ZsYWdHZW4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9GbGFnR2VuL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vRmxhZ0dlbi93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiRmVzc2VzIiwiZmVzc0NvdW50Iiwic2VlZENvbG9yIiwiY3R4IiwiY29udGFpbmVyV2lkdGgiLCJnYXBQZXJjZW50YWdlIiwiZmVzc1dpZHRoUGVyY2VudGFnZSIsImZlc3NXaWR0aCIsImZlc3NHYXAiLCJnYXBXaWR0aCIsIm51bUdhcHMiLCJjb25zb2xlIiwibG9nIiwibmV3RmVzc1dpZHRoUGVyY2VudGFnZSIsIm5ld1dpZHRocyIsImluY3JlbWVudFhwb3MiLCJpIiwiZmlsbFN0eWxlIiwicmFuZG9tSGV4Iiwic2V0dGluZ3MiLCJ5cG9zIiwieHBvcyIsInciLCJoIiwiZmlsbFJlY3QiLCJzZWVkIiwibW9kaWZpZXIiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwiaGV4VG9SZ2IiLCJoZXgiLCJyZXN1bHQiLCJleGVjIiwiciIsInBhcnNlSW50IiwiZyIsImIiLCJjb252ZXJ0SGV4IiwicmdiT2JqZWN0IiwibWFrZVNWRyIsInN2ZzEiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnROUyIsInNldEF0dHJpYnV0ZSIsImNpcjEiLCJhcHBlbmRDaGlsZCIsIkZsYWciLCJiYXNlQ29sb3IiLCJjYW50b24iLCJkaXZpc2lvbnMiLCJjYW52YXMiLCJjcmVhdGVFbGVtZW50IiwiYm9keSIsImdldENvbnRleHQiLCJjb2xvciIsImVtYmVkZGVkRmxhZyIsImNyZWF0ZUZsYWciLCJmZXNzZXMiLCJkcmF3RmVzc2VzIiwiQ2FudG9uIiwiZ2VuZXJhdGVTZWVkIiwic2VlZFN0cmluZyIsInNlZWRyYW5kb20iLCJzdGF0ZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImZsYWdHZW5lcmF0b3IiLCJzdWJGbGFnIiwic2VlZGVkQ29sb3IiLCJkaXZpc2lvbkNob2ljZSIsInJvdW5kIiwibmV3RmxhZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUVPLElBQU1BLE1BQWI7QUFDRyxrQkFBWUMsU0FBWixFQUF1QkMsU0FBdkIsRUFBa0M7QUFBQTs7QUFDL0IsU0FBS0QsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNGOztBQUpKO0FBQUE7QUFBQSwrQkFLY0MsR0FMZCxFQUttQkMsY0FMbkIsRUFLbUNDLGFBTG5DLEVBS2tEO0FBRTNDO0FBQ0FELG9CQUFjLEdBQUcsR0FBakIsQ0FIMkMsQ0FLM0M7O0FBQ0EsVUFBTUgsU0FBUyxHQUFHLEtBQUtBLFNBQXZCLENBTjJDLENBUTNDOztBQUNBLFVBQUlLLG1CQUFtQixHQUFLLE1BQU1MLFNBQVIsR0FBc0IsR0FBaEQsQ0FUMkMsQ0FXM0M7O0FBQ0EsVUFBSU0sU0FBUyxHQUFJRCxtQkFBbUIsR0FBR0YsY0FBdkMsQ0FaMkMsQ0FhM0M7O0FBQ0EsVUFBSUksT0FBTyxHQUFHSixjQUFjLEdBQUlHLFNBQVMsR0FBR04sU0FBNUMsQ0FkMkMsQ0FnQjNDOztBQUNBLFVBQUlRLFFBQUo7QUFDQSxVQUFJQyxPQUFKOztBQUNBLFVBQUlMLGFBQUosRUFBbUI7QUFDZkssZUFBTyxHQUFHVCxTQUFTLEdBQUcsQ0FBdEI7QUFDQUkscUJBQWEsR0FBR0EsYUFBYSxHQUFHLEdBQWhDO0FBQ0FNLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaLEVBQWdDUCxhQUFoQztBQUNBTSxlQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWixFQUFxQ04sbUJBQXJDO0FBQ0EsWUFBSU8s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QUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxJQUFNd0QsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0osWUFBRCxFQUFlRCxLQUFmLEVBQXlCO0FBQ3BDLE9BQUksQ0FBQ0MsWUFBTCxHQUFvQkEsWUFBWSxHQUFHQSxZQUFILEdBQWtCLEtBQWxEO0FBQ0EsT0FBSSxDQUFDRCxLQUFMLEdBQWFBLEtBQUssR0FBR0EsS0FBSCxHQUFXLFNBQTdCO0FBQ0gsQ0FIRCxDLENBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFOzs7O1VDSkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiZmxhZy1nZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkZsYWdHZW5cIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiRmxhZ0dlblwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJGbGFnR2VuXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiaW1wb3J0IHsgc2V0dGluZ3MsIHJhbmRvbUhleCB9IGZyb20gXCIuL2luZGV4XCI7XG5cbmV4cG9ydCBjbGFzcyBGZXNzZXMge1xuICAgY29uc3RydWN0b3IoZmVzc0NvdW50LCBzZWVkQ29sb3IpIHtcbiAgICAgIHRoaXMuZmVzc0NvdW50ID0gZmVzc0NvdW50O1xuICAgICAgdGhpcy5zZWVkQ29sb3IgPSBzZWVkQ29sb3I7XG4gICB9XG4gICBkcmF3RmVzc2VzKGN0eCwgY29udGFpbmVyV2lkdGgsIGdhcFBlcmNlbnRhZ2UpIHtcblxuICAgICAgIC8vIHRlbXBcbiAgICAgICBjb250YWluZXJXaWR0aCA9IDUwMDtcblxuICAgICAgIC8vIEhvdyBtYW55IGZlc3NlcyBzaG91bGQgd2UgZHJhdz9cbiAgICAgICBjb25zdCBmZXNzQ291bnQgPSB0aGlzLmZlc3NDb3VudDtcblxuICAgICAgIC8vIFdoYXQgcGVyY2VudGFnZSBvZiB0aGUgd2hvbGUgV0lEVEggc2hvdWxkIGVhY2ggZmVzcyB0YWtlIHVwP1xuICAgICAgIGxldCBmZXNzV2lkdGhQZXJjZW50YWdlID0gKCgxMDAgLyBmZXNzQ291bnQpKSAvIDEwMDtcblxuICAgICAgIC8vIEhvdyB3aWRlIGlzIGVhY2ggZmVzcyBpbiByZWxhdGlvbiB0byB0aGUgY29udGFpbmVyP1xuICAgICAgIGxldCBmZXNzV2lkdGggPSAoZmVzc1dpZHRoUGVyY2VudGFnZSAqIGNvbnRhaW5lcldpZHRoKTtcbiAgICAgICAvLyBIb3cgbXVjaCBzcGFjZSBiZXR3ZWVuIGVhY2ggZmVzcz9cbiAgICAgICBsZXQgZmVzc0dhcCA9IGNvbnRhaW5lcldpZHRoIC0gKGZlc3NXaWR0aCAqIGZlc3NDb3VudCk7XG5cbiAgICAgICAvLyBNb2RpZnkgdGhpbmdzIGEgYml0IGlmIHdlJ3JlIGdpdmVuIGEgZ2FwUGVyY2VudGFnZS5cbiAgICAgICBsZXQgZ2FwV2lkdGg7XG4gICAgICAgbGV0IG51bUdhcHM7XG4gICAgICAgaWYgKGdhcFBlcmNlbnRhZ2UpIHtcbiAgICAgICAgICAgbnVtR2FwcyA9IGZlc3NDb3VudCAqIDI7XG4gICAgICAgICAgIGdhcFBlcmNlbnRhZ2UgPSBnYXBQZXJjZW50YWdlIC8gMTAwO1xuICAgICAgICAgICBjb25zb2xlLmxvZygnZ2FwIHBlcmNlbnRhZ2U6ICcsIGdhcFBlcmNlbnRhZ2UpO1xuICAgICAgICAgICBjb25zb2xlLmxvZygnZmVzcyB3aWR0aCBwZXJjZW50YWdlJywgZmVzc1dpZHRoUGVyY2VudGFnZSlcbiAgICAgICAgICAgbGV0IG5ld0Zlc3NXaWR0aFBlcmNlbnRhZ2UgPSBmZXNzV2lkdGhQZXJjZW50YWdlIC0gZ2FwUGVyY2VudGFnZTtcbiAgICAgICAgICAgY29uc29sZS5sb2coJ05FVyBmZXNzV2lkdGhQZXJjZW50YWdlJywgbmV3RmVzc1dpZHRoUGVyY2VudGFnZSlcbiAgICAgICAgICAgZmVzc1dpZHRoID0gKG5ld0Zlc3NXaWR0aFBlcmNlbnRhZ2UgKiBjb250YWluZXJXaWR0aCk7XG5cbiAgICAgICAgICAgZ2FwV2lkdGggPSAoY29udGFpbmVyV2lkdGggKiBnYXBQZXJjZW50YWdlKTtcbiAgICAgICAgICAgY29uc29sZS5sb2coKGdhcFdpZHRoICogbnVtR2FwcykgKyAoZmVzc1dpZHRoICogZmVzc0NvdW50KSlcbiAgICAgICAgICAgY29uc29sZS5sb2coJ2dhcCB3aWR0aCcsIGdhcFdpZHRoKVxuICAgICAgICAgICAvLyBmZXNzV2lkdGggPSBmZXNzV2lkdGggLSBnYXBXaWR0aDtcbiAgICAgICAgICAgbGV0IG5ld1dpZHRocyA9IChmZXNzV2lkdGhQZXJjZW50YWdlIC0gKGdhcFBlcmNlbnRhZ2UgLyAxMDApKSAvIDEwMDtcbiAgICAgICAgICAgY29uc29sZS5sb2cobmV3V2lkdGhzKTtcblxuICAgICAgICAgICBmZXNzR2FwID0gY29udGFpbmVyV2lkdGggLSAoZmVzc1dpZHRoICogZmVzc0NvdW50KTtcblxuICAgICAgIH1cbiAgICAgICBjb25zb2xlLmxvZygnZmVzcyBjb3VudCcsIGZlc3NDb3VudClcbiAgICAgICBjb25zb2xlLmxvZygnZmVzcyB3aWR0aCcsIGZlc3NXaWR0aCk7XG4gICAgICAgY29uc29sZS5sb2coJ2Zlc3MgZ2FwJywgZmVzc0dhcCk7XG5cbiAgICAgICAvLyBGaWd1cmUgb3V0IHgveSBjb29yZGluYXRlcyBmb3IgZWFjaCBmZXNzXG4gICAgICAgbGV0IGluY3JlbWVudFhwb3MgPSAwO1xuICAgICAgIC8vaW5jcmVtZW50WHBvcyA9IGdhcFdpZHRoIC8gMjtcbiAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZlc3NDb3VudDsgaSsrKSB7XG4gICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSByYW5kb21IZXgoc2V0dGluZ3Muc2VlZCwgaSArIDIpO1xuICAgICAgICAgICBsZXQgeXBvcyA9IDA7IC8vIHN0YXJ0IGF0IHRoZSB0b3AgYWx3YXlzXG4gICAgICAgICAgIGxldCB4cG9zID0gKGluY3JlbWVudFhwb3MpO1xuICAgICAgICAgICBsZXQgdyA9IGZlc3NXaWR0aDtcbiAgICAgICAgICAgbGV0IGggPSAzMDA7XG4gICAgICAgICAgIGNvbnNvbGUubG9nKCd4cG9zJywgeHBvcylcbiAgICAgICAgICAgY29uc29sZS5sb2coJ3lwb3MnLCB5cG9zKVxuICAgICAgICAgICBjb25zb2xlLmxvZygndycsIHcpXG4gICAgICAgICAgIGNvbnNvbGUubG9nKCdoJywgaClcbiAgICAgICAgICAgY29uc29sZS5sb2coJ0l0ZXJhdGlvbjogJywgaSlcbiAgICAgICAgICAgaWYgKGkgIT09IChmZXNzQ291bnQgLSAxKSkge1xuICAgICAgICAgICAgICAgaW5jcmVtZW50WHBvcyA9IGluY3JlbWVudFhwb3MgKyAoZmVzc0dhcC9mZXNzQ291bnQpICsgZmVzc1dpZHRoO1xuICAgICAgICAgICAgICAgLy8gaW5jcmVtZW50WHBvcyA9IGluY3JlbWVudFhwb3MgKyAoZ2FwV2lkdGgpICsgZmVzc1dpZHRoO1xuICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgaXMgdGhlIGxhc3Qgb25lJylcbiAgICAgICAgICAgfVxuICAgICAgICAgICBjdHguZmlsbFJlY3QoeHBvcywgeXBvcywgdywgaCk7XG4gICAgICAgfVxuXG4gICB9XG59IiwiaW1wb3J0IHsgRmVzc2VzIH0gZnJvbSAnLi9kaXZpc2lvbnMnO1xuXG4vLyBJZGVhczpcbi8vICAgLSBUYWtlIHRoZSBmbGFnIHdpZHRoIGFuZCBoZWlnaHQgYW5kIGRpdmlkZSBpdCBpbnRvIDkgcGFydHMgKHJ1bGUgb2YgM3JkcykuIFByb2Nlc3MgZWFjaCBvZiB0aGUgOSBwYXJ0cyBpbmRpdmlkdWFsbHkgZm9yIGNvbG9yXG4vLyAgICAgQWZ0ZXIgdGhhbiB1c2UgdGhlIDQgaW50ZXJzZWN0aW9ucyB0byBhZGQgbW9yZSBjb21wbGV4aXR5LlxuLy9cbi8vICAgLSBJbnN0ZWFkIG9mIGRvaW5nIERpdmlzaW9ucyB0aGUgd2F5IEkgYW0gbm93LCBpbnN0ZWFkIGNyZWF0ZSBkaXZpc2lvbiB0ZW1wbGF0ZXMgYW5kIGNob29zZSBmcm9tIHRoZW0gcmFuZG9tbHk6XG4vLyAgICAgICogRmVzc2VzMyAgICAgICAgIC0gMyB2ZXJ0aWNhbCBsaW5lc1xuLy8gICAgICAqIEZlc3NlczIgICAgICAgICAtIDIgdmVydGljYWwgbGluZXNcbi8vICAgICAgKiBQYWxlczMgICAgICAgICAgLSAzIGhvcml6b250YWwgbGluZXMuIEkgZ3Vlc3MgdGhlIEFtZXJpY2FuIGZsYWcgaXMgUGFsZXMxMyBhbmQgQ2FudG9uIHB1dCB0b2dldGhlci5cbi8vICAgICAgKiBQYWxlczIgICAgICAgICAgLSAyIGhvcml6b250YWwgbGluZXNcbi8vICAgICAgKiBDYW50b24gICAgICAgICAgLSBBIGNhbnRvblxuLy8gICAgICAqIGNlbnRlclNoYXBlICAgICAtIGEgc2hhcGUgaW4gdGhlIGNlbnRlciBvZiB0aGUgZmxhZ1xuLy8gICAgICAqIEJlbmRzICAgICAgICAgICAtIERpYWdvbmFsIGZyb20gdG9wLXJpZ2h0IHRvIGJvdHRvbS1sZWZ0XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBvbmUgd291bGQgaGF2ZSB2YXJpYXRpb25zIGZvciBTaW5pc3RlciBhbmQgRGV4dGVyXG4vLyAgICAgICogQ2hldnJvbiAgICAgICAgIC0gQSB0cmlhbmdsZSBjb21pbmcgb2ZmIHRoZSBsZWZ0IHNpZGUgb2YgdGhlIGZsYWcgdG8gdGhlIGNlbnRlciBvciBzbGlnaHRseSBsZXNzXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBvbmUgd291bGQgaGF2ZSB2YXJpYXRpb25zIGZvciBTaW5pc3Rlci9EZXh0ZXIvVG9wL0JvdHRvbSBJIGd1ZXNzXG4vLyAgICAgICogU2FsdGlyZSAgICAgICAgIC0gQW4gWCBzaGFwZSBpbiB0aGUgY2VudGVyXG4vLyAgICAgICogUGFsbCAgICAgICAgICAgIC0gQSBZIHNoYXBlOiBTaW5pc3Rlci9EZXh0ZXIvVG9wL0JvdHRvbVxuLy8gICAgICAqIE5vcmRpY0Nyb3NzICAgICAtIEEgY3Jvc3Mgd2l0aCB0aGUgdmVydGljYWwgYmFyIHNoaWZ0ZWQgdG8gdGhlIGxlZnQ6IG9wdGlvbiB0byBoYXZlIHRoZSBhc3ltbWV0cmljYWwgdmVydCBiYXIgb24gdGhlIHJpZ2h0XG4vLyAgICAgICogU3ltbWV0cmljQ3Jvc3MgIC0gQSBmdWxsIHdpZHRoL2hlaWdodCBjZW50ZXJlZCBjcm9zc1xuLy8gICAgICAqIEdyZWVrQ3Jvc3MgICAgICAtIEEgc21hbGxlciBjZW50ZXJlZCBjcm9zcywgbWF5YmUgdGhpcyBpcyB0aGUgc2FtZSBhcyBjZW50ZXIgc2hhcGU/IFNlZSBzd2l0emVybGFuXG4vLyAgICAgICogUXVhcnRlcmx5ICAgICAgIC0gNCBlcXVhbCBzcXVhcmVzXG4vLyAgICAgICogQm9yZGVyICAgICAgICAgIC0gQSBib3JkZXIgYXJvdW5kIGEgZmxhZ1xuLy8gICAgICAqIExvemVuZ2UgICAgICAgICAtIERpYW1vbmQgd2l0aCBwb2ludHMgdG91Y2hpbmcgYm9yZGVyc1xuLy8gICAgICAqIEZ1c2lsICAgICAgICAgICAtIFNhbWUgYXMgTG96ZW5nZSwgYnV0IG9ubHkgdGhlIHRvcCBwb2ludHMgdG91Y2ggdGhlIGJvcmRlclxuLy8gICAgIEV4cGFuZGluZyBvbiB0aGlzIGlkZWEsIHdlIHNob3VsZCBiZSBhYmxlIHRvIGFwcGx5IHBhdHRlcm5zIGlmIHdlIHdhbnQgdG8gdGhlIGRpdmlzaW9ucyB0aGVtc2VsdmVzLCBsb29raW5nIHRvXG4vLyAgICAgaGVyYWxkcnkgZGVzaWducyBmb3IgaW5zcGlyYXRpb246XG4vLyAgICAgICogUGFseSBiZW5keVxuLy8gICAgICAqIExvemVuZ3kgIC0gZGlhbW9uZHMgaW4gYSBwYXR0ZXJuXG4vL1xuLy8gICAtIFVzZSBzb21lIGNvbW1vbiBmbGFnIHJhdGlvcyB3aGVuIGNob29zaW5nIGEgZmxhZyBzaXplLiBUaGUgZm9sbG93aW5nIGFyZSBhbGwgcmVhbCBmbGFnIHJhdGlvcywgYW5kXG4vLyAgICAgaXQgdHVybnMgb3V0IHRoYXQsIGluIG9yZGVyLCB0aGV5J3JlIGEgZmlib25hY2NpIHNlcXVlbmNlISAgMToxLCAxOjIsIDI6MywgMzo1LCA1Ojhcbi8vICAgICAgKiAxOjEgKDEuMCkgICAtIFZhdGljYW4gYW5kIFN3aXR6ZXJsYW5kLi4uXG4vLyAgICAgICogMToyICgyLjApICAgLSBDYW5hZGEsIENyb2F0aWEsIEN1YmEsIElyZWxhbmQuLi5cbi8vICAgICAgKiAyOjMgKDEuNSkgICAtIE5ldGhlcmxhbmRzLCBSb21hbmlhLCBNb3JvY2NvLCBUdXJrZXksIENoaW5hLi4uXG4vLyAgICAgICogMzo1ICgxLjY2NikgLSBCdWxnYXJpYSwgQmFocmFpbiwgTHV4ZW1ib3VyZywgQmFuZ2xhZGVzaC4uLlxuLy8gICAgICAqIDU6OCAoMS42KSAgIC0gUG9sYW5kLCBTd2VkZW4sIEFyZ2VudGluYS4uLlxuLy8gICAgIFdlIGNhbiBleHBhbmQgdGhlIHNlcXVlbmNlIHRvIGNyZWF0ZSBtb3JlIGludGVyZXN0aW5nIGZsYWdzIG9mIGRpZmZlcmVudCByYXRpb3MuXG4vL1xuaW1wb3J0IHNlZWRyYW5kb20gZnJvbSAnc2VlZHJhbmRvbSc7XG5cbmV4cG9ydCBsZXQgc2V0dGluZ3MgPSB7XG4gICAgc2VlZDogZmFsc2UsXG59XG5cbi8vIEdlbmVyYXRlIGEgcHNldWRvLXJhbmRvbSBoZXggY29sb3IgYmFzZWQgb24gYSBnaXZlbiBzZWVkLlxuLy9cbi8vIEBhcmdzXG4vLyAgIHNlZWQgIC0gIGZsb2F0IDogYSBmbG9hdCBiZWxvdyAwO1xuLy8gXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tSGV4KHNlZWQsIG1vZGlmaWVyKSB7XG4gICAgbW9kaWZpZXIgPSB0eXBlb2YgbW9kaWZpZXIgIT09ICd1bmRlZmluZWQnID8gbW9kaWZpZXIgOiAxNTtcbiAgICByZXR1cm4gJyMnKygoc2VlZCAqIG1vZGlmaWVyICUgMSkgKiAweEZGRkZGRiA8PCAwKS50b1N0cmluZygxNikucGFkU3RhcnQoNiwgJzAnKTtcbn1cblxuLy8gVGFrZSBhIGhleCB2YWx1ZSBhbmQgdHVybiBpdCBpbnRvIGFuIFJHQiBvYmplY3QuXG5leHBvcnQgZnVuY3Rpb24gaGV4VG9SZ2IoaGV4KSB7XG4gIHZhciByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcbiAgcmV0dXJuIHJlc3VsdCA/IHtcbiAgICByOiBwYXJzZUludChyZXN1bHRbMV0sIDE2KSxcbiAgICBnOiBwYXJzZUludChyZXN1bHRbMl0sIDE2KSxcbiAgICBiOiBwYXJzZUludChyZXN1bHRbM10sIDE2KVxuICB9IDogbnVsbDtcbn1cblxuLy8gVGFrZSBhIGhleCB2YWx1ZSBhbmQgb3V0cHV0IGl0IGFzIGFuIFJHQiBzdHJpbmcuXG5leHBvcnQgY29uc3QgY29udmVydEhleCA9IChoZXgpID0+IHtcbi8vIHZhciBjb252ZXJ0SGV4ID0gZnVuY3Rpb24oaGV4KSB7XG4gIGNvbnN0IHJnYk9iamVjdCA9IGhleFRvUmdiKGhleCk7XG4gIHJldHVybiAncmdiKCcgKyByZ2JPYmplY3QuciArICcsICcgKyByZ2JPYmplY3QuZyArICcsICcgKyByZ2JPYmplY3QuYiArICcpJztcbn1cblxuXG4vLyBFeGFtcGxlIFNWRyBmdW5jdGlvbi5cbmV4cG9ydCBjb25zdCBtYWtlU1ZHID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdNYWtlIGFuIFNWRy4nKTtcblxuICAgIGxldCBzdmcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJzdmdcIik7XG4gICAgc3ZnMS5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjQwMFwiKTtcbiAgICBzdmcxLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjQwMFwiKTtcbiAgICBzdmcxLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgXCIwIDAgODAwIDMwMFwiKTtcblxuICAgIGxldCBjaXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJjaXJjbGVcIik7XG4gICAgY2lyMS5zZXRBdHRyaWJ1dGUoXCJjeFwiLCA1MCk7XG4gICAgY2lyMS5zZXRBdHRyaWJ1dGUoXCJjeVwiLCA1MCk7XG4gICAgY2lyMS5zZXRBdHRyaWJ1dGUoXCJyXCIsIDUwKTtcblxuICAgIHN2ZzEuYXBwZW5kQ2hpbGQoY2lyMSk7XG5cbiAgICByZXR1cm4gc3ZnMTtcblxufVxuXG4vLyBQcm90b3R5cGVzIC8gQ2xhc3Nlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gRmxhZ1xuLy9cbi8vIEBhcmdzXG4vLyAgIGJhc2VDb2xvciAtIHN0cmluZyA6IGEgaGV4IGNvbG9yIHZhbHVlXG4vLyAgIGNhbnRvbiAgICAtIENhbnRvbiA6IGEgQ2FudG9uIG9iamVjdFxuLy8gICBkaXZpc2lvbnMgLSBhcnJheSAgOiBhbiBhcnJheSBvZiBEaXZpc2lvbiBvYmplY3RzXG4vL1xuLy9jb25zdCBGbGFnID0gKGJhc2VDb2xvciwgY2FudG9uLCBkaXZpc2lvbnMpID0+IHtcbi8vfVxuY2xhc3MgRmxhZyB7XG4gICAgY29uc3RydWN0b3IoYmFzZUNvbG9yLCBjYW50b24sIGRpdmlzaW9ucykge1xuICAgICAgICB0aGlzLmJhc2VDb2xvciA9IGJhc2VDb2xvciA/IGNvbnZlcnRIZXgoYmFzZUNvbG9yKSA6IGNvbnZlcnRIZXgoJyNjZmNmY2YnKTtcbiAgICAgICAgdGhpcy5jYW50b24gPSB0eXBlb2YgY2FudG9uICE9ICd1bmRlZmluZWQnID8gY2FudG9uIDogZmFsc2U7XG4gICAgICAgIHRoaXMuZGl2aXNpb25zID0gdHlwZW9mIGRpdmlzaW9ucyAhPSAndW5kZWZpbmVkJyA/IGRpdmlzaW9ucyA6IGZhbHNlO1xuICAgIH1cbiAgICBjcmVhdGVGbGFnKCkge1xuICAgICAgICAvLyBDcmVhdGUgYSBjYW52YXMgdG8gZHJhdyBvbjpcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2ZsYWdDYW52YXMnKTtcbiAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYm9yZGVyOiAxcHggc29saWQgYmxhY2s7Jyk7XG4gICAgICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgJzUwMCcpO1xuICAgICAgICBjYW52YXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnMzAwJyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFByZXBhcmUgZm9yIGRyYXdpbmdcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmJhc2VDb2xvcjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIDUwMCwgMzAwKTtcblxuICAgICAgICAvLyBJZiB3ZSB3ZXJlIHBhc3NlZCBhIENhbnRvbiwgbGV0J3MgZHJhdyBpdDpcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmNhbnRvbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNhbnRvbi5jb2xvcjtcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCA1MDAgLyAyLCAzMDAgLyAyKTtcbiAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgYW4gZW1iZWRkZWRGbGFnIHRvIHVzZSBhcyBhIGNhbnRvbiwgbGV0J3MgZG8gdGhhdDpcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5jYW50b24uZW1iZWRkZWRGbGFnICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FudG9uLmVtYmVkZGVkRmxhZy5jcmVhdGVGbGFnKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBOZXcgZGl2aXNpb24gdGVzdCBhcmVhOlxuICAgICAgICBjb25zb2xlLmxvZygnRHJhdyBmZXNzZXMhJylcbiAgICAgICAgY29uc3QgZmVzc2VzID0gbmV3IEZlc3NlcygzLCAnIzNmZWJlYicpO1xuXG4gICAgICAgIGZlc3Nlcy5kcmF3RmVzc2VzKGN0eCwgNTAwKTtcblxuICAgICAgICAvLyBUaGlzIGJpdCBoZXJlIGlzIHRoZSBvcmlnaW5hbCB3YXkgSSB3YXMgZHJhd2luIGRpdmlzaW9ucy5cbiAgICAgICAgLy8gSWYgd2Ugd2VyZSBwYXNzZWQgYW4gYXJyYXkgb2YgZGl2aXNpb25zLCBsZXQncyBkcmF3IHRoZW0uXG4gICAgICAgIC8vIEJlZm9yZSB3ZSBkbywgbGV0J3MgdHJ5IHRvIG1ha2UgdGhlIGRpdmlzaW9ucyBtYWtlIHNlbnNlLlxuICAgICAgICAvLyBJZiB0aGVyZSBpcyBtb3JlIHRoYW4gb25lIGRpdmlzaW9uLCB0aGV5IHNob3VsZCBiZSBjb21wbGltZW50YXJ5XG4gICAgICAgIC8vIGluIGJvdGggcG9zaXRpb24gYW5kIGNvbG9yLlxuICAgICAgICAvLyBXZSBtaWdodCBldmVuIHdhbnQgdG8gc2VlIGlmIHRoZXJlIGFyZSBvdmVybGFwcGluZyBkaXZpc2lvbnNcbiAgICAgICAgLy8gYW5kIGNvbWJpbmUgdGhlbSBpbnRvIGRpdmlzaW9uIHBhdHRlcm5zIGxpa2UgdGhlIFVuaW9uIEphY2suXG4gICAgICAgIC8vXG4gICAgICAgIC8vIEdyb3VuZCBydWxlczpcbiAgICAgICAgLy8gIC0gVHdvIERpdmlzaW9ucyB3aXRoIHRoZSBzYW1lIGRpcmVjdGlvblxuICAgICAgICAvLyAgICAgICogQFRPRE86IHNob3VsZCBub3Qgb3ZlcmxhcFxuICAgICAgICAvLyAgICAgICogQFRPRE86IHNob3VsZCBlYWNoIGhhdmUgdGhlIHNhbWUgd2lkdGhcbiAgICAgICAgLy8gICAgICAqIEBUT0RPOiBzaG91bGQgaGF2ZSBjb21wbGltZW50YXJ5LCBjb250cmFzdGluZyBjb2xvcnMgdG8gdGhlIGJhY2tncm91bmRcbiAgICAgICAgLy8gIC0gVHdvIERpdmlzaW9ucyB3aXRoIGRpZmZlcmVudCBkaXJlY3Rpb25zXG4gICAgICAgIC8vICAgICAgKiBAVE9ETzogc2hvdWxkIGludGVyc2VjdCBpbiB0aGUgY2VudGVyIG9mIHRoZSBmbGFnXG4gICAgICAgIC8vICAgICAgKiBAVE9ETzogc2hvdWxkIGVhY2ggaGF2ZSB0aGUgc2FtZSB3aWR0aFxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGl2aXNpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnRHJhd2luZyBhIGRpdmlzaW9uLiBJbmRleCAnLCBpKTtcbiAgICAgICAgLy8gICAgIHRoaXMuZGl2aXNpb25zW2ldLmRyYXdEaXZpc2lvbihjdHgpO1xuICAgICAgICAvLyB9XG4gICAgICAgIFxuICAgIH1cbiBcblxufVxuXG4vLyBDYW50b25cbi8vXG4vLyBAYXJnXG4vLyAgIGVtYmVkZGVkRmxhZyAgLSBGbGFnICAgOiBhIGZsYWcgb2JqZWN0XG4vLyAgIGNvbG9yICAgICAgICAgLSBzdHJpbmcgOiBhIGhleCBjb2xvciB2YWx1ZVxuLy9cbmNvbnN0IENhbnRvbiA9IChlbWJlZGRlZEZsYWcsIGNvbG9yKSA9PiB7XG4gICAgdGhpcy5lbWJlZGRlZEZsYWcgPSBlbWJlZGRlZEZsYWcgPyBlbWJlZGRlZEZsYWcgOiBmYWxzZTtcbiAgICB0aGlzLmNvbG9yID0gY29sb3IgPyBjb2xvciA6ICcjZGZkZmRmJztcbn1cblxuLy8gRGl2aXNpb25cbi8vXG4vLyBAYXJnc1xuLy8gICBjb2xvciAgICAgIC0gIHN0cmluZyAgOiAgYSBoZXggY29sb3IgdmFsdWVcbi8vICAgZGlyZWN0aW9uICAtICBzdHJpbmcgIDogIFsnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCcsICdkaWFnb25hbCddXG4vL1xuLy8gY2xhc3MgRGl2aXNpb24ge1xuLy8gICAgIGNvbnN0cnVjdG9yKGluZGV4LCBjb2xvciwgY29sb3JNb2RpZmllciwgZGlyZWN0aW9uLCBvZmZzZXQpIHtcbi8vICAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuLy8gICAgICAgICB0aGlzLmNvbG9yID0gdHlwZW9mIGNvbG9yICE9PSAndW5kZWZpbmVkJyA/IGNvbnZlcnRIZXgoY29sb3IpIDogY29udmVydEhleCh0aGlzLmdlbmVyYXRlQ29sb3IoKSk7XG4vLyAgICAgICAgIHRoaXMuY29sb3JNb2RpZmllciA9IGNvbG9yTW9kaWZpZXIgPyBjb2xvck1vZGlmaWVyIDogMTU7XG4vLyAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gdHlwZW9mIGRpcmVjdGlvbiAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLmhhbmRsZURpcmVjdGlvbihkaXJlY3Rpb24pIDogdGhpcy5oYW5kbGVEaXJlY3Rpb24oKTtcbi8vICAgICAgICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XG4vLyAgICAgfVxuLy8gICAgIGhhbmRsZURpcmVjdGlvbihkaXJlY3Rpb24pIHtcbi8vICAgICAgICAgbGV0IGdlbmVyYXRlZERpcmVjdGlvbiwgc2VlZERpZ2l0cywgcG9zc2libGVEaXJlY3Rpb25zO1xuLy8gICAgICAgICAvLyBEaWQgd2UgZ2V0IGEgZGlyZWN0aW9uP1xuLy8gICAgICAgICBpZiAodHlwZW9mIGRpcmVjdGlvbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbi8vICAgICAgICAgICAgIGlmIChbJ2hvcml6b250YWwnLCAndmVydGljYWwnLCAnZGlhZ29uYWwnXS5pbmNsdWRlcyhkaXJlY3Rpb24pKSB7XG4vLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RpcmVjdGlvbiBwYXNzZWQgdG8gaGFuZGxlRGlyZWN0aW9uIGlzIG9uZSBvZiBvdXIgbGlzdCBpdGVtcy4nKTtcbi8vICAgICAgICAgICAgICAgICBnZW5lcmF0ZWREaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCc7IC8vIEBUT0RPXG4vLyAgICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkaXJlY3Rpb24gcGFzc2VkIHRvIGhhbmRsZURpcmVjdGlvbiBpcyBub3QgaW4gb3VyIGxpc3QuJyk7XG4vLyAgICAgICAgICAgICAgICAgZ2VuZXJhdGVkRGlyZWN0aW9uID0gJ2hvcml6b250YWwnOyAvLyBAVE9ET1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIC8vIElmIHdlIGRpZG4ndCBnZXQgYSBkaXJlY3Rpb24sIGxldCdzIHNldCBvbmUgcmFuZG9tbHkuXG4vLyAgICAgICAgIC8vIFdlJ2xsIHRha2UgdGhlIHNlZWQgYW5kIGdlbmVyYXRlIGEgdGhyZWUtd2F5IGNob2ljZSB1c2luZyB0aGUgbGFzdCAzIGRpZ2l0cyBvZiB0aGUgc2VlZDpcbi8vICAgICAgICAgZWxzZSB7XG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnV2UgZGlkblxcJ3QgZ2V0IGEgZGl2aXNpb24hIE5vdyBnZW5lcmF0aW5nIGEgZGlyZWN0aW9uIGZvciBhIERpdmlzaW9uLi4uJyk7XG4vLyAgICAgICAgICAgICAvLyBsZXQgcG9zc2libGVEaXJlY3Rpb25zID0geyAwOiBmYWxzZSwgMTogZmFsc2UsIDI6IGZhbHNlIH07XG4vL1xuLy8gICAgICAgICAgICAgLy8gR2VuZXJhdGUgZGlnaXRzLlxuLy8gICAgICAgICAgICAgc2VlZERpZ2l0cyA9IHRoaXMuZ2VuZXJhdGVEaWdpdHMoKTtcbi8vICAgICAgICAgICAgIC8vIFByb2Nlc3MgdGhlIGRpZ2l0cyBpbnRvIDMgYm9vbGVhbiB2YWx1ZXMsIG9ubHkgb25lIG9mIHdoaWNoIHdpbGwgYmUgdHJ1ZS5cbi8vICAgICAgICAgICAgIHBvc3NpYmxlRGlyZWN0aW9ucyA9IHRoaXMucHJvY2Vzc0RpZ2l0cyhzZWVkRGlnaXRzKTtcbi8vICAgICAgICAgICAgIC8vIEdldCBhIGRpcmVjdGlvbiBzdHJpbmcgYmFzZWQgb24gd2hpY2ggb2YgdGhlIGJvb2xlYW4gdmFsdWVzIGFib3ZlIHdhcyB0cnVlLlxuLy8gICAgICAgICAgICAgZ2VuZXJhdGVkRGlyZWN0aW9uID0gdGhpcy5wcm9jZXNzUG9zc2libGVEaXJlY3Rpb25zKHBvc3NpYmxlRGlyZWN0aW9ucywgMSk7XG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm93IHdlIGhhdmUgYSBkaXJlY3Rpb24gZm9yIHRoaXMgZGl2aXNpb246ICcsIGdlbmVyYXRlZERpcmVjdGlvbik7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgcmV0dXJuIGdlbmVyYXRlZERpcmVjdGlvbjtcbi8vICAgICB9XG4vLyAgICAgLy8gZ2VuZXJhdGVEaWdpdHMoKVxuLy8gICAgIC8vXG4vLyAgICAgLy8gLSBSZXR1cm5zIGFuIGFycmF5IG9mIDMgZGlnaXRzIGJhc2VkIG9uIHRoZSBnbG9iYWwgU2VlZC5cbi8vICAgICAvL1xuLy8gICAgIGdlbmVyYXRlRGlnaXRzKCkge1xuLy8gICAgICAgICBsZXQgc2VlZERpZ2l0cztcbi8vICAgICAgICAgLy8gVGFrZSB0aGUgc2VlZCBhbmQgZ2l2ZSBpdCBzb21lIG1hdGggYWN0aW9uIHRvIGNoYW5nZSBpdCB1cCBieSBhIHN0YXRpYyB2YWx1ZS5cbi8vICAgICAgICAgLy8gV2UgY2FuJ3QgdXNlIHNvbWV0aGluZyB0cnVseSByYW5kb20gb3Igd2UnbGwgbmV2ZXIgYmUgYWJsZSB0byByZXByb2R1Y2UgdGhpc1xuLy8gICAgICAgICAvLyBzYW1lIG91dHB1dCB1c2luZyB0aGUgc2FtZSBzZWVkLlxuLy8gICAgICAgICBjb25zdCBtb2RpZmllZFNlZWQgPSAxMCAtIChzZXR0aW5ncy5zZWVkICogdGhpcy5pbmRleCArIDEuNSk7IC8vIFRoaXMgaXMganVzdCBzb21lIHJhbmRvbSBtYXRoIG9uIHRoZSBzZWVkLlxuLy8gICAgICAgICBjb25zb2xlLmxvZygnTW9kaWZpZWQgc2VlZDonLCBtb2RpZmllZFNlZWQpO1xuLy8gICAgICAgICBzZWVkRGlnaXRzID0gKyhtb2RpZmllZFNlZWQudG9TdHJpbmcoKS5zdWJzdHIoLTMpKSA7XG4vLyAgICAgICAgIHNlZWREaWdpdHMgPSAoXCJcIiArIHNlZWREaWdpdHMpLnNwbGl0KFwiXCIpO1xuLy8gICAgICAgICByZXR1cm4gc2VlZERpZ2l0cztcbi8vICAgICB9XG4vLyAgICAgLy8gcHJvY2Vzc0RpZ2l0c1xuLy8gICAgIC8vXG4vLyAgICAgLy8gLSBUYWtlcyBhbiBhcnJheSBvZiBkaWdpdHMgYW5kIHJ1bnMgc29tZSBtb2RpZnlpbmcgbWF0aCBvbiBlYWNoIG9uZSwgdGhlblxuLy8gICAgIC8vICAgcm91bmRzIHRoZSBkaWdpdCB0byBlaXRoZXIgMSBvciAwLiBJZiBub25lIG9mIHRoZSBkaWdpdHMgYXJlIHJvdW5kZWQgdG8gMSxcbi8vICAgICAvLyAgIHRoZSBmdW5jdGlvbiBkb2VzIGEgZm9sbG93dXAgYWRkaXRpb24gdG8gZWFjaCBkaWdpdCBhbmQgcmUtcnVucyBpdHNlbGYgd2l0aFxuLy8gICAgIC8vICAgdGhlIG5ld2x5IHN1bW1lZCBkaWdpdHMuXG4vLyAgICAgLy9cbi8vICAgICAvLyAtIFJldHVybnMgYW4gb2JqZWN0IG9mIGJvb2xlYW4gdmFsdWVzLlxuLy8gICAgIC8vXG4vLyAgICAgcHJvY2Vzc0RpZ2l0cyhkaWdpdHMpIHtcbi8vICAgICAgICAgbGV0IG91dHB1dFNldCA9IHswOiBmYWxzZSwgMTogZmFsc2UsIDI6IGZhbHNlfTtcbi8vICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWdpdHMubGVuZ3RoOyBpKyspIHtcbi8vICAgICAgICAgICAgIGNvbnN0IHByb2Nlc3NlZERpZ2l0ID0gTWF0aC5yb3VuZCgoK2RpZ2l0c1tpXSkgLyAxMCk7IC8vIE1vcmUgcmFuZG9tIG1vZGlmaWNhdGlvbnMgdG8gdmFsdWVzIG9mZiB0aGUgc2VlZCBkaWdpdHMuXG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZygncHJvY2Vzc2VkIERpZ2l0OiAnLCBwcm9jZXNzZWREaWdpdCk7XG4vLyAgICAgICAgICAgICBpZiAocHJvY2Vzc2VkRGlnaXQgPj0gMSkge1xuLy8gICAgICAgICAgICAgICAgIG91dHB1dFNldFtpXSA9IHRydWU7XG4vLyAgICAgICAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgLy8gSWYgYWZ0ZXIgYWxsIG9mIHRoYXQgd2UgZG9uJ3QgaGF2ZSBhIHNpbmdsZSB0cnVlIHZhbHVlLCBsZXQncyB0cnkgYWdhaW4uXG4vLyAgICAgICAgIGlmICghT2JqZWN0LnZhbHVlcyhvdXRwdXRTZXQpLmluY2x1ZGVzKHRydWUpKSB7XG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm90IGEgc2luZ2xlIHRydWUgdmFsdWUhIFRyeSBhZ2FpbiEnKTtcbi8vICAgICAgICAgICAgIGxldCBuZXdEaWdpdHMgPSBbXTtcbi8vICAgICAgICAgICAgIC8vIEJ1bXAgZWFjaCBkaWdpdCBieSBvbmUuXG4vLyAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpZ2l0cy5sZW5ndGg7IGkrKykge1xuLy8gICAgICAgICAgICAgICAgIG5ld0RpZ2l0cy5wdXNoKCtkaWdpdHNbaV0gKyAxKTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIC8vIFJlcnVuIHRoaXMgZnVuY3Rpb24gd2UncmUgaW4gdG8gdHJ5IGFnYWluLlxuLy8gICAgICAgICAgICAgdGhpcy5wcm9jZXNzRGlnaXRzKG5ld0RpZ2l0cyk7XG4vLyAgICAgICAgIH1cbi8vXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdvdXRwdXRzZXQ6ICcsIG91dHB1dFNldCk7XG4vL1xuLy8gICAgICAgICByZXR1cm4gb3V0cHV0U2V0O1xuLy8gICAgIH1cbi8vICAgICAvLyBwcm9jZXNzUG9zc2libGVEaXJlY3Rpb25zXG4vLyAgICAgLy9cbi8vICAgICAvLyAtIFRha2VzIGFuIG9iamVjdCBvZiBib29sZWFuIHZhbHVlcy5cbi8vICAgICAvLyAtIFJldHVybnMgb25lIG9mIHRoZSBmb2xsb3dpbmcgc3RyaW5nczogJ2hvcml6b250YWwnLCAndmVydGljYWwnLCAnZGlhZ29uYWwnLlxuLy8gICAgIC8vXG4vLyAgICAgcHJvY2Vzc1Bvc3NpYmxlRGlyZWN0aW9ucyhvcHRpb25zKSB7XG4vLyAgICAgICAgIC8vIE5vdyBsZXQncyBsb29wIG92ZXIgdGhlIG9wdGlvbnMgb2JqZWN0IGFuZCBzZWUgaWYgZWFjaCBrZXkgaXNcbi8vICAgICAgICAgLy8gdHJ1ZSBvciBub3QuIElmIGl0J3MgdHJ1ZSwgd2UnbGwgbWFwIGl0IHRvIG9uZSBvZiB0aGUgZGlyZWN0aW9uIHN0cmluZ3MuXG4vLyAgICAgICAgIC8vXG4vLyAgICAgICAgIC8vIEJlY2F1c2Ugb2YgaG93IHRoZSBwcm9jZXNzRGlnaXRzKCkgZnVuY3Rpb24gd29ya3MsIG9uZSBvZiB0aGUgb3B0aW9ucyB3aWxsXG4vLyAgICAgICAgIC8vIGFsd2F5cyBiZSB0cnVlLiBJZiB0aGF0IGZ1bmN0aW9uIGlzbid0IHVzZWQgdG8gZ2VuZXJhdGUgdGhlIG9wdGlvbnMsIHRoaXNcbi8vICAgICAgICAgLy8gZnVuY3Rpb24gd2lsbCByZXR1cm4gdW5kZWZpbmVkLlxuLy8gICAgICAgICBsZXQgZGlyZWN0aW9uU3RyaW5nO1xuLy8gICAgICAgICBsZXQgdW5maW5pc2hlZCA9IHRydWU7XG4vLyAgICAgICAgIC8vIFRocm93IHRoZSBvcHRpb24gdmFsdWVzIGludG8gYW4gYXJyYXkgZm9yIGJldHRlciBsb29waW5nLlxuLy8gICAgICAgICBjb25zdCBvcHRpb25zQXJyYXkgPSBPYmplY3QudmFsdWVzKG9wdGlvbnMpO1xuLy8gICAgICAgICAvLyBDaGVjayB0aGF0IHdlIGFyZSBub3QgZmluaXNoZWQuIFBvc3NpYmx5IHVubmVjZXNzYXJ5LlxuLy8gICAgICAgICAvLyBAVE9ETzogQ2hlY2sgaWYgdGhpcyBjb25kaXRpb24gaXMgbmVjZXNzYXJ5LlxuLy8gICAgICAgICBpZiAoQm9vbGVhbih1bmZpbmlzaGVkKSA9PT0gdHJ1ZSkge1xuLy8gICAgICAgICAgICAgLy8gTG9vcCBvdmVyIGVhY2ggb3B0aW9uIHZhbHVlLlxuLy8gICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zQXJyYXkubGVuZ3RoOyBpKyspIHtcbi8vICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgY3VycmVudCBsb29wIGluZGV4IG9mIHRoZSBvcHRpb25zQXJyYXkgaGFzIGEgdmFsdWUgb2YgdHJ1ZTpcbi8vICAgICAgICAgICAgICAgICBpZiAoQm9vbGVhbihvcHRpb25zW2ldKSA9PT0gdHJ1ZSkge1xuLy8gICAgICAgICAgICAgICAgICAgICBzd2l0Y2goaSkge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvblN0cmluZyA9ICdob3Jpem9udGFsJztcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmZpbmlzaGVkID0gZmFsc2U7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uU3RyaW5nID0gJ3ZlcnRpY2FsJztcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmZpbmlzaGVkID0gZmFsc2U7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uU3RyaW5nID0gJ2RpYWdvbmFsJztcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmZpbmlzaGVkID0gZmFsc2U7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICAgICAgICAgICAgICAgIH1cbi8vXG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgIC8vIFRoZSBjdXJyZW50IExvb3AgaW5kZXggaXMgbm90IHRydWVcbi8vICAgICAgICAgICAgICAgICBpZiAoQm9vbGVhbih1bmZpbmlzaGVkKSA9PT0gZmFsc2UpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0V4aXRpbmcgRm9yIGxvb3AgYmVjYXVzZSBgdW5maW5pc2hlZGAgaXMgZmFsc2Ugbm93LicpO1xuLy8gICAgICAgICAgICAgICAgICAgICBicmVhaztcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgcmV0dXJuIGRpcmVjdGlvblN0cmluZztcbi8vICAgICB9XG4vLyAgICAgLy8gZ2VuZXJhdGVDb2xvcigpXG4vLyAgICAgLy9cbi8vICAgICAvLyAtIFJldHVybnMgYSB2YWx1ZSBmcm9tIHJhbmRvbUhleCgpIHVzaW5nIHRoZSBjdXJyZW50IHNlZWQgYW5kIGEgbW9kaWZpZXIgYmFzZWRcbi8vICAgICAvLyAgIG9uIHRoZSBjdXJyZW50IERpdmlzaW9uJ3MgaW5kZXguXG4vLyAgICAgLy9cbi8vICAgICBnZW5lcmF0ZUNvbG9yKCkge1xuLy8gICAgICAgICBjb25zdCBtb2RpZmllciA9IHRoaXMuaW5kZXg7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdHZW5lcmF0aW5nIGEgbmV3IGhleCBmb3IgdGhlIGRpdmlzaW9uOiAnLCByYW5kb21IZXgoc2V0dGluZ3Muc2VlZCwgbW9kaWZpZXIpKTtcbi8vICAgICAgICAgcmV0dXJuIHJhbmRvbUhleChzZXR0aW5ncy5zZWVkLCBtb2RpZmllcik7XG4vLyAgICAgfVxuLy8gICAgIC8vIGRyYXdEaXZpc2lvbigpXG4vLyAgICAgLy9cbi8vICAgICAvLyAtIFJldHVybnMgY2FudmFzIGluc3RydWN0aW9ucyBmb3IgdGhlIGRpdmlzaW9uLlxuLy8gICAgIC8vXG4vLyAgICAgZHJhd0RpdmlzaW9uKGN0eCkge1xuLy8gICAgICAgICBsZXQgeHBvcztcbi8vICAgICAgICAgbGV0IHhwb3MyO1xuLy8gICAgICAgICBsZXQgeXBvcztcbi8vICAgICAgICAgbGV0IHlwb3MyO1xuLy8gICAgICAgICBsZXQgdztcbi8vICAgICAgICAgbGV0IGg7XG4vLyAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuLy9cbi8vXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdkcmF3aW4gdGhlIGRpdmlzaW9uIHdpdGggdGhpcyBkaXJlY3Rpb246ICcsIHRoaXMuZGlyZWN0aW9uKTtcbi8vICAgICAgICAgc3dpdGNoICh0aGlzLmRpcmVjdGlvbikge1xuLy8gICAgICAgICAgICAgY2FzZSAnaG9yaXpvbnRhbCc6XG4vLyAgICAgICAgICAgICAgICAgLy8gU3RhcnQgYXQgdGhlIGxlZnQuIFRoaXMgb25lJ3MgZWFzeS5cbi8vICAgICAgICAgICAgICAgICB4cG9zID0gMDtcbi8vICAgICAgICAgICAgICAgICAvLyBIb3Jpem9udGFsbHkgcG9zaXRpb24gdGhlIGRpdmlzaW9uIGluIHRoZSBjZW50ZXIgb2YgdGhlIGZsYWcgd2l0aCBhIDNyZCBvZiB0aGUgZmxhZyBoZWlnaHRcbi8vICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGhhbGYgZmxhZyAgICAgIGhhbGYgb2YgdGhlIGRpdmlzaW9uIGhlaWdodFxuLy8gICAgICAgICAgICAgICAgIC8vIHlwb3M6IChmbGFnIGhlaWdodCAvIDIpIC0gKChmbGFnIGhlaWdodCAvIDMpIC8gMilcbi8vICAgICAgICAgICAgICAgICB5cG9zID0gKDMwMCAvIDIpIC0gKCgzMDAgLyAzKSAvIDIpO1xuLy8gICAgICAgICAgICAgICAgIC8vIEEgdGhpcmQgb2YgdGhlIGZsYWcgd2lkdGggd2lkZS5cbi8vICAgICAgICAgICAgICAgICB3ID0gNTAwO1xuLy8gICAgICAgICAgICAgICAgIC8vIFRoZSBmdWxsIGhlaWdodCBvZiB0aGUgZmxhZy5cbi8vICAgICAgICAgICAgICAgICBoID0gMzAwIC8gMztcbi8vICAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QoeHBvcywgeXBvcywgdywgaCk7XG4vLyAgICAgICAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICAgICAgICBjYXNlICd2ZXJ0aWNhbCc6XG4vLyAgICAgICAgICAgICAgICAgLy8gVmVydGljYWxseSBwb3NpdGlvbiB0aGUgZGl2aXNpb24gaW4gdGhlIGNlbnRlciBvZiB0aGUgZmxhZyB3aXRoIGEgM3JkIG9mIHRoZSBmbGFnIHdpZHRoXG4vLyAgICAgICAgICAgICAgICAgLy8gICAgICAgICBoYWxmIGZsYWcgICAgICBoYWxmIG9mIHRoZSBkaXZpc2lvbiB3aWR0aFxuLy8gICAgICAgICAgICAgICAgIC8vIHhwb3M6IChmbGFnIHdpZHRoIC8gMikgLSAoKGZsYWcgd2lkdGggLyAzKSAvIDIpXG4vLyAgICAgICAgICAgICAgICAgeHBvcyA9ICg1MDAgLyAyKSAtICgoNTAwIC8gMykgLyAyKTtcbi8vICAgICAgICAgICAgICAgICAvLyBTdGFydCBhdCB0aGUgdG9wLiBUaGlzIG9uZSdzIGVhc3kuXG4vLyAgICAgICAgICAgICAgICAgeXBvcyA9IDA7XG4vLyAgICAgICAgICAgICAgICAgLy8gQSB0aGlyZCBvZiB0aGUgZmxhZyB3aWR0aCB3aWRlLlxuLy8gICAgICAgICAgICAgICAgIHcgPSA1MDAgLyAzO1xuLy8gICAgICAgICAgICAgICAgIC8vIFRoZSBmdWxsIGhlaWdodCBvZiB0aGUgZmxhZy5cbi8vICAgICAgICAgICAgICAgICBoID0gMzAwO1xuLy8gICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdCh4cG9zLCB5cG9zLCB3LCBoKTtcbi8vICAgICAgICAgICAgICAgICBicmVhaztcbi8vICAgICAgICAgICAgIGNhc2UgJ2RpYWdvbmFsJzpcbi8vICAgICAgICAgICAgICAgICB4cG9zID0gMDtcbi8vICAgICAgICAgICAgICAgICB5cG9zID0gMDtcbi8vICAgICAgICAgICAgICAgICB4cG9zMiA9IDUwMDtcbi8vICAgICAgICAgICAgICAgICB5cG9zMiA9IDMwMDtcbi8vICAgICAgICAgICAgICAgICB3ID0gKDUwMCArIDMwMCkgLyAyO1xuLy8gICAgICAgICAgICAgICAgIGggPSAoNTAwICsgMzAwKSAvIDI7XG4vL1xuLy8gICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbi8vICAgICAgICAgICAgICAgICBjdHgubW92ZVRvKHhwb3MsIHlwb3MpO1xuLy8gICAgICAgICAgICAgICAgIGN0eC5saW5lVG8oeHBvczIsIHlwb3MyKTtcbi8vICAgICAgICAgICAgICAgICBjdHgubGluZVdpZHRoID0gKDUwMCAtIDMwMCkgKiAuNTtcbi8vICAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xuLy8gICAgICAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbi8vXG4vLyAgICAgICAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9XG5cbi8vIEZsYWcgdGVzdGluZyBhcmVhXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBHZW5lcmF0ZSBzZWVkIHVzZWQgZm9yIHJhbmRvbSBnZW5lcmF0aW9uLlxuY29uc3QgZ2VuZXJhdGVTZWVkID0gKHNlZWRTdHJpbmcpID0+IHtcbiAgICBsZXQgc2VlZCA9IHR5cGVvZiBzZWVkU3RyaW5nICE9PSAndW5kZWZpbmVkJyA/IHNlZWRyYW5kb20oc2VlZFN0cmluZywge3N0YXRlOiB0cnVlfSkgOiBzZWVkcmFuZG9tKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDFlOSkudG9TdHJpbmcoKSwge3N0YXRlOiB0cnVlfSk7XG4gICAgY29uc29sZS5sb2coJ2dlbmVyYXRpbmcgYSBzZWVkIHZhbHVlIHRvIGJhc2UgZXZlcnl0aGluZyBvbjogJywgc2VlZCgpKTtcblxuICAgIHNldHRpbmdzLnNlZWQgPSBzZWVkKCk7XG59XG5cblxuY29uc3QgZmxhZ0dlbmVyYXRvciA9IChzZWVkLCBzdWJGbGFnKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ1J1bm5pbmcgdGhlIEZsYWcgR2VuZXJhdG9yLi4uJyk7XG4gICAgY29uc29sZS5sb2coJ1NlZWQgcmVjZWl2ZWQgYnkgZmxhZ0dlbmVyYXRvcigpOiAnLCBzZWVkKTtcbiAgICAvLyBQbGFjZWhvbGRlcnM6XG4gICAgbGV0IGRpdmlzaW9ucyA9IFtdO1xuXG4gICAgLy8gSWYgd2UgaGF2ZSBubyBzZWVkLCBnbyBnZXQgb25lOlxuICAgIC8vIHNlZWQgPSB0eXBlb2Ygc2VlZCAhPSAndW5kZWZpbmVkJyA/IHNlZWQgOiBnZW5lcmF0ZVNlZWQoKTtcbiAgICBzZWVkID0gc2V0dGluZ3Muc2VlZCAhPT0gZmFsc2UgPyBzZWVkIDogdHlwZW9mIHNlZWQgIT09ICd1bmRlZmluZWQnID8gc2VlZCA6IGdlbmVyYXRlU2VlZCgpO1xuXG4gICAgLy8gR2VuZXJhdGUgb3VyIGZsYWcncyBiYXNlIGNvbG9yOlxuICAgIGNvbnN0IHNlZWRlZENvbG9yID0gcmFuZG9tSGV4KHNlZWQpO1xuICAgIGNvbnNvbGUubG9nKCdTZWVkZWQgY29sb3I6ICcsIHNlZWRlZENvbG9yKTtcblxuXG4gICAgLy8gRGVjaWRlIGlmIHRoZXJlIHNob3VsZCBiZSBhbnkgZGl2aXNpb25zOlxuICAgIC8vXG4gICAgLy8gV2UnbGwgdXNlIHRoZSBzZWVkIHRvIGdlbmVyYXRlIGEgYmluYXJ5IHZhbHVlIHRvIGRlY2lkZSB3aGV0aGVyIG9yIG5vdCB3ZSB3YW50IGFueSBkaXZpc2lvbnMgYXQgYWxsLlxuICAgIGNvbnN0IGRpdmlzaW9uQ2hvaWNlID0gTWF0aC5yb3VuZChzZWVkKTtcbiAgICBjb25zb2xlLmxvZygnRG8gd2Ugd2FudCBhbnkgZGl2aXNpb24ocyk/ICcsIGRpdmlzaW9uQ2hvaWNlID8gJ3llcycgOiAnbm8nKTtcblxuICAgIC8vIElmIHdlIGRvIHdhbnQgc29tZSBudW1iZXIgb2YgZGl2aXNpb25zLCB3ZSdsbCBmaWd1cmUgb3V0IGhvdyBtYW55IGJ5IHVzaW5nIHRoZSBzZWVkJ3MgbGFzdCBkaWdpdC5cbiAgICBpZiAoZGl2aXNpb25DaG9pY2UpIHtcbiAgICAgICAgLy8gY29uc3QgZGl2aXNpb25Db3VudCA9ICsoc2VlZC50b1N0cmluZygpLnNsaWNlKC0xKSlcbiAgICAgICAgLy8gZGl2aXNpb25Db3VudCA/IGNvbnNvbGUubG9nKCdIb3cgbWFueSBkaXZpc2lvbnMgZG8gd2Ugd2FudD8gJywgZGl2aXNpb25Db3VudCkgOiBudWxsO1xuXG4gICAgICAgIC8vIE5vdyB3ZSdsbCBjcmVhdGUgbmV3IERpdmlzaW9uIGluc3RhbmNlcyBmb3IgdGhhdCBudW1iZXIuXG4gICAgICAgIC8vIEluaXRpYWxpemUgYW4gZW1wdHkgYXJyYXlcbiAgICAgICAgLy8gRG8gYSBsb29wLCBpbnN0YW50aWF0ZSBEaXZpc2lvbiBvYmplY3RzLCBhZGQgdGhlbSB0byB0aGUgYXJyYXkuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdHZW5lcmF0ZSB0aGlzIG1hbnkgZGl2aXNpb25zOiAnLCBkaXZpc2lvbkNvdW50KTtcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBkaXZpc2lvbkNvdW50OyBpKyspIHtcbiAgICAgICAgLy8gICAgIGNvbnN0IG5ld0RpdmlzaW9uID0gbmV3IERpdmlzaW9uKChpICsgMSkgKiBkaXZpc2lvbkNvdW50KTtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdBIG5ldyBkaXZpc2lvbiB0byBwdXNoIGludG8gdGhlIGFycmF5OicsIG5ld0RpdmlzaW9uKTtcbiAgICAgICAgLy8gICAgIGRpdmlzaW9ucy5wdXNoKG5ld0RpdmlzaW9uKTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuXG5cbiAgICBjb25zb2xlLmxvZygnR2VuZXJhdGluZyBhIGZsYWcnKTtcbiAgICBjb25zb2xlLmxvZygnSGVyZSBhcmUgdGhlIGdsb2JhbCBzZXR0aW5nczogJywgc2V0dGluZ3MpO1xuICAgIGxldCBuZXdGbGFnID0gbmV3IEZsYWcoc2VlZGVkQ29sb3IsIGZhbHNlLCBkaXZpc2lvbnMpO1xuICAgIG5ld0ZsYWcuY3JlYXRlRmxhZygpO1xuXG59XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHtzZXR0aW5ncywgZ2VuZXJhdGVTZWVkLCBmbGFnR2VuZXJhdG9yfTtcbiIsIi8vIEEgbGlicmFyeSBvZiBzZWVkYWJsZSBSTkdzIGltcGxlbWVudGVkIGluIEphdmFzY3JpcHQuXG4vL1xuLy8gVXNhZ2U6XG4vL1xuLy8gdmFyIHNlZWRyYW5kb20gPSByZXF1aXJlKCdzZWVkcmFuZG9tJyk7XG4vLyB2YXIgcmFuZG9tID0gc2VlZHJhbmRvbSgxKTsgLy8gb3IgYW55IHNlZWQuXG4vLyB2YXIgeCA9IHJhbmRvbSgpOyAgICAgICAvLyAwIDw9IHggPCAxLiAgRXZlcnkgYml0IGlzIHJhbmRvbS5cbi8vIHZhciB4ID0gcmFuZG9tLnF1aWNrKCk7IC8vIDAgPD0geCA8IDEuICAzMiBiaXRzIG9mIHJhbmRvbW5lc3MuXG5cbi8vIGFsZWEsIGEgNTMtYml0IG11bHRpcGx5LXdpdGgtY2FycnkgZ2VuZXJhdG9yIGJ5IEpvaGFubmVzIEJhYWfDuGUuXG4vLyBQZXJpb2Q6IH4yXjExNlxuLy8gUmVwb3J0ZWQgdG8gcGFzcyBhbGwgQmlnQ3J1c2ggdGVzdHMuXG52YXIgYWxlYSA9IHJlcXVpcmUoJy4vbGliL2FsZWEnKTtcblxuLy8geG9yMTI4LCBhIHB1cmUgeG9yLXNoaWZ0IGdlbmVyYXRvciBieSBHZW9yZ2UgTWFyc2FnbGlhLlxuLy8gUGVyaW9kOiAyXjEyOC0xLlxuLy8gUmVwb3J0ZWQgdG8gZmFpbDogTWF0cml4UmFuayBhbmQgTGluZWFyQ29tcC5cbnZhciB4b3IxMjggPSByZXF1aXJlKCcuL2xpYi94b3IxMjgnKTtcblxuLy8geG9yd293LCBHZW9yZ2UgTWFyc2FnbGlhJ3MgMTYwLWJpdCB4b3Itc2hpZnQgY29tYmluZWQgcGx1cyB3ZXlsLlxuLy8gUGVyaW9kOiAyXjE5Mi0yXjMyXG4vLyBSZXBvcnRlZCB0byBmYWlsOiBDb2xsaXNpb25PdmVyLCBTaW1wUG9rZXIsIGFuZCBMaW5lYXJDb21wLlxudmFyIHhvcndvdyA9IHJlcXVpcmUoJy4vbGliL3hvcndvdycpO1xuXG4vLyB4b3JzaGlmdDcsIGJ5IEZyYW7Dp29pcyBQYW5uZXRvbiBhbmQgUGllcnJlIEwnZWN1eWVyLCB0YWtlc1xuLy8gYSBkaWZmZXJlbnQgYXBwcm9hY2g6IGl0IGFkZHMgcm9idXN0bmVzcyBieSBhbGxvd2luZyBtb3JlIHNoaWZ0c1xuLy8gdGhhbiBNYXJzYWdsaWEncyBvcmlnaW5hbCB0aHJlZS4gIEl0IGlzIGEgNy1zaGlmdCBnZW5lcmF0b3Jcbi8vIHdpdGggMjU2IGJpdHMsIHRoYXQgcGFzc2VzIEJpZ0NydXNoIHdpdGggbm8gc3lzdG1hdGljIGZhaWx1cmVzLlxuLy8gUGVyaW9kIDJeMjU2LTEuXG4vLyBObyBzeXN0ZW1hdGljIEJpZ0NydXNoIGZhaWx1cmVzIHJlcG9ydGVkLlxudmFyIHhvcnNoaWZ0NyA9IHJlcXVpcmUoJy4vbGliL3hvcnNoaWZ0NycpO1xuXG4vLyB4b3I0MDk2LCBieSBSaWNoYXJkIEJyZW50LCBpcyBhIDQwOTYtYml0IHhvci1zaGlmdCB3aXRoIGFcbi8vIHZlcnkgbG9uZyBwZXJpb2QgdGhhdCBhbHNvIGFkZHMgYSBXZXlsIGdlbmVyYXRvci4gSXQgYWxzbyBwYXNzZXNcbi8vIEJpZ0NydXNoIHdpdGggbm8gc3lzdGVtYXRpYyBmYWlsdXJlcy4gIEl0cyBsb25nIHBlcmlvZCBtYXlcbi8vIGJlIHVzZWZ1bCBpZiB5b3UgaGF2ZSBtYW55IGdlbmVyYXRvcnMgYW5kIG5lZWQgdG8gYXZvaWRcbi8vIGNvbGxpc2lvbnMuXG4vLyBQZXJpb2Q6IDJeNDEyOC0yXjMyLlxuLy8gTm8gc3lzdGVtYXRpYyBCaWdDcnVzaCBmYWlsdXJlcyByZXBvcnRlZC5cbnZhciB4b3I0MDk2ID0gcmVxdWlyZSgnLi9saWIveG9yNDA5NicpO1xuXG4vLyBUeWNoZS1pLCBieSBTYW11ZWwgTmV2ZXMgYW5kIEZpbGlwZSBBcmF1am8sIGlzIGEgYml0LXNoaWZ0aW5nIHJhbmRvbVxuLy8gbnVtYmVyIGdlbmVyYXRvciBkZXJpdmVkIGZyb20gQ2hhQ2hhLCBhIG1vZGVybiBzdHJlYW0gY2lwaGVyLlxuLy8gaHR0cHM6Ly9lZGVuLmRlaS51Yy5wdC9+c25ldmVzL3B1YnMvMjAxMS1zbmZhMi5wZGZcbi8vIFBlcmlvZDogfjJeMTI3XG4vLyBObyBzeXN0ZW1hdGljIEJpZ0NydXNoIGZhaWx1cmVzIHJlcG9ydGVkLlxudmFyIHR5Y2hlaSA9IHJlcXVpcmUoJy4vbGliL3R5Y2hlaScpO1xuXG4vLyBUaGUgb3JpZ2luYWwgQVJDNC1iYXNlZCBwcm5nIGluY2x1ZGVkIGluIHRoaXMgbGlicmFyeS5cbi8vIFBlcmlvZDogfjJeMTYwMFxudmFyIHNyID0gcmVxdWlyZSgnLi9zZWVkcmFuZG9tJyk7XG5cbnNyLmFsZWEgPSBhbGVhO1xuc3IueG9yMTI4ID0geG9yMTI4O1xuc3IueG9yd293ID0geG9yd293O1xuc3IueG9yc2hpZnQ3ID0geG9yc2hpZnQ3O1xuc3IueG9yNDA5NiA9IHhvcjQwOTY7XG5zci50eWNoZWkgPSB0eWNoZWk7XG5cbm1vZHVsZS5leHBvcnRzID0gc3I7XG4iLCIvLyBBIHBvcnQgb2YgYW4gYWxnb3JpdGhtIGJ5IEpvaGFubmVzIEJhYWfDuGUgPGJhYWdvZUBiYWFnb2UuY29tPiwgMjAxMFxuLy8gaHR0cDovL2JhYWdvZS5jb20vZW4vUmFuZG9tTXVzaW5ncy9qYXZhc2NyaXB0L1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL25xdWlubGFuL2JldHRlci1yYW5kb20tbnVtYmVycy1mb3ItamF2YXNjcmlwdC1taXJyb3Jcbi8vIE9yaWdpbmFsIHdvcmsgaXMgdW5kZXIgTUlUIGxpY2Vuc2UgLVxuXG4vLyBDb3B5cmlnaHQgKEMpIDIwMTAgYnkgSm9oYW5uZXMgQmFhZ8O4ZSA8YmFhZ29lQGJhYWdvZS5vcmc+XG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuXG5cbihmdW5jdGlvbihnbG9iYWwsIG1vZHVsZSwgZGVmaW5lKSB7XG5cbmZ1bmN0aW9uIEFsZWEoc2VlZCkge1xuICB2YXIgbWUgPSB0aGlzLCBtYXNoID0gTWFzaCgpO1xuXG4gIG1lLm5leHQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdCA9IDIwOTE2MzkgKiBtZS5zMCArIG1lLmMgKiAyLjMyODMwNjQzNjUzODY5NjNlLTEwOyAvLyAyXi0zMlxuICAgIG1lLnMwID0gbWUuczE7XG4gICAgbWUuczEgPSBtZS5zMjtcbiAgICByZXR1cm4gbWUuczIgPSB0IC0gKG1lLmMgPSB0IHwgMCk7XG4gIH07XG5cbiAgLy8gQXBwbHkgdGhlIHNlZWRpbmcgYWxnb3JpdGhtIGZyb20gQmFhZ29lLlxuICBtZS5jID0gMTtcbiAgbWUuczAgPSBtYXNoKCcgJyk7XG4gIG1lLnMxID0gbWFzaCgnICcpO1xuICBtZS5zMiA9IG1hc2goJyAnKTtcbiAgbWUuczAgLT0gbWFzaChzZWVkKTtcbiAgaWYgKG1lLnMwIDwgMCkgeyBtZS5zMCArPSAxOyB9XG4gIG1lLnMxIC09IG1hc2goc2VlZCk7XG4gIGlmIChtZS5zMSA8IDApIHsgbWUuczEgKz0gMTsgfVxuICBtZS5zMiAtPSBtYXNoKHNlZWQpO1xuICBpZiAobWUuczIgPCAwKSB7IG1lLnMyICs9IDE7IH1cbiAgbWFzaCA9IG51bGw7XG59XG5cbmZ1bmN0aW9uIGNvcHkoZiwgdCkge1xuICB0LmMgPSBmLmM7XG4gIHQuczAgPSBmLnMwO1xuICB0LnMxID0gZi5zMTtcbiAgdC5zMiA9IGYuczI7XG4gIHJldHVybiB0O1xufVxuXG5mdW5jdGlvbiBpbXBsKHNlZWQsIG9wdHMpIHtcbiAgdmFyIHhnID0gbmV3IEFsZWEoc2VlZCksXG4gICAgICBzdGF0ZSA9IG9wdHMgJiYgb3B0cy5zdGF0ZSxcbiAgICAgIHBybmcgPSB4Zy5uZXh0O1xuICBwcm5nLmludDMyID0gZnVuY3Rpb24oKSB7IHJldHVybiAoeGcubmV4dCgpICogMHgxMDAwMDAwMDApIHwgMDsgfVxuICBwcm5nLmRvdWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBwcm5nKCkgKyAocHJuZygpICogMHgyMDAwMDAgfCAwKSAqIDEuMTEwMjIzMDI0NjI1MTU2NWUtMTY7IC8vIDJeLTUzXG4gIH07XG4gIHBybmcucXVpY2sgPSBwcm5nO1xuICBpZiAoc3RhdGUpIHtcbiAgICBpZiAodHlwZW9mKHN0YXRlKSA9PSAnb2JqZWN0JykgY29weShzdGF0ZSwgeGcpO1xuICAgIHBybmcuc3RhdGUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvcHkoeGcsIHt9KTsgfVxuICB9XG4gIHJldHVybiBwcm5nO1xufVxuXG5mdW5jdGlvbiBNYXNoKCkge1xuICB2YXIgbiA9IDB4ZWZjODI0OWQ7XG5cbiAgdmFyIG1hc2ggPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgZGF0YSA9IFN0cmluZyhkYXRhKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIG4gKz0gZGF0YS5jaGFyQ29kZUF0KGkpO1xuICAgICAgdmFyIGggPSAwLjAyNTE5NjAzMjgyNDE2OTM4ICogbjtcbiAgICAgIG4gPSBoID4+PiAwO1xuICAgICAgaCAtPSBuO1xuICAgICAgaCAqPSBuO1xuICAgICAgbiA9IGggPj4+IDA7XG4gICAgICBoIC09IG47XG4gICAgICBuICs9IGggKiAweDEwMDAwMDAwMDsgLy8gMl4zMlxuICAgIH1cbiAgICByZXR1cm4gKG4gPj4+IDApICogMi4zMjgzMDY0MzY1Mzg2OTYzZS0xMDsgLy8gMl4tMzJcbiAgfTtcblxuICByZXR1cm4gbWFzaDtcbn1cblxuXG5pZiAobW9kdWxlICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gaW1wbDtcbn0gZWxzZSBpZiAoZGVmaW5lICYmIGRlZmluZS5hbWQpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gaW1wbDsgfSk7XG59IGVsc2Uge1xuICB0aGlzLmFsZWEgPSBpbXBsO1xufVxuXG59KShcbiAgdGhpcyxcbiAgKHR5cGVvZiBtb2R1bGUpID09ICdvYmplY3QnICYmIG1vZHVsZSwgICAgLy8gcHJlc2VudCBpbiBub2RlLmpzXG4gICh0eXBlb2YgZGVmaW5lKSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZSAgIC8vIHByZXNlbnQgd2l0aCBhbiBBTUQgbG9hZGVyXG4pO1xuXG5cbiIsIi8vIEEgSmF2YXNjcmlwdCBpbXBsZW1lbnRhaW9uIG9mIHRoZSBcIlR5Y2hlLWlcIiBwcm5nIGFsZ29yaXRobSBieVxuLy8gU2FtdWVsIE5ldmVzIGFuZCBGaWxpcGUgQXJhdWpvLlxuLy8gU2VlIGh0dHBzOi8vZWRlbi5kZWkudWMucHQvfnNuZXZlcy9wdWJzLzIwMTEtc25mYTIucGRmXG5cbihmdW5jdGlvbihnbG9iYWwsIG1vZHVsZSwgZGVmaW5lKSB7XG5cbmZ1bmN0aW9uIFhvckdlbihzZWVkKSB7XG4gIHZhciBtZSA9IHRoaXMsIHN0cnNlZWQgPSAnJztcblxuICAvLyBTZXQgdXAgZ2VuZXJhdG9yIGZ1bmN0aW9uLlxuICBtZS5uZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGIgPSBtZS5iLCBjID0gbWUuYywgZCA9IG1lLmQsIGEgPSBtZS5hO1xuICAgIGIgPSAoYiA8PCAyNSkgXiAoYiA+Pj4gNykgXiBjO1xuICAgIGMgPSAoYyAtIGQpIHwgMDtcbiAgICBkID0gKGQgPDwgMjQpIF4gKGQgPj4+IDgpIF4gYTtcbiAgICBhID0gKGEgLSBiKSB8IDA7XG4gICAgbWUuYiA9IGIgPSAoYiA8PCAyMCkgXiAoYiA+Pj4gMTIpIF4gYztcbiAgICBtZS5jID0gYyA9IChjIC0gZCkgfCAwO1xuICAgIG1lLmQgPSAoZCA8PCAxNikgXiAoYyA+Pj4gMTYpIF4gYTtcbiAgICByZXR1cm4gbWUuYSA9IChhIC0gYikgfCAwO1xuICB9O1xuXG4gIC8qIFRoZSBmb2xsb3dpbmcgaXMgbm9uLWludmVydGVkIHR5Y2hlLCB3aGljaCBoYXMgYmV0dGVyIGludGVybmFsXG4gICAqIGJpdCBkaWZmdXNpb24sIGJ1dCB3aGljaCBpcyBhYm91dCAyNSUgc2xvd2VyIHRoYW4gdHljaGUtaSBpbiBKUy5cbiAgbWUubmV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhID0gbWUuYSwgYiA9IG1lLmIsIGMgPSBtZS5jLCBkID0gbWUuZDtcbiAgICBhID0gKG1lLmEgKyBtZS5iIHwgMCkgPj4+IDA7XG4gICAgZCA9IG1lLmQgXiBhOyBkID0gZCA8PCAxNiBeIGQgPj4+IDE2O1xuICAgIGMgPSBtZS5jICsgZCB8IDA7XG4gICAgYiA9IG1lLmIgXiBjOyBiID0gYiA8PCAxMiBeIGQgPj4+IDIwO1xuICAgIG1lLmEgPSBhID0gYSArIGIgfCAwO1xuICAgIGQgPSBkIF4gYTsgbWUuZCA9IGQgPSBkIDw8IDggXiBkID4+PiAyNDtcbiAgICBtZS5jID0gYyA9IGMgKyBkIHwgMDtcbiAgICBiID0gYiBeIGM7XG4gICAgcmV0dXJuIG1lLmIgPSAoYiA8PCA3IF4gYiA+Pj4gMjUpO1xuICB9XG4gICovXG5cbiAgbWUuYSA9IDA7XG4gIG1lLmIgPSAwO1xuICBtZS5jID0gMjY1NDQzNTc2OSB8IDA7XG4gIG1lLmQgPSAxMzY3MTMwNTUxO1xuXG4gIGlmIChzZWVkID09PSBNYXRoLmZsb29yKHNlZWQpKSB7XG4gICAgLy8gSW50ZWdlciBzZWVkLlxuICAgIG1lLmEgPSAoc2VlZCAvIDB4MTAwMDAwMDAwKSB8IDA7XG4gICAgbWUuYiA9IHNlZWQgfCAwO1xuICB9IGVsc2Uge1xuICAgIC8vIFN0cmluZyBzZWVkLlxuICAgIHN0cnNlZWQgKz0gc2VlZDtcbiAgfVxuXG4gIC8vIE1peCBpbiBzdHJpbmcgc2VlZCwgdGhlbiBkaXNjYXJkIGFuIGluaXRpYWwgYmF0Y2ggb2YgNjQgdmFsdWVzLlxuICBmb3IgKHZhciBrID0gMDsgayA8IHN0cnNlZWQubGVuZ3RoICsgMjA7IGsrKykge1xuICAgIG1lLmIgXj0gc3Ryc2VlZC5jaGFyQ29kZUF0KGspIHwgMDtcbiAgICBtZS5uZXh0KCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29weShmLCB0KSB7XG4gIHQuYSA9IGYuYTtcbiAgdC5iID0gZi5iO1xuICB0LmMgPSBmLmM7XG4gIHQuZCA9IGYuZDtcbiAgcmV0dXJuIHQ7XG59O1xuXG5mdW5jdGlvbiBpbXBsKHNlZWQsIG9wdHMpIHtcbiAgdmFyIHhnID0gbmV3IFhvckdlbihzZWVkKSxcbiAgICAgIHN0YXRlID0gb3B0cyAmJiBvcHRzLnN0YXRlLFxuICAgICAgcHJuZyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gKHhnLm5leHQoKSA+Pj4gMCkgLyAweDEwMDAwMDAwMDsgfTtcbiAgcHJuZy5kb3VibGUgPSBmdW5jdGlvbigpIHtcbiAgICBkbyB7XG4gICAgICB2YXIgdG9wID0geGcubmV4dCgpID4+PiAxMSxcbiAgICAgICAgICBib3QgPSAoeGcubmV4dCgpID4+PiAwKSAvIDB4MTAwMDAwMDAwLFxuICAgICAgICAgIHJlc3VsdCA9ICh0b3AgKyBib3QpIC8gKDEgPDwgMjEpO1xuICAgIH0gd2hpbGUgKHJlc3VsdCA9PT0gMCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgcHJuZy5pbnQzMiA9IHhnLm5leHQ7XG4gIHBybmcucXVpY2sgPSBwcm5nO1xuICBpZiAoc3RhdGUpIHtcbiAgICBpZiAodHlwZW9mKHN0YXRlKSA9PSAnb2JqZWN0JykgY29weShzdGF0ZSwgeGcpO1xuICAgIHBybmcuc3RhdGUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvcHkoeGcsIHt9KTsgfVxuICB9XG4gIHJldHVybiBwcm5nO1xufVxuXG5pZiAobW9kdWxlICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gaW1wbDtcbn0gZWxzZSBpZiAoZGVmaW5lICYmIGRlZmluZS5hbWQpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gaW1wbDsgfSk7XG59IGVsc2Uge1xuICB0aGlzLnR5Y2hlaSA9IGltcGw7XG59XG5cbn0pKFxuICB0aGlzLFxuICAodHlwZW9mIG1vZHVsZSkgPT0gJ29iamVjdCcgJiYgbW9kdWxlLCAgICAvLyBwcmVzZW50IGluIG5vZGUuanNcbiAgKHR5cGVvZiBkZWZpbmUpID09ICdmdW5jdGlvbicgJiYgZGVmaW5lICAgLy8gcHJlc2VudCB3aXRoIGFuIEFNRCBsb2FkZXJcbik7XG5cblxuIiwiLy8gQSBKYXZhc2NyaXB0IGltcGxlbWVudGFpb24gb2YgdGhlIFwieG9yMTI4XCIgcHJuZyBhbGdvcml0aG0gYnlcbi8vIEdlb3JnZSBNYXJzYWdsaWEuICBTZWUgaHR0cDovL3d3dy5qc3RhdHNvZnQub3JnL3YwOC9pMTQvcGFwZXJcblxuKGZ1bmN0aW9uKGdsb2JhbCwgbW9kdWxlLCBkZWZpbmUpIHtcblxuZnVuY3Rpb24gWG9yR2VuKHNlZWQpIHtcbiAgdmFyIG1lID0gdGhpcywgc3Ryc2VlZCA9ICcnO1xuXG4gIG1lLnggPSAwO1xuICBtZS55ID0gMDtcbiAgbWUueiA9IDA7XG4gIG1lLncgPSAwO1xuXG4gIC8vIFNldCB1cCBnZW5lcmF0b3IgZnVuY3Rpb24uXG4gIG1lLm5leHQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdCA9IG1lLnggXiAobWUueCA8PCAxMSk7XG4gICAgbWUueCA9IG1lLnk7XG4gICAgbWUueSA9IG1lLno7XG4gICAgbWUueiA9IG1lLnc7XG4gICAgcmV0dXJuIG1lLncgXj0gKG1lLncgPj4+IDE5KSBeIHQgXiAodCA+Pj4gOCk7XG4gIH07XG5cbiAgaWYgKHNlZWQgPT09IChzZWVkIHwgMCkpIHtcbiAgICAvLyBJbnRlZ2VyIHNlZWQuXG4gICAgbWUueCA9IHNlZWQ7XG4gIH0gZWxzZSB7XG4gICAgLy8gU3RyaW5nIHNlZWQuXG4gICAgc3Ryc2VlZCArPSBzZWVkO1xuICB9XG5cbiAgLy8gTWl4IGluIHN0cmluZyBzZWVkLCB0aGVuIGRpc2NhcmQgYW4gaW5pdGlhbCBiYXRjaCBvZiA2NCB2YWx1ZXMuXG4gIGZvciAodmFyIGsgPSAwOyBrIDwgc3Ryc2VlZC5sZW5ndGggKyA2NDsgaysrKSB7XG4gICAgbWUueCBePSBzdHJzZWVkLmNoYXJDb2RlQXQoaykgfCAwO1xuICAgIG1lLm5leHQoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb3B5KGYsIHQpIHtcbiAgdC54ID0gZi54O1xuICB0LnkgPSBmLnk7XG4gIHQueiA9IGYuejtcbiAgdC53ID0gZi53O1xuICByZXR1cm4gdDtcbn1cblxuZnVuY3Rpb24gaW1wbChzZWVkLCBvcHRzKSB7XG4gIHZhciB4ZyA9IG5ldyBYb3JHZW4oc2VlZCksXG4gICAgICBzdGF0ZSA9IG9wdHMgJiYgb3B0cy5zdGF0ZSxcbiAgICAgIHBybmcgPSBmdW5jdGlvbigpIHsgcmV0dXJuICh4Zy5uZXh0KCkgPj4+IDApIC8gMHgxMDAwMDAwMDA7IH07XG4gIHBybmcuZG91YmxlID0gZnVuY3Rpb24oKSB7XG4gICAgZG8ge1xuICAgICAgdmFyIHRvcCA9IHhnLm5leHQoKSA+Pj4gMTEsXG4gICAgICAgICAgYm90ID0gKHhnLm5leHQoKSA+Pj4gMCkgLyAweDEwMDAwMDAwMCxcbiAgICAgICAgICByZXN1bHQgPSAodG9wICsgYm90KSAvICgxIDw8IDIxKTtcbiAgICB9IHdoaWxlIChyZXN1bHQgPT09IDApO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIHBybmcuaW50MzIgPSB4Zy5uZXh0O1xuICBwcm5nLnF1aWNrID0gcHJuZztcbiAgaWYgKHN0YXRlKSB7XG4gICAgaWYgKHR5cGVvZihzdGF0ZSkgPT0gJ29iamVjdCcpIGNvcHkoc3RhdGUsIHhnKTtcbiAgICBwcm5nLnN0YXRlID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb3B5KHhnLCB7fSk7IH1cbiAgfVxuICByZXR1cm4gcHJuZztcbn1cblxuaWYgKG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGltcGw7XG59IGVsc2UgaWYgKGRlZmluZSAmJiBkZWZpbmUuYW1kKSB7XG4gIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIGltcGw7IH0pO1xufSBlbHNlIHtcbiAgdGhpcy54b3IxMjggPSBpbXBsO1xufVxuXG59KShcbiAgdGhpcyxcbiAgKHR5cGVvZiBtb2R1bGUpID09ICdvYmplY3QnICYmIG1vZHVsZSwgICAgLy8gcHJlc2VudCBpbiBub2RlLmpzXG4gICh0eXBlb2YgZGVmaW5lKSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZSAgIC8vIHByZXNlbnQgd2l0aCBhbiBBTUQgbG9hZGVyXG4pO1xuXG5cbiIsIi8vIEEgSmF2YXNjcmlwdCBpbXBsZW1lbnRhaW9uIG9mIFJpY2hhcmQgQnJlbnQncyBYb3JnZW5zIHhvcjQwOTYgYWxnb3JpdGhtLlxuLy9cbi8vIFRoaXMgZmFzdCBub24tY3J5cHRvZ3JhcGhpYyByYW5kb20gbnVtYmVyIGdlbmVyYXRvciBpcyBkZXNpZ25lZCBmb3Jcbi8vIHVzZSBpbiBNb250ZS1DYXJsbyBhbGdvcml0aG1zLiBJdCBjb21iaW5lcyBhIGxvbmctcGVyaW9kIHhvcnNoaWZ0XG4vLyBnZW5lcmF0b3Igd2l0aCBhIFdleWwgZ2VuZXJhdG9yLCBhbmQgaXQgcGFzc2VzIGFsbCBjb21tb24gYmF0dGVyaWVzXG4vLyBvZiBzdGFzdGljaWFsIHRlc3RzIGZvciByYW5kb21uZXNzIHdoaWxlIGNvbnN1bWluZyBvbmx5IGEgZmV3IG5hbm9zZWNvbmRzXG4vLyBmb3IgZWFjaCBwcm5nIGdlbmVyYXRlZC4gIEZvciBiYWNrZ3JvdW5kIG9uIHRoZSBnZW5lcmF0b3IsIHNlZSBCcmVudCdzXG4vLyBwYXBlcjogXCJTb21lIGxvbmctcGVyaW9kIHJhbmRvbSBudW1iZXIgZ2VuZXJhdG9ycyB1c2luZyBzaGlmdHMgYW5kIHhvcnMuXCJcbi8vIGh0dHA6Ly9hcnhpdi5vcmcvcGRmLzEwMDQuMzExNXYxLnBkZlxuLy9cbi8vIFVzYWdlOlxuLy9cbi8vIHZhciB4b3I0MDk2ID0gcmVxdWlyZSgneG9yNDA5NicpO1xuLy8gcmFuZG9tID0geG9yNDA5NigxKTsgICAgICAgICAgICAgICAgICAgICAgICAvLyBTZWVkIHdpdGggaW50MzIgb3Igc3RyaW5nLlxuLy8gYXNzZXJ0LmVxdWFsKHJhbmRvbSgpLCAwLjE1MjA0MzY0NTA1Mzg1NDcpOyAvLyAoMCwgMSkgcmFuZ2UsIDUzIGJpdHMuXG4vLyBhc3NlcnQuZXF1YWwocmFuZG9tLmludDMyKCksIDE4MDY1MzQ4OTcpOyAgIC8vIHNpZ25lZCBpbnQzMiwgMzIgYml0cy5cbi8vXG4vLyBGb3Igbm9uemVybyBudW1lcmljIGtleXMsIHRoaXMgaW1wZWxlbWVudGF0aW9uIHByb3ZpZGVzIGEgc2VxdWVuY2Vcbi8vIGlkZW50aWNhbCB0byB0aGF0IGJ5IEJyZW50J3MgeG9yZ2VucyAzIGltcGxlbWVudGFpb24gaW4gQy4gIFRoaXNcbi8vIGltcGxlbWVudGF0aW9uIGFsc28gcHJvdmlkZXMgZm9yIGluaXRhbGl6aW5nIHRoZSBnZW5lcmF0b3Igd2l0aFxuLy8gc3RyaW5nIHNlZWRzLCBvciBmb3Igc2F2aW5nIGFuZCByZXN0b3JpbmcgdGhlIHN0YXRlIG9mIHRoZSBnZW5lcmF0b3IuXG4vL1xuLy8gT24gQ2hyb21lLCB0aGlzIHBybmcgYmVuY2htYXJrcyBhYm91dCAyLjEgdGltZXMgc2xvd2VyIHRoYW5cbi8vIEphdmFzY3JpcHQncyBidWlsdC1pbiBNYXRoLnJhbmRvbSgpLlxuXG4oZnVuY3Rpb24oZ2xvYmFsLCBtb2R1bGUsIGRlZmluZSkge1xuXG5mdW5jdGlvbiBYb3JHZW4oc2VlZCkge1xuICB2YXIgbWUgPSB0aGlzO1xuXG4gIC8vIFNldCB1cCBnZW5lcmF0b3IgZnVuY3Rpb24uXG4gIG1lLm5leHQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdyA9IG1lLncsXG4gICAgICAgIFggPSBtZS5YLCBpID0gbWUuaSwgdCwgdjtcbiAgICAvLyBVcGRhdGUgV2V5bCBnZW5lcmF0b3IuXG4gICAgbWUudyA9IHcgPSAodyArIDB4NjFjODg2NDcpIHwgMDtcbiAgICAvLyBVcGRhdGUgeG9yIGdlbmVyYXRvci5cbiAgICB2ID0gWFsoaSArIDM0KSAmIDEyN107XG4gICAgdCA9IFhbaSA9ICgoaSArIDEpICYgMTI3KV07XG4gICAgdiBePSB2IDw8IDEzO1xuICAgIHQgXj0gdCA8PCAxNztcbiAgICB2IF49IHYgPj4+IDE1O1xuICAgIHQgXj0gdCA+Pj4gMTI7XG4gICAgLy8gVXBkYXRlIFhvciBnZW5lcmF0b3IgYXJyYXkgc3RhdGUuXG4gICAgdiA9IFhbaV0gPSB2IF4gdDtcbiAgICBtZS5pID0gaTtcbiAgICAvLyBSZXN1bHQgaXMgdGhlIGNvbWJpbmF0aW9uLlxuICAgIHJldHVybiAodiArICh3IF4gKHcgPj4+IDE2KSkpIHwgMDtcbiAgfTtcblxuICBmdW5jdGlvbiBpbml0KG1lLCBzZWVkKSB7XG4gICAgdmFyIHQsIHYsIGksIGosIHcsIFggPSBbXSwgbGltaXQgPSAxMjg7XG4gICAgaWYgKHNlZWQgPT09IChzZWVkIHwgMCkpIHtcbiAgICAgIC8vIE51bWVyaWMgc2VlZHMgaW5pdGlhbGl6ZSB2LCB3aGljaCBpcyB1c2VkIHRvIGdlbmVyYXRlcyBYLlxuICAgICAgdiA9IHNlZWQ7XG4gICAgICBzZWVkID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RyaW5nIHNlZWRzIGFyZSBtaXhlZCBpbnRvIHYgYW5kIFggb25lIGNoYXJhY3RlciBhdCBhIHRpbWUuXG4gICAgICBzZWVkID0gc2VlZCArICdcXDAnO1xuICAgICAgdiA9IDA7XG4gICAgICBsaW1pdCA9IE1hdGgubWF4KGxpbWl0LCBzZWVkLmxlbmd0aCk7XG4gICAgfVxuICAgIC8vIEluaXRpYWxpemUgY2lyY3VsYXIgYXJyYXkgYW5kIHdleWwgdmFsdWUuXG4gICAgZm9yIChpID0gMCwgaiA9IC0zMjsgaiA8IGxpbWl0OyArK2opIHtcbiAgICAgIC8vIFB1dCB0aGUgdW5pY29kZSBjaGFyYWN0ZXJzIGludG8gdGhlIGFycmF5LCBhbmQgc2h1ZmZsZSB0aGVtLlxuICAgICAgaWYgKHNlZWQpIHYgXj0gc2VlZC5jaGFyQ29kZUF0KChqICsgMzIpICUgc2VlZC5sZW5ndGgpO1xuICAgICAgLy8gQWZ0ZXIgMzIgc2h1ZmZsZXMsIHRha2UgdiBhcyB0aGUgc3RhcnRpbmcgdyB2YWx1ZS5cbiAgICAgIGlmIChqID09PSAwKSB3ID0gdjtcbiAgICAgIHYgXj0gdiA8PCAxMDtcbiAgICAgIHYgXj0gdiA+Pj4gMTU7XG4gICAgICB2IF49IHYgPDwgNDtcbiAgICAgIHYgXj0gdiA+Pj4gMTM7XG4gICAgICBpZiAoaiA+PSAwKSB7XG4gICAgICAgIHcgPSAodyArIDB4NjFjODg2NDcpIHwgMDsgICAgIC8vIFdleWwuXG4gICAgICAgIHQgPSAoWFtqICYgMTI3XSBePSAodiArIHcpKTsgIC8vIENvbWJpbmUgeG9yIGFuZCB3ZXlsIHRvIGluaXQgYXJyYXkuXG4gICAgICAgIGkgPSAoMCA9PSB0KSA/IGkgKyAxIDogMDsgICAgIC8vIENvdW50IHplcm9lcy5cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gV2UgaGF2ZSBkZXRlY3RlZCBhbGwgemVyb2VzOyBtYWtlIHRoZSBrZXkgbm9uemVyby5cbiAgICBpZiAoaSA+PSAxMjgpIHtcbiAgICAgIFhbKHNlZWQgJiYgc2VlZC5sZW5ndGggfHwgMCkgJiAxMjddID0gLTE7XG4gICAgfVxuICAgIC8vIFJ1biB0aGUgZ2VuZXJhdG9yIDUxMiB0aW1lcyB0byBmdXJ0aGVyIG1peCB0aGUgc3RhdGUgYmVmb3JlIHVzaW5nIGl0LlxuICAgIC8vIEZhY3RvcmluZyB0aGlzIGFzIGEgZnVuY3Rpb24gc2xvd3MgdGhlIG1haW4gZ2VuZXJhdG9yLCBzbyBpdCBpcyBqdXN0XG4gICAgLy8gdW5yb2xsZWQgaGVyZS4gIFRoZSB3ZXlsIGdlbmVyYXRvciBpcyBub3QgYWR2YW5jZWQgd2hpbGUgd2FybWluZyB1cC5cbiAgICBpID0gMTI3O1xuICAgIGZvciAoaiA9IDQgKiAxMjg7IGogPiAwOyAtLWopIHtcbiAgICAgIHYgPSBYWyhpICsgMzQpICYgMTI3XTtcbiAgICAgIHQgPSBYW2kgPSAoKGkgKyAxKSAmIDEyNyldO1xuICAgICAgdiBePSB2IDw8IDEzO1xuICAgICAgdCBePSB0IDw8IDE3O1xuICAgICAgdiBePSB2ID4+PiAxNTtcbiAgICAgIHQgXj0gdCA+Pj4gMTI7XG4gICAgICBYW2ldID0gdiBeIHQ7XG4gICAgfVxuICAgIC8vIFN0b3Jpbmcgc3RhdGUgYXMgb2JqZWN0IG1lbWJlcnMgaXMgZmFzdGVyIHRoYW4gdXNpbmcgY2xvc3VyZSB2YXJpYWJsZXMuXG4gICAgbWUudyA9IHc7XG4gICAgbWUuWCA9IFg7XG4gICAgbWUuaSA9IGk7XG4gIH1cblxuICBpbml0KG1lLCBzZWVkKTtcbn1cblxuZnVuY3Rpb24gY29weShmLCB0KSB7XG4gIHQuaSA9IGYuaTtcbiAgdC53ID0gZi53O1xuICB0LlggPSBmLlguc2xpY2UoKTtcbiAgcmV0dXJuIHQ7XG59O1xuXG5mdW5jdGlvbiBpbXBsKHNlZWQsIG9wdHMpIHtcbiAgaWYgKHNlZWQgPT0gbnVsbCkgc2VlZCA9ICsobmV3IERhdGUpO1xuICB2YXIgeGcgPSBuZXcgWG9yR2VuKHNlZWQpLFxuICAgICAgc3RhdGUgPSBvcHRzICYmIG9wdHMuc3RhdGUsXG4gICAgICBwcm5nID0gZnVuY3Rpb24oKSB7IHJldHVybiAoeGcubmV4dCgpID4+PiAwKSAvIDB4MTAwMDAwMDAwOyB9O1xuICBwcm5nLmRvdWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIGRvIHtcbiAgICAgIHZhciB0b3AgPSB4Zy5uZXh0KCkgPj4+IDExLFxuICAgICAgICAgIGJvdCA9ICh4Zy5uZXh0KCkgPj4+IDApIC8gMHgxMDAwMDAwMDAsXG4gICAgICAgICAgcmVzdWx0ID0gKHRvcCArIGJvdCkgLyAoMSA8PCAyMSk7XG4gICAgfSB3aGlsZSAocmVzdWx0ID09PSAwKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBwcm5nLmludDMyID0geGcubmV4dDtcbiAgcHJuZy5xdWljayA9IHBybmc7XG4gIGlmIChzdGF0ZSkge1xuICAgIGlmIChzdGF0ZS5YKSBjb3B5KHN0YXRlLCB4Zyk7XG4gICAgcHJuZy5zdGF0ZSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29weSh4Zywge30pOyB9XG4gIH1cbiAgcmV0dXJuIHBybmc7XG59XG5cbmlmIChtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBpbXBsO1xufSBlbHNlIGlmIChkZWZpbmUgJiYgZGVmaW5lLmFtZCkge1xuICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBpbXBsOyB9KTtcbn0gZWxzZSB7XG4gIHRoaXMueG9yNDA5NiA9IGltcGw7XG59XG5cbn0pKFxuICB0aGlzLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3aW5kb3cgb2JqZWN0IG9yIGdsb2JhbFxuICAodHlwZW9mIG1vZHVsZSkgPT0gJ29iamVjdCcgJiYgbW9kdWxlLCAgICAvLyBwcmVzZW50IGluIG5vZGUuanNcbiAgKHR5cGVvZiBkZWZpbmUpID09ICdmdW5jdGlvbicgJiYgZGVmaW5lICAgLy8gcHJlc2VudCB3aXRoIGFuIEFNRCBsb2FkZXJcbik7XG4iLCIvLyBBIEphdmFzY3JpcHQgaW1wbGVtZW50YWlvbiBvZiB0aGUgXCJ4b3JzaGlmdDdcIiBhbGdvcml0aG0gYnlcbi8vIEZyYW7Dp29pcyBQYW5uZXRvbiBhbmQgUGllcnJlIEwnZWN1eWVyOlxuLy8gXCJPbiB0aGUgWG9yZ3NoaWZ0IFJhbmRvbSBOdW1iZXIgR2VuZXJhdG9yc1wiXG4vLyBodHRwOi8vc2FsdWMuZW5nci51Y29ubi5lZHUvcmVmcy9jcnlwdG8vcm5nL3Bhbm5ldG9uMDVvbnRoZXhvcnNoaWZ0LnBkZlxuXG4oZnVuY3Rpb24oZ2xvYmFsLCBtb2R1bGUsIGRlZmluZSkge1xuXG5mdW5jdGlvbiBYb3JHZW4oc2VlZCkge1xuICB2YXIgbWUgPSB0aGlzO1xuXG4gIC8vIFNldCB1cCBnZW5lcmF0b3IgZnVuY3Rpb24uXG4gIG1lLm5leHQgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBVcGRhdGUgeG9yIGdlbmVyYXRvci5cbiAgICB2YXIgWCA9IG1lLngsIGkgPSBtZS5pLCB0LCB2LCB3O1xuICAgIHQgPSBYW2ldOyB0IF49ICh0ID4+PiA3KTsgdiA9IHQgXiAodCA8PCAyNCk7XG4gICAgdCA9IFhbKGkgKyAxKSAmIDddOyB2IF49IHQgXiAodCA+Pj4gMTApO1xuICAgIHQgPSBYWyhpICsgMykgJiA3XTsgdiBePSB0IF4gKHQgPj4+IDMpO1xuICAgIHQgPSBYWyhpICsgNCkgJiA3XTsgdiBePSB0IF4gKHQgPDwgNyk7XG4gICAgdCA9IFhbKGkgKyA3KSAmIDddOyB0ID0gdCBeICh0IDw8IDEzKTsgdiBePSB0IF4gKHQgPDwgOSk7XG4gICAgWFtpXSA9IHY7XG4gICAgbWUuaSA9IChpICsgMSkgJiA3O1xuICAgIHJldHVybiB2O1xuICB9O1xuXG4gIGZ1bmN0aW9uIGluaXQobWUsIHNlZWQpIHtcbiAgICB2YXIgaiwgdywgWCA9IFtdO1xuXG4gICAgaWYgKHNlZWQgPT09IChzZWVkIHwgMCkpIHtcbiAgICAgIC8vIFNlZWQgc3RhdGUgYXJyYXkgdXNpbmcgYSAzMi1iaXQgaW50ZWdlci5cbiAgICAgIHcgPSBYWzBdID0gc2VlZDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU2VlZCBzdGF0ZSB1c2luZyBhIHN0cmluZy5cbiAgICAgIHNlZWQgPSAnJyArIHNlZWQ7XG4gICAgICBmb3IgKGogPSAwOyBqIDwgc2VlZC5sZW5ndGg7ICsraikge1xuICAgICAgICBYW2ogJiA3XSA9IChYW2ogJiA3XSA8PCAxNSkgXlxuICAgICAgICAgICAgKHNlZWQuY2hhckNvZGVBdChqKSArIFhbKGogKyAxKSAmIDddIDw8IDEzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gRW5mb3JjZSBhbiBhcnJheSBsZW5ndGggb2YgOCwgbm90IGFsbCB6ZXJvZXMuXG4gICAgd2hpbGUgKFgubGVuZ3RoIDwgOCkgWC5wdXNoKDApO1xuICAgIGZvciAoaiA9IDA7IGogPCA4ICYmIFhbal0gPT09IDA7ICsraik7XG4gICAgaWYgKGogPT0gOCkgdyA9IFhbN10gPSAtMTsgZWxzZSB3ID0gWFtqXTtcblxuICAgIG1lLnggPSBYO1xuICAgIG1lLmkgPSAwO1xuXG4gICAgLy8gRGlzY2FyZCBhbiBpbml0aWFsIDI1NiB2YWx1ZXMuXG4gICAgZm9yIChqID0gMjU2OyBqID4gMDsgLS1qKSB7XG4gICAgICBtZS5uZXh0KCk7XG4gICAgfVxuICB9XG5cbiAgaW5pdChtZSwgc2VlZCk7XG59XG5cbmZ1bmN0aW9uIGNvcHkoZiwgdCkge1xuICB0LnggPSBmLnguc2xpY2UoKTtcbiAgdC5pID0gZi5pO1xuICByZXR1cm4gdDtcbn1cblxuZnVuY3Rpb24gaW1wbChzZWVkLCBvcHRzKSB7XG4gIGlmIChzZWVkID09IG51bGwpIHNlZWQgPSArKG5ldyBEYXRlKTtcbiAgdmFyIHhnID0gbmV3IFhvckdlbihzZWVkKSxcbiAgICAgIHN0YXRlID0gb3B0cyAmJiBvcHRzLnN0YXRlLFxuICAgICAgcHJuZyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gKHhnLm5leHQoKSA+Pj4gMCkgLyAweDEwMDAwMDAwMDsgfTtcbiAgcHJuZy5kb3VibGUgPSBmdW5jdGlvbigpIHtcbiAgICBkbyB7XG4gICAgICB2YXIgdG9wID0geGcubmV4dCgpID4+PiAxMSxcbiAgICAgICAgICBib3QgPSAoeGcubmV4dCgpID4+PiAwKSAvIDB4MTAwMDAwMDAwLFxuICAgICAgICAgIHJlc3VsdCA9ICh0b3AgKyBib3QpIC8gKDEgPDwgMjEpO1xuICAgIH0gd2hpbGUgKHJlc3VsdCA9PT0gMCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgcHJuZy5pbnQzMiA9IHhnLm5leHQ7XG4gIHBybmcucXVpY2sgPSBwcm5nO1xuICBpZiAoc3RhdGUpIHtcbiAgICBpZiAoc3RhdGUueCkgY29weShzdGF0ZSwgeGcpO1xuICAgIHBybmcuc3RhdGUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvcHkoeGcsIHt9KTsgfVxuICB9XG4gIHJldHVybiBwcm5nO1xufVxuXG5pZiAobW9kdWxlICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gaW1wbDtcbn0gZWxzZSBpZiAoZGVmaW5lICYmIGRlZmluZS5hbWQpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gaW1wbDsgfSk7XG59IGVsc2Uge1xuICB0aGlzLnhvcnNoaWZ0NyA9IGltcGw7XG59XG5cbn0pKFxuICB0aGlzLFxuICAodHlwZW9mIG1vZHVsZSkgPT0gJ29iamVjdCcgJiYgbW9kdWxlLCAgICAvLyBwcmVzZW50IGluIG5vZGUuanNcbiAgKHR5cGVvZiBkZWZpbmUpID09ICdmdW5jdGlvbicgJiYgZGVmaW5lICAgLy8gcHJlc2VudCB3aXRoIGFuIEFNRCBsb2FkZXJcbik7XG5cbiIsIi8vIEEgSmF2YXNjcmlwdCBpbXBsZW1lbnRhaW9uIG9mIHRoZSBcInhvcndvd1wiIHBybmcgYWxnb3JpdGhtIGJ5XG4vLyBHZW9yZ2UgTWFyc2FnbGlhLiAgU2VlIGh0dHA6Ly93d3cuanN0YXRzb2Z0Lm9yZy92MDgvaTE0L3BhcGVyXG5cbihmdW5jdGlvbihnbG9iYWwsIG1vZHVsZSwgZGVmaW5lKSB7XG5cbmZ1bmN0aW9uIFhvckdlbihzZWVkKSB7XG4gIHZhciBtZSA9IHRoaXMsIHN0cnNlZWQgPSAnJztcblxuICAvLyBTZXQgdXAgZ2VuZXJhdG9yIGZ1bmN0aW9uLlxuICBtZS5uZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHQgPSAobWUueCBeIChtZS54ID4+PiAyKSk7XG4gICAgbWUueCA9IG1lLnk7IG1lLnkgPSBtZS56OyBtZS56ID0gbWUudzsgbWUudyA9IG1lLnY7XG4gICAgcmV0dXJuIChtZS5kID0gKG1lLmQgKyAzNjI0MzcgfCAwKSkgK1xuICAgICAgIChtZS52ID0gKG1lLnYgXiAobWUudiA8PCA0KSkgXiAodCBeICh0IDw8IDEpKSkgfCAwO1xuICB9O1xuXG4gIG1lLnggPSAwO1xuICBtZS55ID0gMDtcbiAgbWUueiA9IDA7XG4gIG1lLncgPSAwO1xuICBtZS52ID0gMDtcblxuICBpZiAoc2VlZCA9PT0gKHNlZWQgfCAwKSkge1xuICAgIC8vIEludGVnZXIgc2VlZC5cbiAgICBtZS54ID0gc2VlZDtcbiAgfSBlbHNlIHtcbiAgICAvLyBTdHJpbmcgc2VlZC5cbiAgICBzdHJzZWVkICs9IHNlZWQ7XG4gIH1cblxuICAvLyBNaXggaW4gc3RyaW5nIHNlZWQsIHRoZW4gZGlzY2FyZCBhbiBpbml0aWFsIGJhdGNoIG9mIDY0IHZhbHVlcy5cbiAgZm9yICh2YXIgayA9IDA7IGsgPCBzdHJzZWVkLmxlbmd0aCArIDY0OyBrKyspIHtcbiAgICBtZS54IF49IHN0cnNlZWQuY2hhckNvZGVBdChrKSB8IDA7XG4gICAgaWYgKGsgPT0gc3Ryc2VlZC5sZW5ndGgpIHtcbiAgICAgIG1lLmQgPSBtZS54IDw8IDEwIF4gbWUueCA+Pj4gNDtcbiAgICB9XG4gICAgbWUubmV4dCgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvcHkoZiwgdCkge1xuICB0LnggPSBmLng7XG4gIHQueSA9IGYueTtcbiAgdC56ID0gZi56O1xuICB0LncgPSBmLnc7XG4gIHQudiA9IGYudjtcbiAgdC5kID0gZi5kO1xuICByZXR1cm4gdDtcbn1cblxuZnVuY3Rpb24gaW1wbChzZWVkLCBvcHRzKSB7XG4gIHZhciB4ZyA9IG5ldyBYb3JHZW4oc2VlZCksXG4gICAgICBzdGF0ZSA9IG9wdHMgJiYgb3B0cy5zdGF0ZSxcbiAgICAgIHBybmcgPSBmdW5jdGlvbigpIHsgcmV0dXJuICh4Zy5uZXh0KCkgPj4+IDApIC8gMHgxMDAwMDAwMDA7IH07XG4gIHBybmcuZG91YmxlID0gZnVuY3Rpb24oKSB7XG4gICAgZG8ge1xuICAgICAgdmFyIHRvcCA9IHhnLm5leHQoKSA+Pj4gMTEsXG4gICAgICAgICAgYm90ID0gKHhnLm5leHQoKSA+Pj4gMCkgLyAweDEwMDAwMDAwMCxcbiAgICAgICAgICByZXN1bHQgPSAodG9wICsgYm90KSAvICgxIDw8IDIxKTtcbiAgICB9IHdoaWxlIChyZXN1bHQgPT09IDApO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIHBybmcuaW50MzIgPSB4Zy5uZXh0O1xuICBwcm5nLnF1aWNrID0gcHJuZztcbiAgaWYgKHN0YXRlKSB7XG4gICAgaWYgKHR5cGVvZihzdGF0ZSkgPT0gJ29iamVjdCcpIGNvcHkoc3RhdGUsIHhnKTtcbiAgICBwcm5nLnN0YXRlID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb3B5KHhnLCB7fSk7IH1cbiAgfVxuICByZXR1cm4gcHJuZztcbn1cblxuaWYgKG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGltcGw7XG59IGVsc2UgaWYgKGRlZmluZSAmJiBkZWZpbmUuYW1kKSB7XG4gIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIGltcGw7IH0pO1xufSBlbHNlIHtcbiAgdGhpcy54b3J3b3cgPSBpbXBsO1xufVxuXG59KShcbiAgdGhpcyxcbiAgKHR5cGVvZiBtb2R1bGUpID09ICdvYmplY3QnICYmIG1vZHVsZSwgICAgLy8gcHJlc2VudCBpbiBub2RlLmpzXG4gICh0eXBlb2YgZGVmaW5lKSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZSAgIC8vIHByZXNlbnQgd2l0aCBhbiBBTUQgbG9hZGVyXG4pO1xuXG5cbiIsIi8qXG5Db3B5cmlnaHQgMjAxOSBEYXZpZCBCYXUuXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZ1xuYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG5cIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbndpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbmRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0b1xucGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvXG50aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG5pbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbkVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULlxuSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTllcbkNMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsXG5UT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRVxuU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbiovXG5cbihmdW5jdGlvbiAoZ2xvYmFsLCBwb29sLCBtYXRoKSB7XG4vL1xuLy8gVGhlIGZvbGxvd2luZyBjb25zdGFudHMgYXJlIHJlbGF0ZWQgdG8gSUVFRSA3NTQgbGltaXRzLlxuLy9cblxudmFyIHdpZHRoID0gMjU2LCAgICAgICAgLy8gZWFjaCBSQzQgb3V0cHV0IGlzIDAgPD0geCA8IDI1NlxuICAgIGNodW5rcyA9IDYsICAgICAgICAgLy8gYXQgbGVhc3Qgc2l4IFJDNCBvdXRwdXRzIGZvciBlYWNoIGRvdWJsZVxuICAgIGRpZ2l0cyA9IDUyLCAgICAgICAgLy8gdGhlcmUgYXJlIDUyIHNpZ25pZmljYW50IGRpZ2l0cyBpbiBhIGRvdWJsZVxuICAgIHJuZ25hbWUgPSAncmFuZG9tJywgLy8gcm5nbmFtZTogbmFtZSBmb3IgTWF0aC5yYW5kb20gYW5kIE1hdGguc2VlZHJhbmRvbVxuICAgIHN0YXJ0ZGVub20gPSBtYXRoLnBvdyh3aWR0aCwgY2h1bmtzKSxcbiAgICBzaWduaWZpY2FuY2UgPSBtYXRoLnBvdygyLCBkaWdpdHMpLFxuICAgIG92ZXJmbG93ID0gc2lnbmlmaWNhbmNlICogMixcbiAgICBtYXNrID0gd2lkdGggLSAxLFxuICAgIG5vZGVjcnlwdG87ICAgICAgICAgLy8gbm9kZS5qcyBjcnlwdG8gbW9kdWxlLCBpbml0aWFsaXplZCBhdCB0aGUgYm90dG9tLlxuXG4vL1xuLy8gc2VlZHJhbmRvbSgpXG4vLyBUaGlzIGlzIHRoZSBzZWVkcmFuZG9tIGZ1bmN0aW9uIGRlc2NyaWJlZCBhYm92ZS5cbi8vXG5mdW5jdGlvbiBzZWVkcmFuZG9tKHNlZWQsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIHZhciBrZXkgPSBbXTtcbiAgb3B0aW9ucyA9IChvcHRpb25zID09IHRydWUpID8geyBlbnRyb3B5OiB0cnVlIH0gOiAob3B0aW9ucyB8fCB7fSk7XG5cbiAgLy8gRmxhdHRlbiB0aGUgc2VlZCBzdHJpbmcgb3IgYnVpbGQgb25lIGZyb20gbG9jYWwgZW50cm9weSBpZiBuZWVkZWQuXG4gIHZhciBzaG9ydHNlZWQgPSBtaXhrZXkoZmxhdHRlbihcbiAgICBvcHRpb25zLmVudHJvcHkgPyBbc2VlZCwgdG9zdHJpbmcocG9vbCldIDpcbiAgICAoc2VlZCA9PSBudWxsKSA/IGF1dG9zZWVkKCkgOiBzZWVkLCAzKSwga2V5KTtcblxuICAvLyBVc2UgdGhlIHNlZWQgdG8gaW5pdGlhbGl6ZSBhbiBBUkM0IGdlbmVyYXRvci5cbiAgdmFyIGFyYzQgPSBuZXcgQVJDNChrZXkpO1xuXG4gIC8vIFRoaXMgZnVuY3Rpb24gcmV0dXJucyBhIHJhbmRvbSBkb3VibGUgaW4gWzAsIDEpIHRoYXQgY29udGFpbnNcbiAgLy8gcmFuZG9tbmVzcyBpbiBldmVyeSBiaXQgb2YgdGhlIG1hbnRpc3NhIG9mIHRoZSBJRUVFIDc1NCB2YWx1ZS5cbiAgdmFyIHBybmcgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbiA9IGFyYzQuZyhjaHVua3MpLCAgICAgICAgICAgICAvLyBTdGFydCB3aXRoIGEgbnVtZXJhdG9yIG4gPCAyIF4gNDhcbiAgICAgICAgZCA9IHN0YXJ0ZGVub20sICAgICAgICAgICAgICAgICAvLyAgIGFuZCBkZW5vbWluYXRvciBkID0gMiBeIDQ4LlxuICAgICAgICB4ID0gMDsgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgYW5kIG5vICdleHRyYSBsYXN0IGJ5dGUnLlxuICAgIHdoaWxlIChuIDwgc2lnbmlmaWNhbmNlKSB7ICAgICAgICAgIC8vIEZpbGwgdXAgYWxsIHNpZ25pZmljYW50IGRpZ2l0cyBieVxuICAgICAgbiA9IChuICsgeCkgKiB3aWR0aDsgICAgICAgICAgICAgIC8vICAgc2hpZnRpbmcgbnVtZXJhdG9yIGFuZFxuICAgICAgZCAqPSB3aWR0aDsgICAgICAgICAgICAgICAgICAgICAgIC8vICAgZGVub21pbmF0b3IgYW5kIGdlbmVyYXRpbmcgYVxuICAgICAgeCA9IGFyYzQuZygxKTsgICAgICAgICAgICAgICAgICAgIC8vICAgbmV3IGxlYXN0LXNpZ25pZmljYW50LWJ5dGUuXG4gICAgfVxuICAgIHdoaWxlIChuID49IG92ZXJmbG93KSB7ICAgICAgICAgICAgIC8vIFRvIGF2b2lkIHJvdW5kaW5nIHVwLCBiZWZvcmUgYWRkaW5nXG4gICAgICBuIC89IDI7ICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBsYXN0IGJ5dGUsIHNoaWZ0IGV2ZXJ5dGhpbmdcbiAgICAgIGQgLz0gMjsgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHJpZ2h0IHVzaW5nIGludGVnZXIgbWF0aCB1bnRpbFxuICAgICAgeCA+Pj49IDE7ICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgd2UgaGF2ZSBleGFjdGx5IHRoZSBkZXNpcmVkIGJpdHMuXG4gICAgfVxuICAgIHJldHVybiAobiArIHgpIC8gZDsgICAgICAgICAgICAgICAgIC8vIEZvcm0gdGhlIG51bWJlciB3aXRoaW4gWzAsIDEpLlxuICB9O1xuXG4gIHBybmcuaW50MzIgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGFyYzQuZyg0KSB8IDA7IH1cbiAgcHJuZy5xdWljayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJjNC5nKDQpIC8gMHgxMDAwMDAwMDA7IH1cbiAgcHJuZy5kb3VibGUgPSBwcm5nO1xuXG4gIC8vIE1peCB0aGUgcmFuZG9tbmVzcyBpbnRvIGFjY3VtdWxhdGVkIGVudHJvcHkuXG4gIG1peGtleSh0b3N0cmluZyhhcmM0LlMpLCBwb29sKTtcblxuICAvLyBDYWxsaW5nIGNvbnZlbnRpb246IHdoYXQgdG8gcmV0dXJuIGFzIGEgZnVuY3Rpb24gb2YgcHJuZywgc2VlZCwgaXNfbWF0aC5cbiAgcmV0dXJuIChvcHRpb25zLnBhc3MgfHwgY2FsbGJhY2sgfHxcbiAgICAgIGZ1bmN0aW9uKHBybmcsIHNlZWQsIGlzX21hdGhfY2FsbCwgc3RhdGUpIHtcbiAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgLy8gTG9hZCB0aGUgYXJjNCBzdGF0ZSBmcm9tIHRoZSBnaXZlbiBzdGF0ZSBpZiBpdCBoYXMgYW4gUyBhcnJheS5cbiAgICAgICAgICBpZiAoc3RhdGUuUykgeyBjb3B5KHN0YXRlLCBhcmM0KTsgfVxuICAgICAgICAgIC8vIE9ubHkgcHJvdmlkZSB0aGUgLnN0YXRlIG1ldGhvZCBpZiByZXF1ZXN0ZWQgdmlhIG9wdGlvbnMuc3RhdGUuXG4gICAgICAgICAgcHJuZy5zdGF0ZSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29weShhcmM0LCB7fSk7IH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGNhbGxlZCBhcyBhIG1ldGhvZCBvZiBNYXRoIChNYXRoLnNlZWRyYW5kb20oKSksIG11dGF0ZVxuICAgICAgICAvLyBNYXRoLnJhbmRvbSBiZWNhdXNlIHRoYXQgaXMgaG93IHNlZWRyYW5kb20uanMgaGFzIHdvcmtlZCBzaW5jZSB2MS4wLlxuICAgICAgICBpZiAoaXNfbWF0aF9jYWxsKSB7IG1hdGhbcm5nbmFtZV0gPSBwcm5nOyByZXR1cm4gc2VlZDsgfVxuXG4gICAgICAgIC8vIE90aGVyd2lzZSwgaXQgaXMgYSBuZXdlciBjYWxsaW5nIGNvbnZlbnRpb24sIHNvIHJldHVybiB0aGVcbiAgICAgICAgLy8gcHJuZyBkaXJlY3RseS5cbiAgICAgICAgZWxzZSByZXR1cm4gcHJuZztcbiAgICAgIH0pKFxuICBwcm5nLFxuICBzaG9ydHNlZWQsXG4gICdnbG9iYWwnIGluIG9wdGlvbnMgPyBvcHRpb25zLmdsb2JhbCA6ICh0aGlzID09IG1hdGgpLFxuICBvcHRpb25zLnN0YXRlKTtcbn1cblxuLy9cbi8vIEFSQzRcbi8vXG4vLyBBbiBBUkM0IGltcGxlbWVudGF0aW9uLiAgVGhlIGNvbnN0cnVjdG9yIHRha2VzIGEga2V5IGluIHRoZSBmb3JtIG9mXG4vLyBhbiBhcnJheSBvZiBhdCBtb3N0ICh3aWR0aCkgaW50ZWdlcnMgdGhhdCBzaG91bGQgYmUgMCA8PSB4IDwgKHdpZHRoKS5cbi8vXG4vLyBUaGUgZyhjb3VudCkgbWV0aG9kIHJldHVybnMgYSBwc2V1ZG9yYW5kb20gaW50ZWdlciB0aGF0IGNvbmNhdGVuYXRlc1xuLy8gdGhlIG5leHQgKGNvdW50KSBvdXRwdXRzIGZyb20gQVJDNC4gIEl0cyByZXR1cm4gdmFsdWUgaXMgYSBudW1iZXIgeFxuLy8gdGhhdCBpcyBpbiB0aGUgcmFuZ2UgMCA8PSB4IDwgKHdpZHRoIF4gY291bnQpLlxuLy9cbmZ1bmN0aW9uIEFSQzQoa2V5KSB7XG4gIHZhciB0LCBrZXlsZW4gPSBrZXkubGVuZ3RoLFxuICAgICAgbWUgPSB0aGlzLCBpID0gMCwgaiA9IG1lLmkgPSBtZS5qID0gMCwgcyA9IG1lLlMgPSBbXTtcblxuICAvLyBUaGUgZW1wdHkga2V5IFtdIGlzIHRyZWF0ZWQgYXMgWzBdLlxuICBpZiAoIWtleWxlbikgeyBrZXkgPSBba2V5bGVuKytdOyB9XG5cbiAgLy8gU2V0IHVwIFMgdXNpbmcgdGhlIHN0YW5kYXJkIGtleSBzY2hlZHVsaW5nIGFsZ29yaXRobS5cbiAgd2hpbGUgKGkgPCB3aWR0aCkge1xuICAgIHNbaV0gPSBpKys7XG4gIH1cbiAgZm9yIChpID0gMDsgaSA8IHdpZHRoOyBpKyspIHtcbiAgICBzW2ldID0gc1tqID0gbWFzayAmIChqICsga2V5W2kgJSBrZXlsZW5dICsgKHQgPSBzW2ldKSldO1xuICAgIHNbal0gPSB0O1xuICB9XG5cbiAgLy8gVGhlIFwiZ1wiIG1ldGhvZCByZXR1cm5zIHRoZSBuZXh0IChjb3VudCkgb3V0cHV0cyBhcyBvbmUgbnVtYmVyLlxuICAobWUuZyA9IGZ1bmN0aW9uKGNvdW50KSB7XG4gICAgLy8gVXNpbmcgaW5zdGFuY2UgbWVtYmVycyBpbnN0ZWFkIG9mIGNsb3N1cmUgc3RhdGUgbmVhcmx5IGRvdWJsZXMgc3BlZWQuXG4gICAgdmFyIHQsIHIgPSAwLFxuICAgICAgICBpID0gbWUuaSwgaiA9IG1lLmosIHMgPSBtZS5TO1xuICAgIHdoaWxlIChjb3VudC0tKSB7XG4gICAgICB0ID0gc1tpID0gbWFzayAmIChpICsgMSldO1xuICAgICAgciA9IHIgKiB3aWR0aCArIHNbbWFzayAmICgoc1tpXSA9IHNbaiA9IG1hc2sgJiAoaiArIHQpXSkgKyAoc1tqXSA9IHQpKV07XG4gICAgfVxuICAgIG1lLmkgPSBpOyBtZS5qID0gajtcbiAgICByZXR1cm4gcjtcbiAgICAvLyBGb3Igcm9idXN0IHVucHJlZGljdGFiaWxpdHksIHRoZSBmdW5jdGlvbiBjYWxsIGJlbG93IGF1dG9tYXRpY2FsbHlcbiAgICAvLyBkaXNjYXJkcyBhbiBpbml0aWFsIGJhdGNoIG9mIHZhbHVlcy4gIFRoaXMgaXMgY2FsbGVkIFJDNC1kcm9wWzI1Nl0uXG4gICAgLy8gU2VlIGh0dHA6Ly9nb29nbGUuY29tL3NlYXJjaD9xPXJzYStmbHVocmVyK3Jlc3BvbnNlJmJ0bklcbiAgfSkod2lkdGgpO1xufVxuXG4vL1xuLy8gY29weSgpXG4vLyBDb3BpZXMgaW50ZXJuYWwgc3RhdGUgb2YgQVJDNCB0byBvciBmcm9tIGEgcGxhaW4gb2JqZWN0LlxuLy9cbmZ1bmN0aW9uIGNvcHkoZiwgdCkge1xuICB0LmkgPSBmLmk7XG4gIHQuaiA9IGYuajtcbiAgdC5TID0gZi5TLnNsaWNlKCk7XG4gIHJldHVybiB0O1xufTtcblxuLy9cbi8vIGZsYXR0ZW4oKVxuLy8gQ29udmVydHMgYW4gb2JqZWN0IHRyZWUgdG8gbmVzdGVkIGFycmF5cyBvZiBzdHJpbmdzLlxuLy9cbmZ1bmN0aW9uIGZsYXR0ZW4ob2JqLCBkZXB0aCkge1xuICB2YXIgcmVzdWx0ID0gW10sIHR5cCA9ICh0eXBlb2Ygb2JqKSwgcHJvcDtcbiAgaWYgKGRlcHRoICYmIHR5cCA9PSAnb2JqZWN0Jykge1xuICAgIGZvciAocHJvcCBpbiBvYmopIHtcbiAgICAgIHRyeSB7IHJlc3VsdC5wdXNoKGZsYXR0ZW4ob2JqW3Byb3BdLCBkZXB0aCAtIDEpKTsgfSBjYXRjaCAoZSkge31cbiAgICB9XG4gIH1cbiAgcmV0dXJuIChyZXN1bHQubGVuZ3RoID8gcmVzdWx0IDogdHlwID09ICdzdHJpbmcnID8gb2JqIDogb2JqICsgJ1xcMCcpO1xufVxuXG4vL1xuLy8gbWl4a2V5KClcbi8vIE1peGVzIGEgc3RyaW5nIHNlZWQgaW50byBhIGtleSB0aGF0IGlzIGFuIGFycmF5IG9mIGludGVnZXJzLCBhbmRcbi8vIHJldHVybnMgYSBzaG9ydGVuZWQgc3RyaW5nIHNlZWQgdGhhdCBpcyBlcXVpdmFsZW50IHRvIHRoZSByZXN1bHQga2V5LlxuLy9cbmZ1bmN0aW9uIG1peGtleShzZWVkLCBrZXkpIHtcbiAgdmFyIHN0cmluZ3NlZWQgPSBzZWVkICsgJycsIHNtZWFyLCBqID0gMDtcbiAgd2hpbGUgKGogPCBzdHJpbmdzZWVkLmxlbmd0aCkge1xuICAgIGtleVttYXNrICYgal0gPVxuICAgICAgbWFzayAmICgoc21lYXIgXj0ga2V5W21hc2sgJiBqXSAqIDE5KSArIHN0cmluZ3NlZWQuY2hhckNvZGVBdChqKyspKTtcbiAgfVxuICByZXR1cm4gdG9zdHJpbmcoa2V5KTtcbn1cblxuLy9cbi8vIGF1dG9zZWVkKClcbi8vIFJldHVybnMgYW4gb2JqZWN0IGZvciBhdXRvc2VlZGluZywgdXNpbmcgd2luZG93LmNyeXB0byBhbmQgTm9kZSBjcnlwdG9cbi8vIG1vZHVsZSBpZiBhdmFpbGFibGUuXG4vL1xuZnVuY3Rpb24gYXV0b3NlZWQoKSB7XG4gIHRyeSB7XG4gICAgdmFyIG91dDtcbiAgICBpZiAobm9kZWNyeXB0byAmJiAob3V0ID0gbm9kZWNyeXB0by5yYW5kb21CeXRlcykpIHtcbiAgICAgIC8vIFRoZSB1c2Ugb2YgJ291dCcgdG8gcmVtZW1iZXIgcmFuZG9tQnl0ZXMgbWFrZXMgdGlnaHQgbWluaWZpZWQgY29kZS5cbiAgICAgIG91dCA9IG91dCh3aWR0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dCA9IG5ldyBVaW50OEFycmF5KHdpZHRoKTtcbiAgICAgIChnbG9iYWwuY3J5cHRvIHx8IGdsb2JhbC5tc0NyeXB0bykuZ2V0UmFuZG9tVmFsdWVzKG91dCk7XG4gICAgfVxuICAgIHJldHVybiB0b3N0cmluZyhvdXQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIGJyb3dzZXIgPSBnbG9iYWwubmF2aWdhdG9yLFxuICAgICAgICBwbHVnaW5zID0gYnJvd3NlciAmJiBicm93c2VyLnBsdWdpbnM7XG4gICAgcmV0dXJuIFsrbmV3IERhdGUsIGdsb2JhbCwgcGx1Z2lucywgZ2xvYmFsLnNjcmVlbiwgdG9zdHJpbmcocG9vbCldO1xuICB9XG59XG5cbi8vXG4vLyB0b3N0cmluZygpXG4vLyBDb252ZXJ0cyBhbiBhcnJheSBvZiBjaGFyY29kZXMgdG8gYSBzdHJpbmdcbi8vXG5mdW5jdGlvbiB0b3N0cmluZyhhKSB7XG4gIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KDAsIGEpO1xufVxuXG4vL1xuLy8gV2hlbiBzZWVkcmFuZG9tLmpzIGlzIGxvYWRlZCwgd2UgaW1tZWRpYXRlbHkgbWl4IGEgZmV3IGJpdHNcbi8vIGZyb20gdGhlIGJ1aWx0LWluIFJORyBpbnRvIHRoZSBlbnRyb3B5IHBvb2wuICBCZWNhdXNlIHdlIGRvXG4vLyBub3Qgd2FudCB0byBpbnRlcmZlcmUgd2l0aCBkZXRlcm1pbmlzdGljIFBSTkcgc3RhdGUgbGF0ZXIsXG4vLyBzZWVkcmFuZG9tIHdpbGwgbm90IGNhbGwgbWF0aC5yYW5kb20gb24gaXRzIG93biBhZ2FpbiBhZnRlclxuLy8gaW5pdGlhbGl6YXRpb24uXG4vL1xubWl4a2V5KG1hdGgucmFuZG9tKCksIHBvb2wpO1xuXG4vL1xuLy8gTm9kZWpzIGFuZCBBTUQgc3VwcG9ydDogZXhwb3J0IHRoZSBpbXBsZW1lbnRhdGlvbiBhcyBhIG1vZHVsZSB1c2luZ1xuLy8gZWl0aGVyIGNvbnZlbnRpb24uXG4vL1xuaWYgKCh0eXBlb2YgbW9kdWxlKSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHNlZWRyYW5kb207XG4gIC8vIFdoZW4gaW4gbm9kZS5qcywgdHJ5IHVzaW5nIGNyeXB0byBwYWNrYWdlIGZvciBhdXRvc2VlZGluZy5cbiAgdHJ5IHtcbiAgICBub2RlY3J5cHRvID0gcmVxdWlyZSgnY3J5cHRvJyk7XG4gIH0gY2F0Y2ggKGV4KSB7fVxufSBlbHNlIGlmICgodHlwZW9mIGRlZmluZSkgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIHNlZWRyYW5kb207IH0pO1xufSBlbHNlIHtcbiAgLy8gV2hlbiBpbmNsdWRlZCBhcyBhIHBsYWluIHNjcmlwdCwgc2V0IHVwIE1hdGguc2VlZHJhbmRvbSBnbG9iYWwuXG4gIG1hdGhbJ3NlZWQnICsgcm5nbmFtZV0gPSBzZWVkcmFuZG9tO1xufVxuXG5cbi8vIEVuZCBhbm9ueW1vdXMgc2NvcGUsIGFuZCBwYXNzIGluaXRpYWwgdmFsdWVzLlxufSkoXG4gIC8vIGdsb2JhbDogYHNlbGZgIGluIGJyb3dzZXJzIChpbmNsdWRpbmcgc3RyaWN0IG1vZGUgYW5kIHdlYiB3b3JrZXJzKSxcbiAgLy8gb3RoZXJ3aXNlIGB0aGlzYCBpbiBOb2RlIGFuZCBvdGhlciBlbnZpcm9ubWVudHNcbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykgPyBzZWxmIDogdGhpcyxcbiAgW10sICAgICAvLyBwb29sOiBlbnRyb3B5IHBvb2wgc3RhcnRzIGVtcHR5XG4gIE1hdGggICAgLy8gbWF0aDogcGFja2FnZSBjb250YWluaW5nIHJhbmRvbSwgcG93LCBhbmQgc2VlZHJhbmRvbVxuKTtcbiIsIi8qIChpZ25vcmVkKSAqLyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmFtZEQgPSBmdW5jdGlvbiAoKSB7XG5cdHRocm93IG5ldyBFcnJvcignZGVmaW5lIGNhbm5vdCBiZSB1c2VkIGluZGlyZWN0Jyk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uYW1kTyA9IHt9OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCIvLyBtb2R1bGUgZXhwb3J0cyBtdXN0IGJlIHJldHVybmVkIGZyb20gcnVudGltZSBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5yZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==