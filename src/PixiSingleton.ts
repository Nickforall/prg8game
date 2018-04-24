import * as PIXI from "pixi.js";

const app: PIXI.Application 
    = new PIXI.Application(800, 600, {backgroundColor : 0x333333});

class PixiSingleton {
		static APP: PIXI.Application;
		
		static create() {
			
		}
}