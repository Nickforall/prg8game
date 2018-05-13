import BaseEntity from './BaseEntity';

export default class PlayerCharacter extends BaseEntity {
	constructor(x: number, y: number) {
		super(x, y, 'texture')

		self.addEventListener('keydown', this.handleKeyEvent.bind(this))
	}

	handleKeyEvent(event: KeyboardEvent) {
		switch (event.keyCode) {
			case 87: //w
				this.move(0, -1);
				break;
			case 65: //a
				this.move(-1, 0);			
				break;			
			case 83: //s
				this.move(0, 1);				
				break;			
			case 68: //d
				this.move(1, 0);
				break;
			default:
				break;
		}
	}
}