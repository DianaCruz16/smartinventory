 
import * as LoadingConstants from '../redux/LoadingStateConstants';
// import {getSmoke, getEmptyEffect, getGrayScale, getSepia, getSnow, getBubbles, getThermal, getSinCity, getBarrel, getPinCushion, getFireWorks} from '../effects/effects.js'
// import * as EffectsConstants from '../redux/EffectsConstants';

var EffectItems = [
  // {
  //   "effect": getPinCushion,
  //   "loading": LoadingConstants.NONE,
  //   "postProcessEffects": EffectsConstants.EFFECT_PINCUSHION_DISTORT,
  //   "icon_img":require("../res/icon_effects_pincushion.png"),
  //   "selected": false,
  //   "name": "effect_pincushion",
  // },
]

module.exports = {
  getInitEffectArray: function() {
    return EffectItems;
  }
};
