import MapTileEntity from "./MapTileEntity";
import IUpdatable from "../IUpdatable";
import MapTile from "./MapTile";
import Game from "../Game";

export default class Map implements IUpdatable {
  public tileEntities: Array<MapTileEntity> = new Array();
  public tiles: Array<MapTile> = new Array();
  
  private static width: number = 30;
  private static height: number = 30;
  
  fill() {
    for (let x = 0; x < Map.width; x++) {
      for (let y = 0; y < Map.height; y++) {
        this.setTile(x, y, 'texture')
      }
    }
  }

  setTile(x: number, y: number, texture: string) {
    this.tiles[y * Map.width + x] = new MapTile(x, y, texture);
  }

  getTile(x: number, y: number): MapTileEntity {
    return this.tileEntities[y * Map.width + x];
  }

	update() {
		for (const tileEntity of this.tileEntities) {
			tileEntity.update()
		}
	}
}