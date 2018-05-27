import * as PIXI from 'pixi.js';

export default class TextureManager {
	static loadTextures(): Promise<void> {
		return new Promise((resolve: () => void, reject: (error: Error) => void) => {
			PIXI.loader
				.add('texture', "res/texture.png")
				.add('grass', "res/grass.png")
				.add('path_bottom_left', "res/path_bottom_left.png")
				.add('path_bottom_mid', "res/path_bottom_mid.png")
				.add('path_bottom_right', "res/path_bottom_right.png")

				.add('path_mid_left', "res/path_mid_left.png")
				.add('path_mid_mid', "res/path_mid_mid.png")
				.add('path_mid_right', "res/path_mid_right.png")

				.add('path_top_left', "res/path_top_left.png")
				.add('path_top_mid', "res/path_top_mid.png")
				.add('path_top_right', "res/path_top_right.png")

				.add('house1', "res/house1.png")

				.add('tree1', "res/tree.png")

				.load(() => resolve())
		});
	}
}