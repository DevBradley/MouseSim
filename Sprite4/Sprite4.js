/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite4/costumes/costume1.svg", {
        x: 28.6820068359375,
        y: 32.86146545410156
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite4/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Hide" }, this.whenIReceiveHide),
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
      new Trigger(Trigger.BROADCAST, { name: "Lift" }, this.whenIReceiveLift),
      new Trigger(Trigger.BROADCAST, { name: "M187" }, this.whenIReceiveM187),
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
      ),
      new Trigger(Trigger.BROADCAST, { name: "Ergo" }, this.whenIReceiveErgo2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Gaming1" },
        this.whenIReceiveGaming3
      ),
      new Trigger(Trigger.BROADCAST, { name: "M171" }, this.whenIReceiveM172),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Gaming2?" },
        this.whenIReceiveGaming4
      ),
      new Trigger(Trigger.BROADCAST, { name: "M187" }, this.whenIReceiveM188),
      new Trigger(Trigger.BROADCAST, { name: "Lift" }, this.whenIReceiveLift2),
      new Trigger(Trigger.BROADCAST, { name: "M187" }, this.whenIReceiveM189),
      new Trigger(
        Trigger.BROADCAST,
        { name: "MxAnywhere" },
        this.whenIReceiveMxanywhere2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "MxMaster" },
        this.whenIReceiveMxmaster2
      ),
      new Trigger(Trigger.BROADCAST, { name: "Pop" }, this.whenIReceivePop2),
      new Trigger(Trigger.BROADCAST, { name: "Mx550" }, this.whenIReceiveMx550)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(172, -95);
    this.visible = false;
  }

  *whenIReceiveHide() {
    this.visible = true;
  }

  *whenbackdropswitchesto() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.stage.costume = "backdrop2";
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

  *whenIReceiveLift() {
    this.visible = false;
  }

  *whenIReceiveM187() {
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

  *whenIReceiveErgo2() {
    this.visible = false;
  }

  *whenIReceiveGaming3() {
    this.visible = false;
  }

  *whenIReceiveM172() {
    this.visible = false;
  }

  *whenIReceiveGaming4() {
    this.visible = false;
  }

  *whenIReceiveM188() {
    this.visible = false;
  }

  *whenIReceiveLift2() {
    this.visible = false;
  }

  *whenIReceiveM189() {
    this.visible = false;
  }

  *whenIReceiveMxanywhere2() {
    this.visible = false;
  }

  *whenIReceiveMxmaster2() {
    this.visible = false;
  }

  *whenIReceivePop2() {
    this.visible = false;
  }

  *whenIReceiveMx550() {
    this.visible = false;
  }
}
