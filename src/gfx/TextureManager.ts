import * as PIXI from 'pixi.js';

export default class TextureManager {
	static loadTextures(): Promise<void> {
		return new Promise((resolve: () => void, reject: (error: Error) => void ) => {
			PIXI.loader
				.add('texture', "res/texture.png")
				.add('grass', "res/grass.png")
				.add('house1', "res/house1.png")										
				.load(() => resolve())
		});
	}
}