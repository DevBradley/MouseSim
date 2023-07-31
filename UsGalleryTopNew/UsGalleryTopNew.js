/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class UsGalleryTopNew extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "us-gallery-top-new",
        "./UsGalleryTopNew/costumes/us-gallery-top-new.png",
        { x: 453, y: 211 }
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
    this.goto(8, -70);
    this.visible = false;
  }

  *whenbackdropswitchesto2() {
    this.visible = false;
  }
}
