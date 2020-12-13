import Division from './division';
import * as Utilities from './utilities';
import settings from './settings';

describe('Division class', () => {
  // Generate a settings object for the tests.
  Utilities.generateSeed('test');

  it('should be instantiated with all possible options', () => {
    const testDivision = new Division(5, 1, '#ffffff', .123);
    expect(testDivision.count).toEqual(5);
    expect(testDivision.limit).toBe(1);
    expect(testDivision.color.color).toBe('#ffffff');
    expect(testDivision.seed).toBe(.123);
  });

  it('should have a seed if it is not given one during instantiation.', () => {
    const testDivision = new Division(5, 1, '#ffffff');
    expect(typeof testDivision.seed).toBe('number');
    expect(testDivision.seed.toString()).toMatch(/^0./);
  });

  it('should have a color object if it is not given a hex color string during instantiation.', () => {
    const testDivision = new Division(5, 1);
    expect(typeof testDivision.color).toBe('object');
    expect(testDivision.color.color).toMatch(/^#/);
  });

  it('should have a count instance variable if not provided one during instantiation', () => {
    const testDivision = new Division();
    expect(typeof testDivision.count).toBe('number');
  });

});
