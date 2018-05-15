import Direction from "./Direction";
import Map from '../Map'

/**
 * Generates a walkway
 */
export default class Walkway {
	private startX: number
	private startY: number
	private direction: Direction
	private length: number

	constructor(x: number, y: number, length: number, direction = Direction.Left) {
		this.startX = x;
		this.startY = y;
		this.length = length;
		this.direction = direction;
	}

	setCaps(map: Map): void {
		map.setTile(this.startX, this.startY + 1, 'path_bottom_left')		
		map.setTile(this.startX, this.startY, 'path_mid_left')
		map.setTile(this.startX, this.startY - 1, 'path_top_left')

		map.setTile(this.startX + this.length, this.startY + 1, 'path_bottom_right')
		map.setTile(this.startX + this.length, this.startY, 'path_mid_right')
		map.setTile(this.startX + this.length, this.startY - 1, 'path_top_right')
	}

	setSegment(map: Map, x: number): void {
		map.setTile(this.startX + x, this.startY + 1, 'path_bottom_mid')
		map.setTile(this.startX + x, this.startY, 'path_mid_mid')
		map.setTile(this.startX + x, this.startY - 1, 'path_top_mid')
	}

	set(map: Map): void {
		this.setCaps(map)

		for (let x = 1; x < this.length; x++) {
			this.setSegment(map, x)
		}
	}
}