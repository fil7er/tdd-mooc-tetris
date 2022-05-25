export class Board {
  width;
  height;
  falling = false;
  drop(block){return block;}

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  toString() {
    return "...\n...\n...\n";
  }
}
