export class Board {
  width;
  height;
  falling = false;
  display = '';
  fallingBlock;

  drop(block){ this.falling = true; this.fallingBlock = block.color;}

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  toString() {
    for (let i = 0; i < this.height; i++) {
      for(let i2 = 0; i2 < this.width; i2++){
       this.falling && i2 == 1 && i== 0 ? this.display += this.fallingBlock: 
        this.falling && i2 > 1 && i == 1 ? this.display += 'X' : 
          this.falling && i2 == this.width-1 && i == this.height-1 ? this.display = this.display+'.' : this.display = this.display+'.';
      }
    this.display = this.display+'\n';}
    return this.display;
  }
}
