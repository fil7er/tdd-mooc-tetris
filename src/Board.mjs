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
    for (let i = 0; i < this.height; i++) {
      for(let i2 = 0; i2 < this.width; i2++){
        display = display+'.';
      }}
    return display;
  }
}
