/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class M550MediumOffWhiteTop extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "m550-medium-off-white-top",
        "./M550MediumOffWhiteTop/costumes/m550-medium-off-white-top.png",
        { x: 386, y: 331.5 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Hide" }, this.whenIReceiveHide),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveHide() {
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.stage.costume = "backdrop1";
    this.goto(148, -7);
    this.visible = true;
    this.moveAhead();
  }
}
