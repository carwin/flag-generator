import * as Utilities from './utilities.js'
import settings from './settings';

settings.flagHeight = 300;
settings.flagWidth = 500;

describe('Utilty functions', () => {
  const seed = Utilities.generateSeed('test');
  const multiplier = Utilities.generateSeedMultiplier('Fesses');

  describe('General data utilities', () => {
    test('getLastDigit() function the last digit of a given number string.', () => {
      expect(Utilities.getLastDigit(.2357)).toBe(7);
    });

    describe('pseudoShuffle() function', () => {
      test('pseudoShuffle() function predictably shuffles an array', () => {
        expect(Utilities.pseudoShuffle([1,2,3,4,5], 0.7243609520746538)).toEqual([1, 2, 5, 3, 4]);
      });
      test('function returns an array if the seed parameter is omitted', () => {
        expect(typeof Utilities.pseudoShuffle([1,2,3,4,5])).toHaveLength;
      });
    });

    describe('generateCount() function', () => {
      test('function returns a consistent number given the same inputs.', () => {
        expect(Utilities.generateCount(5, multiplier, seed)).toBe(5);
        expect(Utilities.generateCount(9, multiplier, seed)).toBe(5);
      });

      test('function works if the seed parameter is omitted', () => {
        expect(Utilities.generateCount(1, 1)).toBe(1);
      });

      test('function returns 1 if the generated number would be 0.', () => {
        expect(Utilities.generateCount(0, 0, 0)).toBe(1);
      });
    });
  });

  describe('Seed functions', () => {
    test('Consistent seed is generated given the same string.', () => {
      expect(Utilities.generateSeed('test')).toBe(0.8722025543160253);
    });

    test('Seed generation with no seed string produces a seed.', () => {
      expect(typeof Utilities.generateSeed()).toBe('number');
    });

    test('generateSeedMultiplier() produces a number.', () => {
      expect(typeof multiplier).toBe('number');
      expect(multiplier).toBe(0.6114237166379292);
    })

    test('modifySeed() provides the product of a seed and a seedMultiplier', () => {
      expect(Utilities.modifySeed(seed, multiplier)).toBe(0.5332853274209995);
    });
  });

  describe('Color functions', () => {

    describe('randomHex() function', () => {
      test('function produces a reproducable hex color given the same input.', () => {
        expect(Utilities.randomHex(seed, multiplier)).toBe('#888562');
      });

      test('function produces a hex color string if the seed parameter is omitted', () => {
        expect(typeof Utilities.randomHex(undefined, multiplier)).toMatch('string');
        expect(Utilities.randomHex(undefined, multiplier)).toMatch(/^#/);
      });
    });

    describe('hexToRgb() function', () => {
      test('function turns a hex color string into an object containing r, g, and b keys representing the same color', () => {
        expect(Utilities.hexToRgb('#ffffff')).toEqual({r: 255, g: 255, b: 255});
      });
      test('function returns null if hex string parameter cannot be evaluated', () => {
        expect(Utilities.hexToRgb('ffff')).toBe(null);
      });
    });

    test('convertHex() function turns a hex color string into an rgb() color string', () => {
      expect(Utilities.convertHex('#ffffff')).toBe('rgb(255, 255, 255)');
    });

    test('generateColor() function returns an object with color keys.', () => {
      const colorObj = Utilities.generateColor();
      expect(typeof colorObj).toBe('object');
      expect(typeof colorObj.color).toBe('string');
      expect(typeof colorObj.complement).toBe('string');
      expect(typeof colorObj.splitComplement).toBe('object');
      expect(typeof colorObj.triad).toBe('object');
      expect(typeof colorObj.tetrad).toBe('object');
      expect(typeof colorObj.analogous).toBe('object');
      expect(typeof colorObj.monochromatic).toBe('object');
    });
  });

  describe('Canvas and Dimension utilties', () => {
    test('processAspectRatioString() function returns an object containing h and w keys.', () => {
      expect(Utilities.processAspectRatioString('3:5')).toEqual({h: 3, w: 5});
      expect(() => {
        Utilities.processAspectRatioString('3:5:8')
      }).toThrow('Could not process given aspect ratio string.');
    });

    test('setDimensionsFromAspectObject() function returns an object containing h and w keys.', () => {
      expect(Utilities.setDimensionsFromAspectObject({h: 3, w: 5})).toEqual({h: 300, w: 500});
    });

    test('generateCanvas() function creates a canvas object', () => {
      document.body.innerHTML = `
        <div class="test" id="test">
        </div>
      `;
      const testMarkup = document.getElementById('test');
      Utilities.generateCanvas(document, 'test', 'testCanvas', {h: 300, w: 500});
      expect(testMarkup.innerHTML).toContain('canvas');
    });
  });

});
