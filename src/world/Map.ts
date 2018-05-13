import MapTileEntity from "./MapTileEntity";
import IUpdatable from "../IUpdatable";
import MapTile from "./MapTile";
import Game from "../Game";
import PlayerCharacter from "../entities/PlayerCharacter";

export default class Map implements IUpdatable {
  private static width = 30;
  private static height = 30;

  public static tileSize = 16;

  public tileEntities: Array<MapTileEntity> = new Array();
  public tiles: Array<Array<MapTile>> = new Array(Map.width * Map.height).fill([]);
  public characters: Array<PlayerCharacter> = new Array();
  
  fill() {
    for (let x = 0; x < Map.width; x++) {
      for (let y = 0; y < Map.height; y++) {
        this.setTile(x, y, 'grass')
      }
    }
  }

  setTile(x: number, y: number, texture: string) {
    this.tiles[y * Map.width + x].push(new MapTile(x, y, texture));
  }

  getTilesAt(x: number, y: number): Array<MapTile> {
    return this.tiles[y * Map.width + x];
  }

	update() {
		for (const tileEntity of this.tileEntities) {
      tileEntity.update();
    }
    
    for (const character of this.characters) {
      character.update()
    }
  }
  
  addCharacter(character: PlayerCharacter) {
    this.characters.push(character);
  }
}