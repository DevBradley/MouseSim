/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class MxAnywhere3sMouseTopViewPaleGrey extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "mx-anywhere-3s-mouse-top-view-pale-grey",
        "./MxAnywhere3sMouseTopViewPaleGrey/costumes/mx-anywhere-3s-mouse-top-view-pale-grey.png",
        { x: 178, y: 271 }
      )
    ];

    this.sounds = [];

    this.triggers = [
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
      new Trigger(Trigger.BROADCAST, { name: "M187" }, this.whenIReceiveM187),
      new Trigger(Trigger.BROADCAST, { name: "Lift" }, this.whenIReceiveLift),
      new Trigger(
        Trigger.BROADCAST,
        { name: "MxMaster" },
        this.whenIReceiveMxmaster
      ),
      new Trigger(Trigger.BROADCAST, { name: "Pop" }, this.whenIReceivePop)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-2, 33);
    this.visible = false;
  }

  *whenbackdropswitchesto() {
    this.visible = true;
  }

  *whenbackdropswitchesto2() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.goto(0, 33);
    this.broadcast("MxAnywhere");
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

  *whenIReceiveM187() {
    this.visible = false;
  }

  *whenIReceiveLift() {
    this.visible = false;
  }

  *whenIReceiveMxmaster() {
    this.visible = false;
  }

  *whenIReceivePop() {
    this.visible = false;
  }
}
