import Cross from './Cross.js';
import * as Utilities from '../utilities';
import settings from '../settings';
import 'jest-canvas-mock';

let canvas;
let ctx;
// Mock the canvas.
canvas = document.createElement('canvas');
canvas.width = 500;
canvas.height = 300;
ctx = canvas.getContext('2d');
settings.flagHeight = 300;
settings.flagWidth = 500;

describe('Cross class', () => {
  Utilities.generateSeed('test');
  // 0.8722025543160253

  it('should be instantiated given all possible options', () => {
    const newCross = new Cross('nordic', '#ffffff');
    expect(newCross.crossType).toBe('nordic');
    expect(newCross.color.color).toBe('#ffffff');
  });

  it('should be instantiated given no options', () => {
    const newCross = new Cross();
    expect(newCross.crossType).toBe('symmetric');
    expect(newCross.color.color).toBe('#82b431');
    expect(newCross.crossWidth).toBe(53);
  });

  describe('should provide a generateCrossType() method', () => {
    const newCross = new Cross();

    it('which returns a reproducable number given the same input', () => {
      expect(newCross.generateCrossWidth(newCross.seed, newCross.seedMultiplier)).toBe(53);
    });

  });

  describe('should provide a draw() method', () => {
    let newCross;
    let events;
    it('which draws the appropriate cross on the canvas by calling the appropriate draw method.', () => {
      // ctx.__clearEvents();
      newCross = new Cross('nordic', '#ffffff', 20, false, 0, '#000000');
      newCross.draw(ctx);
      events = ctx.__getEvents();
      expect(events).toBeDefined;
      expect(events.length).toBeGreaterThan(0);
      for (let i = 1; i < events.length; i++) {
        switch(i) {
        case 1:
          expect(events[i].props.x).toBe(0);
          expect(events[i].props.y).toBe(150);
          break;
        case 2:
          expect(events[i].props.x).toBe(500);
          expect(events[i].props.y).toBe(150);
          break;
        case 3:
          expect(events[i].props.x).toBeGreaterThan(166.6);
          expect(events[i].props.x).toBeLessThan(166.7);
          expect(events[i].props.y).toBe(0);
          break;
        case 4:
          expect(events[i].props.x).toBeGreaterThan(166.6);
          expect(events[i].props.x).toBeLessThan(166.7);
          expect(events[i].props.y).toBe(300);
          break;
        }
      }

      ctx.__clearEvents();
      newCross = new Cross('greek');
      newCross.draw(ctx);
      events = ctx.__getEvents();
      expect(events).toBeDefined;
      expect(events.length).toBeGreaterThan(0);
      for (let i = 1; i < events.length; i++) {
        switch(i) {
        case 1:
          expect(events[i].props.x).toBe(250);
          expect(events[i].props.y).toBe(150);
          break;
        case 2:
          expect(events[i].props.x).toBe(350);
          expect(events[i].props.y).toBe(150);
          break;
        case 3:
          expect(events[i].props.x).toBe(250);
          expect(events[i].props.y).toBe(150);
          break;
        case 4:
          expect(events[i].props.x).toBe(150);
          expect(events[i].props.y).toBe(150);
          break;
        case 5:
          expect(events[i].props.x).toBe(250);
          expect(events[i].props.y).toBe(150);
          break;
        case 6:
          expect(events[i].props.x).toBe(250);
          expect(events[i].props.y).toBe(250);
          break;
        case 7:
          expect(events[i].props.x).toBe(250);
          expect(events[i].props.y).toBe(150);
          break;
        case 8:
          expect(events[i].props.x).toBe(250);
          expect(events[i].props.y).toBe(50);
          break;

        }
      }

      ctx.__clearEvents();
      newCross = new Cross('symmetric');
      newCross.draw(ctx);
      events = ctx.__getEvents();
      expect(events).toBeDefined;
      expect(events.length).toBeGreaterThan(0);
      for (let i = 1; i < events.length; i++) {
        switch(i) {
        case 1:
          expect(events[i].props.x).toBe(0);
          expect(events[i].props.y).toBe(150);
          break;
        case 2:
          expect(events[i].props.x).toBe(500);
          expect(events[i].props.y).toBe(150);
          break;
        case 3:
          expect(events[i].props.x).toBe(250);
          expect(events[i].props.y).toBe(0);
          break;
        case 4:
          expect(events[i].props.x).toBe(250);
          expect(events[i].props.y).toBe(300);
          break;
        }
      }

    });

  });



});
