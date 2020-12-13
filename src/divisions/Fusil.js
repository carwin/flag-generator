import Division from '../division';
import * as Utilities from '../utilities';
import settings from '../settings';

export default class Fusil extends Division {

  constructor(params = {seed, color}) {
    const count = 1;
    const limit = 1;
    super({seed: params.seed, count, limit, color: params.color});
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.moveTo(settings.flagWidth / 2, 0); // top center
    ctx.lineTo(settings.flagWidth - (settings.flagWidth / 4), settings.flagHeight / 2); // right center
    ctx.lineTo(settings.flagWidth / 2, settings.flagHeight); // bottom center
    ctx.lineTo(0 + (settings.flagWidth / 4), settings.flagHeight / 2); // left center
    ctx.fillStyle = this.color.color;
    ctx.fill();
  }

}
