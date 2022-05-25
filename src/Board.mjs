export class Board {
  width;
  height;
  falling = false;
  drop(block){falling = true; return block;}

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  toString() {
    for (let i = 0; i < this.height; i++) {}
    return display;
  }
}
