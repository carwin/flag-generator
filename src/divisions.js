import { settings, randomHex } from "./index";

export class Fesses {
   constructor(fessCount, seedColor) {
      this.fessCount = fessCount;
      this.seedColor = seedColor;
   }
   drawFesses(ctx, containerWidth, gapPercentage) {

       // temp
       containerWidth = 500;

       // How many fesses should we draw?
       const fessCount = this.fessCount;

       // What percentage of the whole WIDTH should each fess take up?
       let fessWidthPercentage = ((100 / fessCount)) / 100;

       // How wide is each fess in relation to the container?
       let fessWidth = (fessWidthPercentage * containerWidth);
       // How much space between each fess?
       let fessGap = containerWidth - (fessWidth * fessCount);

       // Modify things a bit if we're given a gapPercentage.
       let gapWidth;
       let numGaps;
       if (gapPercentage) {
           numGaps = fessCount * 2;
           gapPercentage = gapPercentage / 100;
           console.log('gap percentage: ', gapPercentage);
           console.log('fess width percentage', fessWidthPercentage)
           let newFessWidthPercentage = fessWidthPercentage - gapPercentage;
           console.log('NEW fessWidthPercentage', newFessWidthPercentage)
           fessWidth = (newFessWidthPercentage * containerWidth);

           gapWidth = (containerWidth * gapPercentage);
           console.log((gapWidth * numGaps) + (fessWidth * fessCount))
           console.log('gap width', gapWidth)
           // fessWidth = fessWidth - gapWidth;
           let newWidths = (fessWidthPercentage - (gapPercentage / 100)) / 100;
           console.log(newWidths);

           fessGap = containerWidth - (fessWidth * fessCount);

       }
       console.log('fess count', fessCount)
       console.log('fess width', fessWidth);
       console.log('fess gap', fessGap);

       // Figure out x/y coordinates for each fess
       let incrementXpos = 0;
       //incrementXpos = gapWidth / 2;
       for (let i = 0; i < fessCount; i++) {
           ctx.fillStyle = randomHex(settings.seed, i + 2);
           let ypos = 0; // start at the top always
           let xpos = (incrementXpos);
           let w = fessWidth;
           let h = 300;
           console.log('xpos', xpos)
           console.log('ypos', ypos)
           console.log('w', w)
           console.log('h', h)
           console.log('Iteration: ', i)
           if (i !== (fessCount - 1)) {
               incrementXpos = incrementXpos + (fessGap/fessCount) + fessWidth;
               // incrementXpos = incrementXpos + (gapWidth) + fessWidth;
           } else {
               console.log('This is the last one')
           }
           ctx.fillRect(xpos, ypos, w, h);
       }

   }
}