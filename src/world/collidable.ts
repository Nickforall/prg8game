export default class Collidable {
	public x: number
	public y: number
	public width: number
	public height: number
	public isTrigger: boolean	

	constructor(x:number, y:number, width:number, height:number, isTrigger: boolean) {
		this.x = x		
		this.y = y
		this.width = width
		this.height = height
		this.isTrigger = isTrigger
	}

	isColliding(x: number, y: number): boolean {
		if (
			x + 1 > this.x
			&& x < this.x + this.width
			&& y + 1 > this.y 
			&& y < this.y + this.height
		) {
			return true;
		}

		return false;
	}
}