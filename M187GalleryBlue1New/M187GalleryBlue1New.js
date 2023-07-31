/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class M187GalleryBlue1New extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "m187-gallery-blue-1-new",
        "./M187GalleryBlue1New/costumes/m187-gallery-blue-1-new.png",
        { x: 35, y: 8 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Hide" }, this.whenIReceiveHide),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.BROADCAST, { name: "Ergo" }, this.whenIReceiveErgo),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Gaming1" },
        this.whenIReceiveGaming1
      ),
      new Trigger(Trigger.BROADCAST, { name: "M171" }, this.whenIReceiveM171),
      new Trigger(Trigger.BROADCAST, { name: "Mx550" }, this.whenIReceiveMx550),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Gaming2?" },
        this.whenIReceiveGaming2
      ),
      new Trigger(Trigger.BROADCAST, { name: "Lift" }, this.whenIReceiveLift),
      new Trigger(
        Trigger.BROADCAST,
        { name: "MxAnywhere" },
        this.whenIReceiveMxanywhere
      ),
      new Trigger(Trigger.BROADCAST, { name: "Pop" }, this.whenIReceivePop),
      new Trigger(
        Trigger.BROADCAST,
        { name: "MxMaster" },
        this.whenIReceiveMxmaster
      )
    ];
  }

  *whenIReceiveHide() {
    this.visible = true;
  }

  *whenGreenFlagClicked() {
    this.goto(131, 146);
    this.visible = false;
  }

  *whenbackdropswitchesto() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.goto(0, 0);
    this.broadcast("M187");
    this.moveBehind();
  }

  *whenIReceiveErgo() {
    this.visible = false;
  }

  *whenIReceiveGaming1() {
    this.visible = false;
  }

  *whenIReceiveM171() {
    this.visible = false;
  }

  *whenIReceiveMx550() {
    this.visible = false;
  }

  *whenIReceiveGaming2() {
    this.visible = false;
  }

  *whenIReceiveLift() {
    this.visible = false;
  }

  *whenIReceiveMxanywhere() {
    this.visible = false;
  }

  *whenIReceivePop() {
    this.visible = false;
  }

  *whenIReceiveMxmaster() {
    this.visible = false;
  }
}
