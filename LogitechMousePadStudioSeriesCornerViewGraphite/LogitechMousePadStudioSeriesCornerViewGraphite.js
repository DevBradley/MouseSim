/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class LogitechMousePadStudioSeriesCornerViewGraphite extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "logitech-mouse-pad-studio-series-corner-view-graphite",
        "./LogitechMousePadStudioSeriesCornerViewGraphite/costumes/logitech-mouse-pad-studio-series-corner-view-graphite.png",
        { x: 480, y: 248 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
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
      new Trigger(Trigger.BROADCAST, { name: "Mx550" }, this.whenIReceiveMx550),
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
    this.goto(0, -62);
    this.moveBehind();
    this.visible = false;
  }

  *whenIReceiveErgo() {
    this.goto(-13, 46);
    this.visible = true;
    this.moveBehind();
  }

  *whenIReceiveGaming1() {
    this.goto(-13, 46);
    this.visible = true;
    this.moveBehind();
  }

  *whenIReceiveGaming2() {
    this.goto(-13, 46);
    this.visible = true;
    this.moveBehind();
  }

  *whenIReceiveLift() {
    this.goto(-13, 46);
    this.visible = true;
    this.moveBehind();
  }

  *whenIReceiveM171() {
    this.goto(-13, 46);
    this.visible = true;
    this.moveBehind();
  }

  *whenIReceiveM187() {
    this.goto(-13, 46);
    this.visible = true;
    this.moveBehind();
  }

  *whenIReceiveMx550() {
    this.goto(-13, 46);
    this.visible = true;
    this.moveBehind();
  }

  *whenIReceiveMxanywhere() {
    this.goto(-13, 46);
    this.visible = true;
    this.moveBehind();
  }

  *whenIReceiveMxmaster() {
    this.goto(-13, 46);
    this.visible = true;
    this.moveBehind();
  }

  *whenIReceivePop() {
    this.goto(-13, 46);
    this.visible = true;
    this.moveBehind();
  }
}
