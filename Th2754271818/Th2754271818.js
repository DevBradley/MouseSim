/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Th2754271818 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "th-2754271818",
        "./Th2754271818/costumes/th-2754271818.png",
        { x: 131, y: 105 }
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
      new Trigger(Trigger.BROADCAST, { name: "M187" }, this.whenIReceiveM187),
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
    this.goto(-62, -62);
    this.visible = false;
  }

  *whenbackdropswitchesto() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.goto(0, -62);
    this.broadcast("Gaming2?");
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

  *whenIReceiveM187() {
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
