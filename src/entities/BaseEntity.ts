import IUpdatable from '../IUpdatable';
import Map from '../world/Map';
import Game from '../Game';

export default class BaseEntity implements IUpdatable {
	protected x = 0;
	protected y = 0;
	protected sprite: PIXI.Sprite;

	private isMoving = false;

	constructor(x: number, y: number, textureName: string) {
		this.x = x;
		this.y = y;
		this.sprite = PIXI.Sprite.fromImage(textureName);

		this.sprite.x = this.x * Map.tileSize;
		this.sprite.y = this.y * Map.tileSize;

		Game.getInstance().pixi.stage.addChild(this.sprite);
	}

	update() {
		this.sprite.x = this.x * Map.tileSize;
		this.sprite.y = this.y * Map.tileSize;		
	}

	move(x = 0, y = 0) {
		if (this.isMoving) return;

		this.isMoving = true;

		this.x += x;
		this.y += y;

		setTimeout(() => this.isMoving = false, 300);
	}
}