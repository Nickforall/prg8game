import Game from '../Game'

export default class MapTile {
	public x: number;
	public y: number;
	private textureName: string;
	private sprite: PIXI.Sprite;

	constructor(x: number, y: number, textureName: string) {
		this.x = x;
		this.y = y;
		this.textureName = textureName;
		this.sprite = PIXI.Sprite.fromImage(textureName);

		this.sprite.x = x * this.sprite.texture.height;
		this.sprite.y = y * this.sprite.texture.width;
		
		Game.getInstance().pixi.stage.addChild(this.sprite);
	}
}