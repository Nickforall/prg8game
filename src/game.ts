import PixiSingleton from "./PixiSingleton";

class Game {
  constructor() {
    PixiSingleton.setInstance(new PIXI.Application(800, 600, { backgroundColor: 0x1099bb }))
    console.log("Loaded Game")
  }
}

window.addEventListener("load", () => new Game())