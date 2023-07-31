import {
  Project,
  Sprite
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import M550MediumOffWhiteTop from "./M550MediumOffWhiteTop/M550MediumOffWhiteTop.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import M187GalleryBlue1New from "./M187GalleryBlue1New/M187GalleryBlue1New.js";
import Th3268990216 from "./Th3268990216/Th3268990216.js";
import Sprite3 from "./Sprite3/Sprite3.js";
import M550MediumOffWhiteTop2 from "./M550MediumOffWhiteTop2/M550MediumOffWhiteTop2.js";
import PopMouseGalleryMist1 from "./PopMouseGalleryMist1/PopMouseGalleryMist1.js";
import ErgoM575GalleryOffWhite1New from "./ErgoM575GalleryOffWhite1New/ErgoM575GalleryOffWhite1New.js";
import Th2754271818 from "./Th2754271818/Th2754271818.js";
import MxMaster3sForMacMouseTopViewPaleGrey from "./MxMaster3sForMacMouseTopViewPaleGrey/MxMaster3sForMacMouseTopViewPaleGrey.js";
import Sprite4 from "./Sprite4/Sprite4.js";
import LiftGalleryOffWhite1 from "./LiftGalleryOffWhite1/LiftGalleryOffWhite1.js";
import MxAnywhere3sMouseTopViewPaleGrey from "./MxAnywhere3sMouseTopViewPaleGrey/MxAnywhere3sMouseTopViewPaleGrey.js";
import M171MouseTopViewOffWhite from "./M171MouseTopViewOffWhite/M171MouseTopViewOffWhite.js";
import Sprite5 from "./Sprite5/Sprite5.js";
import MxMechanicalKeyboardTopViewGraphiteUs from "./MxMechanicalKeyboardTopViewGraphiteUs/MxMechanicalKeyboardTopViewGraphiteUs.js";
import MxMechanicalKeyboardTopViewGraphiteUs2 from "./MxMechanicalKeyboardTopViewGraphiteUs2/MxMechanicalKeyboardTopViewGraphiteUs2.js";
import UsGalleryTopNew from "./UsGalleryTopNew/UsGalleryTopNew.js";
import Sprite6 from "./Sprite6/Sprite6.js";
import K780WhiteGallery1 from "./K780WhiteGallery1/K780WhiteGallery1.js";
import K400PlusBlackGallery1Uk from "./K400PlusBlackGallery1Uk/K400PlusBlackGallery1Uk.js";
import Sprite7 from "./Sprite7/Sprite7.js";
import K400PlusBlackGallery1Uk2 from "./K400PlusBlackGallery1Uk2/K400PlusBlackGallery1Uk2.js";
import LogitechMousePadStudioSeriesCornerViewGraphite from "./LogitechMousePadStudioSeriesCornerViewGraphite/LogitechMousePadStudioSeriesCornerViewGraphite.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  M550MediumOffWhiteTop: new M550MediumOffWhiteTop({
    x: 148,
    y: -7,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 24
  }),
  Sprite1: new Sprite1({
    x: -35,
    y: 121,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 23
  }),
  Sprite2: new Sprite2({
    x: -53,
    y: -51,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 25
  }),
  M187GalleryBlue1New: new M187GalleryBlue1New({
    x: 131,
    y: 146,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 8
  }),
  Th3268990216: new Th3268990216({
    x: -163,
    y: -66,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 9
  }),
  Sprite3: new Sprite3({
    x: -164,
    y: 153,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 12
  }),
  M550MediumOffWhiteTop2: new M550MediumOffWhiteTop2({
    x: -150,
    y: -2,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 2
  }),
  PopMouseGalleryMist1: new PopMouseGalleryMist1({
    x: -118,
    y: 135,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 3
  }),
  ErgoM575GalleryOffWhite1New: new ErgoM575GalleryOffWhite1New({
    x: 84,
    y: 134,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 11
  }),
  Th2754271818: new Th2754271818({
    x: -62,
    y: -62,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 7
  }),
  MxMaster3sForMacMouseTopViewPaleGrey: new MxMaster3sForMacMouseTopViewPaleGrey(
    {
      x: 78,
      y: -175,
      direction: 90,
      rotationStyle: Sprite.RotationStyle.ALL_AROUND,
      costumeNumber: 1,
      size: 100,
      visible: false,
      layerOrder: 10
    }
  ),
  Sprite4: new Sprite4({
    x: 172,
    y: -95,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 13
  }),
  LiftGalleryOffWhite1: new LiftGalleryOffWhite1({
    x: -136,
    y: 33,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 5
  }),
  MxAnywhere3sMouseTopViewPaleGrey: new MxAnywhere3sMouseTopViewPaleGrey({
    x: -2,
    y: 33,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 4
  }),
  M171MouseTopViewOffWhite: new M171MouseTopViewOffWhite({
    x: 98,
    y: 73,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 6
  }),
  Sprite5: new Sprite5({
    x: 205,
    y: -100,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 14
  }),
  MxMechanicalKeyboardTopViewGraphiteUs: new MxMechanicalKeyboardTopViewGraphiteUs(
    {
      x: -42.6829833984375,
      y: -105.928466796875,
      direction: 90,
      rotationStyle: Sprite.RotationStyle.ALL_AROUND,
      costumeNumber: 1,
      size: 100,
      visible: false,
      layerOrder: 15
    }
  ),
  MxMechanicalKeyboardTopViewGraphiteUs2: new MxMechanicalKeyboardTopViewGraphiteUs2(
    {
      x: 2,
      y: 1,
      direction: 90,
      rotationStyle: Sprite.RotationStyle.ALL_AROUND,
      costumeNumber: 1,
      size: 100,
      visible: false,
      layerOrder: 16
    }
  ),
  UsGalleryTopNew: new UsGalleryTopNew({
    x: 8,
    y: -70,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 17
  }),
  Sprite6: new Sprite6({
    x: 177,
    y: -139,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 18
  }),
  K780WhiteGallery1: new K780WhiteGallery1({
    x: 72,
    y: 101,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 20
  }),
  K400PlusBlackGallery1Uk: new K400PlusBlackGallery1Uk({
    x: 66,
    y: -100,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 19
  }),
  Sprite7: new Sprite7({
    x: 192,
    y: 6,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 21
  }),
  K400PlusBlackGallery1Uk2: new K400PlusBlackGallery1Uk2({
    x: 115,
    y: 97,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 22
  }),
  LogitechMousePadStudioSeriesCornerViewGraphite: new LogitechMousePadStudioSeriesCornerViewGraphite(
    {
      x: 0,
      y: -62,
      direction: 90,
      rotationStyle: Sprite.RotationStyle.ALL_AROUND,
      costumeNumber: 1,
      size: 100,
      visible: false,
      layerOrder: 1
    }
  )
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
