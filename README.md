# Flag Generator

[![codecov](https://codecov.io/gh/carwin/flag-generator/branch/master/graph/badge.svg?token=29CLOQ51S7)](https://codecov.io/gh/carwin/flag-generator)

The `flag-generator` package is a vexillography tool that provides a number of classes and functions to facilitate the creation of flags using the Canvas API.

## Documentation

The documentation for this package is hosted on GitHub Pages and can be found here: [Documentation](https://carwin.github.io/flag-generator).

## Usage

An implementation of the flag-generator package can be found at [carwin's generators project](https://github.com/carwin/generators).

At the moment this package is only published in the GitHub NPM package registry.

Add the package to your project:

``` shell
npm install --save @carwin/flag-generator
```

Import the package:

``` javascript
// YourFile.js
import flagGenerator from '@carwin/flag-generator';
```

Use the package to do things:

``` javascript
// Generate a random seed:
const seed = flagGenerator.Utilities.generateSeed();

// Generate a seed from a string:
const seedFromString = flagGenerator.Utilities.generateSeed('my cool flag');

// Instantiate a flag
const flagOptions = {
  id: "my_flag_canvas_id",
  aspectRatio: "3:5",
  divisionCount: 3,
  color: flagGenerator.Utilities.generateColor(seedFromString),
  seed: seedFromString,
}
const coolFlag = new flagGenerator.Flag(flagOptions);

// Create a canvas and draw the flag:
coolFlag.draw();
```
