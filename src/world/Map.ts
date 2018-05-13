import MapTileEntity from "./MapTileEntity";
import IUpdatable from "../IUpdatable";

export default class Map implements IUpdatable {
	public tileEntities: Array<MapTileEntity> = new Array();

	constructor() {
		
	}

	update() {
		for (const tileEntity of this.tileEntities) {
			tileEntity.update()
		}
	}
}