/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class MxMechanicalKeyboardTopViewGraphiteUs2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "mx-mechanical-keyboard-top-view-graphite-us",
        "./MxMechanicalKeyboardTopViewGraphiteUs2/costumes/mx-mechanical-keyboard-top-view-graphite-us.png",
        { x: 429, y: 344 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenbackdropswitchesto() {
    this.visible = true;
  }

  *whenGreenFlagClicked() {
    this.goto(2, 1);
    this.visible = false;
  }

  *whenbackdropswitchesto2() {
    this.visible = false;
  }
}
