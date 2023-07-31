/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class K780WhiteGallery1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "k780-white-gallery-1",
        "./K780WhiteGallery1/costumes/k780-white-gallery-1.png",
        { x: 386, y: 331.5 }
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
    this.goto(72, 101);
    this.visible = false;
  }

  *whenbackdropswitchesto2() {
    this.visible = false;
  }
}
