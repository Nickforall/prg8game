export default class MapTile {
	public x: number;
	public y: number;
	public zIndex: number = 0;
	public textureName: string;	

	constructor(x: number, y: number, textureName: string) {
		this.x = x;
		this.y = y;
		this.textureName = textureName;
	}
}