/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class M550MediumOffWhiteTop2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "m550-medium-off-white-top",
        "./M550MediumOffWhiteTop2/costumes/m550-medium-off-white-top.png",
        { x: 156, y: 286 }
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
      new Trigger(
        Trigger.BROADCAST,
        { name: "Gaming2?" },
        this.whenIReceiveGaming2
      ),
      new Trigger(Trigger.BROADCAST, { name: "Lift" }, this.whenIReceiveLift),
      new Trigger(Trigger.BROADCAST, { name: "M171" }, this.whenIReceiveM171),
      new Trigger(Trigger.BROADCAST, { name: "M187" }, this.whenIReceiveM187),
      new Trigger(
        Trigger.BROADCAST,
        { name: "MxAnywhere" },
        this.whenIReceiveMxanywhere
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "MxMaster" },
        this.whenIReceiveMxmaster
      ),
      new Trigger(Trigger.BROADCAST, { name: "Pop" }, this.whenIReceivePop)
    ];
  }

  *whenIReceiveHide() {
    this.visible = true;
  }

  *whenGreenFlagClicked() {
    this.goto(-150, -2);
    this.visible = false;
  }

  *whenbackdropswitchesto() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.goto(0, 0);
    this.moveBehind();
    this.broadcast("Mx550");
  }

  *whenIReceiveErgo() {
    this.visible = false;
  }

  *whenIReceiveGaming1() {
    this.visible = false;
  }

  *whenIReceiveGaming2() {
    this.visible = false;
  }

  *whenIReceiveLift() {
    this.visible = false;
  }

  *whenIReceiveM171() {
    this.visible = false;
  }

  *whenIReceiveM187() {
    this.visible = false;
  }

  *whenIReceiveMxanywhere() {
    this.visible = false;
  }

  *whenIReceiveMxmaster() {
    this.visible = false;
  }

  *whenIReceivePop() {
    this.visible = false;
  }
}
