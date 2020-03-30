import * as LoadingConstants from '../redux/LoadingStateConstants';

var POSITION_OFFSET = .05 // 5 cm


var PortalItems = [
  //     {
  //   "name": "portal_ship",
  //   "selected": false,
  //   "loading": LoadingConstants.NONE,
  //   "icon_img":require("../res/icon_portal_shipdoor.png"),
  //   "obj": require("../res/portal_ship/portal_ship.vrx"),
  //   "materials": null,
  //   "portal360Image": {source:require("../res/360_waikiki.jpg"), width:2, height:1},
  //   "animation":null,
  //   "scale": [1, 1, 1],
  //   "portalScale": [.07, .07, .07],
  //   "position": [0, .5, 0],
  //   "frameType": "VRX",
  //   "physics": undefined,
  //   "ref_pointer": undefined,
  //   "resources": [ require('../res/portal_ship/portal_ship_normal.png'), require('../res/portal_ship/portal_ship_diffuse.png')],
  // },
]


module.exports = {
  getPortalArray: function() {
    return PortalItems;
  }
};
