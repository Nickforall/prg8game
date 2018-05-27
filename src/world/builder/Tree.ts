import Map from '../Map';
import Game from '../../Game';
import Collidable from '../Collidable';

export default class Tree extends Collidable {
    private sprite: PIXI.Sprite

    constructor(x: number, y: number, width: number, height: number, texture: string) {
        super(x, y, width, height, true)

        this.sprite = PIXI.Sprite.fromImage(texture)

        this.sprite.x = this.x * Map.tileSize
        this.sprite.y = this.y * Map.tileSize

        Game.getInstance().pixi.stage.addChild(this.sprite)
    }
}