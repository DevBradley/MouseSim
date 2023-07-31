/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite5 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite5/costumes/costume1.svg", {
        x: 68.75576477050785,
        y: 21.32805786132812
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite5/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.BROADCAST, { name: "Ergo" }, this.whenIReceiveErgo),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Gaming1" },
        this.whenIReceiveGaming1
      ),
      new Trigger(Trigger.BROADCAST, { name: "M171" }, this.whenIReceiveM171),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Gaming2?" },
        this.whenIReceiveGaming2
      ),
      new Trigger(Trigger.BROADCAST, { name: "M187" }, this.whenIReceiveM187),
      new Trigger(Trigger.BROADCAST, { name: "Lift" }, this.whenIReceiveLift),
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

  *whenGreenFlagClicked() {
    this.goto(205, -100);
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    this.visible = false;
  }

  *whenbackdropswitchesto() {
    this.visible = true;
  }

  *whenbackdropswitchesto2() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.stage.costume = "backdrop3";
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

  *whenIReceiveGaming2() {
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

  *whenIReceiveMxmaster() {
    this.visible = false;
  }

  *whenIReceivePop() {
    this.visible = false;
  }
}
