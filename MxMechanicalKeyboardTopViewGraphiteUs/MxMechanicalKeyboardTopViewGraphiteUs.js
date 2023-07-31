/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class MxMechanicalKeyboardTopViewGraphiteUs extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "mx-mechanical-keyboard-top-view-graphite-us",
        "./MxMechanicalKeyboardTopViewGraphiteUs/costumes/mx-mechanical-keyboard-top-view-graphite-us.png",
        { x: 345, y: 110 }
      )
    ];

    this.sounds = [];

    this.triggers = [];
  }

  *whenbackdropswitchesto() {
    this.visible = false;
  }
}
