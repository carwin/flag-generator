import Bend from './Bend.js';
import * as Utilities from '../utilities';
import settings from '../settings';
import 'jest-canvas-mock';

let canvas;
let ctx;

settings.flagHeight = 300;
settings.flagWidth = 500;

describe('Bend class', () => {
  // Generate a settings object for the tests.
  Utilities.generateSeed('test');
  const expectedDirections = ['sinister', 'dexter'];

  it('should be instantiated given all possible options', () => {
    const newBend = new Bend(5, 'dexter', true, '#ffffff', 20, true, 10, '#000000');
    expect(newBend.limit).toBe(1);
    expect(newBend.seed).toBe(0.8722025543160253);
    expect(newBend.seedMultiplier).toBe(0.57653557072);
    expect(newBend.color.color).toBe('#ffffff');
    expect(newBend.count).toEqual(5);
    expect(newBend.party).toBe(true);
    expect(newBend.border).toBe(true);
    expect(newBend.width).toBe(20);
    expect(newBend.direction).toBe('dexter');
    expect(newBend.borderWidth).toBe(10);
    expect(newBend.borderColor).toBe('#000000');
  });

  it('should not have a party if it is not given one during instantiation.', () => {
    const newBend = new Bend(5, 'dexter', undefined, '#ffffff', 20, true, 10, '#000000');
    expect(newBend.party).toBe(false);
  });

  it('should have a borderWidth if it is not given a hex color string during instantiation.', () => {
    const newBend = new Bend(5, 'dexter', undefined, '#ffffff', 20, true, undefined, '#000000');
    expect(typeof newBend.borderWidth).toBe('number');
  });

  it('should have a borderColor instance variable if not provided one during instantiation', () => {
    const newBend = new Bend(5, 'dexter', undefined, '#ffffff', 20, true);
    expect(typeof newBend.borderColor).toBe('object');
    expect(newBend.borderColor.color).toMatch(/^#/);
  });

  it('should be able to generate a direction if none is passed during instantiation', () => {
    const newBend = new Bend(5);
    expect(
      newBend.direction === expectedDirections[0] ||
      newBend.direction === expectedDirections[1]
    ).toEqual(true);
  });

  describe('should have a generateDirection() method', () => {
    const newBend = new Bend(1, 'dexter', undefined, '#ffffff', 20, true);
    it('which should provide a direction, even if no seed value is given to it directly as a parameter', () => {
      expect(typeof newBend.generateDirection()).toBe('string');
      expect(newBend.generateDirection()).toBe('dexter');
    });
    it('which should provide a direction string of dexter if passed a seed that generates a number from 0 - 5 when multiplied by the seedMultiplier', () => {
      expect(newBend.generateDirection(.20983823471132958987123974)).toBe('dexter');
    });
    it('which should provide a direction string of sinister if passed a seed that generates a number from 6 - 9 when multiplied by the seedMultiplier', () => {
      expect(newBend.generateDirection(.42379)).toBe('sinister');
    });

    it('which should throw an error if a digit outside of 0 - 9 is somehow generated.', () => {
      const newBend = new Bend(1, 'dexter', undefined, '#ffffff', 20, true);
      expect(() => {
        newBend.generateDirection('thisisnotaseed!');
      }).toThrow();
    });

  });

  describe('should have a drawInstructions() method', () => {
    const newBend = new Bend(5, 'dexter', undefined, '#ffffff', 20, true);
    it('which should return the correct instructions object based on the given string', () => {
      expect(newBend.drawInstructions('dexter')).toEqual([{ moveTo: [0, 0] }, { lineTo: [500, 300]}]);
      expect(newBend.drawInstructions('sinister')).toEqual([{ moveTo: [500, 0] }, { lineTo: [0, 300]}]);
    });
    it('which should throw an error if passed a string other than \'dexter\' or \'sinister\'.', () => {
      expect(() => {
        newBend.drawInstructions('left');
      }).toThrow();
    });
  });

  describe('should have a drawInstructionsDexter() method', () => {
    const newBend = new Bend(5, 'dexter', undefined, '#ffffff', 20, true);
    it('which should return an array of objects containing x,y coordinate pairs', () => {
      expect(newBend.drawInstructionsDexter()).toHaveLength(2);
      expect(newBend.drawInstructionsDexter()).toEqual([
        { moveTo: [0, 0] },
        { lineTo: [500, 300]}
      ]);
    });
    it('which should return an array of objects containing four pairs of x,y coordinates if the bend is a party (half the flag, diagonally)', () => {
      const testPartyDivision = new Bend(5, 'dexter', undefined, '#ffffff', 20, true);
      expect(testPartyDivision.drawInstructionsDexter(true)).toHaveLength(4);
      expect(testPartyDivision.drawInstructionsDexter(true)).toEqual([
        {moveTo: [0, 0]},
        {lineTo: [500, 300]},
        {lineTo: [0, 300]},
        {lineTo: [0, 0]}
      ]);
    });
  });


  describe('should have a drawInstructionsSinister() method', () => {
    const newBend = new Bend(5, 'sinister', undefined, '#ffffff', 20, true);
    it('which should return an array of objects containing x,y coordinate pairs', () => {
      expect(newBend.drawInstructionsSinister()).toHaveLength(2);
      expect(newBend.drawInstructionsSinister()).toEqual([
        { moveTo: [500, 0] },
        { lineTo: [0, 300]}
      ]);
    });
    it('which should return an array of objects containing four pairs of x,y coordinates if the bend is a party (half the flag, diagonally)', () => {
      const testPartyDivision = new Bend(5, 'sinister', undefined, '#ffffff', 20, true);
      expect(testPartyDivision.drawInstructionsSinister(true)).toHaveLength(4);
      expect(testPartyDivision.drawInstructionsSinister(true)).toEqual([
        {moveTo: [500, 0]},
        {lineTo: [0, 300]},
        {lineTo: [500, 300]},
        {lineTo: [500, 0]}
      ]);
    });
  });

  // @todo: This sort of sucks, I'm not sure if I'm even testing this function in a way that's worthwhile.
  describe('should have a shiftStep() method', () => {
    const twoBends = new Bend(2, 'dexter');
    const drawSteps = twoBends.drawInstructionsSinister(true);
    const ctxMock = { lineTo(step) {return step}, moveTo(step) { return step } };
    it('which should modify the drawn instructions to shift the position of the Bend', () => {
      for (let i = 0; i < drawSteps.length; i++) {
        const step = Object.keys(drawSteps[i]);
        const stepParams = Object.values(drawSteps[i])[0];
        const stepRun = ('logit', ctxMock[step](...stepParams.map(twoBends.shiftStep(1, twoBends.direction, 'sinister'))));
        const stepRun2 = ('logit', ctxMock[step](...stepParams.map(twoBends.shiftStep(1, twoBends.direction, 'dexter'))));
        switch (i) {
        case 0 || 2 || 3:
          expect(stepRun).toBe(501);
          expect(stepRun2).toBe(501);
          break;
        case 1:
          expect(stepRun).toBe(1);
          expect(stepRun2).toBe(1);
          break;
        }
      }
    });
  });

  describe('should have a draw() method', () => {
    const singleBendDexter = new Bend(1, 'dexter', false, '#ffffff', 20, true, 15, '#000000');
    const twoBendDexter = new Bend(2, 'dexter');
    const threeBendSinister = new Bend(3, 'sinister');
    const partyBend = new Bend(2, 'sinister', true);
    // Mock the canvas.
    canvas = document.createElement('canvas');
    canvas.width = 500;
    canvas.height = 300;
    ctx = canvas.getContext('2d');

    it('which should not throw an error when drawing on a canvas', () => {
      expect(() => {
        threeBendSinister.draw(ctx)
      }).not.toThrow();
    });

    it('which should draw 3 Bends on a canvas when called with a count of 3', () => {
      // Make sure the mocked canvas paths match the Bend's drawInstructions.
      ctx.__clearDrawCalls();
      threeBendSinister.draw(ctx);
      const drawStepsSinister = threeBendSinister.drawInstructions('sinister');
      const path = ctx.__getPath();
      for (let i = 0; i < drawStepsSinister.length; i++) {
        const step = Object.keys(drawStepsSinister[i]);
        expect(path[i+1].props.x).toBe(Object.values(drawStepsSinister[i])[0][0]);
        expect(path[i+1].props.y).toBe(Object.values(drawStepsSinister[i])[0][1]);
      }
    });

    it('which should draw 2 Bends on a canvas when called with a count of 2', () => {
      ctx.__clearDrawCalls();
      twoBendDexter.draw(ctx);
      const drawStepsDexter = twoBendDexter.drawInstructions('dexter');
      const path = ctx.__getPath();
      for (let i = 0; i < drawStepsDexter.length; i++) {
        const step = Object.keys(drawStepsDexter[i]);
        if (i === 0 || i === 2 || i === 3) {
          expect(path[i+1].props.x).toBe(Object.values(drawStepsDexter[i])[0][0] - 70);
          expect(path[i+1].props.y).toBe(Object.values(drawStepsDexter[i])[0][1] + 70);
        } else if (i === 1) {
          expect(path[i+1].props.x).toBe(Object.values(drawStepsDexter[i])[0][0] - 70);
          expect(path[i+1].props.y).toBe(Object.values(drawStepsDexter[i])[0][1] + 70);
        }
      }
    });

    it('which should draw a party if that option is passed, ignoring the count parameter', () => {
      ctx.__clearDrawCalls();
      partyBend.draw(ctx);
      const path = ctx.__getPath();
      const drawStepsParty = partyBend.drawInstructions('sinister');
      for (let i = 0; i < drawStepsParty.length; i++) {
        const step = Object.keys(drawStepsParty[i]);
        expect(path[i+1].props.x).toBe(Object.values(drawStepsParty[i])[0][0]);
        expect(path[i+1].props.y).toBe(Object.values(drawStepsParty[i])[0][1]);
      }
    });

    it('which should draw a border if that option is passed without a party option', () => {
      // Basically we just need to watch the events and make sure the draw steps happen twice.
      // That's the signal that a border was drawn, and then the main Bend was drawn on top.
      ctx.__clearEvents();
      ctx.__clearDrawCalls();
      singleBendDexter.draw(ctx);
      const events = ctx.__getEvents();
      const drawSteps = singleBendDexter.drawInstructions('dexter');
      for (let i = 1; i < events.length; i++) {
        if (Object.keys(events[i]) === 'moveTo' || Object.keys(events[i] === 'lineTo')) {
          let step;
          if (i < drawSteps.length) {
            step = Object.keys(drawSteps[i]);
            expect(events[i+1].props.x).toBe(Object.values(drawSteps[i])[0][0]);
            expect(events[i+1].props.y).toBe(Object.values(drawSteps[i])[0][1]);
          }
        }
      }
    });

  });

});
