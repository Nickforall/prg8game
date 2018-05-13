import * as PIXI from "pixi.js";
import Map from "./world/Map";
import TextureManager from "./gfx/TextureManager";

class Game {
  private static instance: Game;

  /**
   * A simple singleton that gets the game.
   */
  static getInstance(): Game {
    if (!Game.instance) {
        Game.instance = new Game();
    }
    return Game.instance;
  }

  public map: Map;
  public pixi: PIXI.Application;
  private isLoaded: boolean = false;

  constructor() {
    // create an empty map into the game
    this.map = new Map();

    // initialize canvas
    this.pixi = new PIXI.Application(800, 600, { backgroundColor: 0x000000 });    
    document.body.appendChild(this.pixi.view);

    this.startGame();
  }

  /**
   * Starts the game.
   */
  async startGame() {
    // loads textures into 
    await TextureManager.loadTextures();

    this.isLoaded = true;
    console.log("Loaded Game");

    this.gameLoop();
  }

  /**
   * Handles all game updates
   */
  gameLoop() {
    this.map.update();

    // update
    requestAnimationFrame(() => this.gameLoop());
  }
}

window.addEventListener("load", () => Game.getInstance())