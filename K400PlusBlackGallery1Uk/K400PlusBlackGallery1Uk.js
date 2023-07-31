/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class K400PlusBlackGallery1Uk extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "k400-plus-black-gallery-1-uk",
        "./K400PlusBlackGallery1Uk/costumes/k400-plus-black-gallery-1-uk.png",
        { x: 386, y: 193 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenbackdropswitchesto() {
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.goto(66, -100);
    this.visible = false;
  }

  *whenbackdropswitchesto2() {
    this.visible = true;
  }
}
