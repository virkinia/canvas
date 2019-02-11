import * as Hammer from 'hammerjs';
import { HammerGestureConfig } from '@angular/platform-browser';

/* export class MyHammerConfig extends HammerGestureConfig {
  overrides = {
    'swipe': { direction: Hammer.DIRECTION_ALL }
  }
} */

export class CustomHammerConfig extends HammerGestureConfig {
  overrides = {
    rotate: {
      direction: Hammer.DIRECTION_ALL,
      enable: true
    }
  };
}
