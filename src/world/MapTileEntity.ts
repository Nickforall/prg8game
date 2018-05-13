import MapTile from "./MapTile";
import IUpdatable from "../IUpdatable";

/**
 * A MapTileEntity is a non static tile that is receives update events
 */
export default class MapTileEntity extends MapTile implements IUpdatable {
	update() {
		
	}
}