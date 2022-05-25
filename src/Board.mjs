export class Board {
  width;
  height;
  drop(){}

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  toString() {
    return "...\n...\n...\n";
  }
}
