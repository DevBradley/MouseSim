/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180
      }),
      new Costume("backdrop2", "./Stage/costumes/backdrop2.svg", {
        x: 0,
        y: 0
      }),
      new Costume("backdrop3", "./Stage/costumes/backdrop3.svg", {
        x: 0,
        y: 0
      }),
      new Costume("backdrop4", "./Stage/costumes/backdrop4.svg", {
        x: 0,
        y: 0
      }),
      new Costume("backdrop5", "./Stage/costumes/backdrop5.svg", {
        x: 0,
        y: 0
      }),
      new Costume(
        "logitech-mouse-pad-studio-series-corner-view-graphite",
        "./Stage/costumes/logitech-mouse-pad-studio-series-corner-view-graphite.png",
        { x: 0, y: 0 }
      ),
      new Costume("Keyb", "./Stage/costumes/Keyb.svg", { x: 0, y: 0 })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];
  }
}
