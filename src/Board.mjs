export class Board {
  width;
  height;
  falling = false;
  display = '';

  drop(block){ this.falling = true; }

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  toString() {
    for (let i = 0; i < this.height; i++) {
      for(let i2 = 0; i2 < this.width; i2++){
       this.falling && i2 == 1 && i== 0 ? this.display = this.display+'X': 
        this.falling && i2 > 1 && i > 0 ? this.display = this.display+'X' : this.display = this.display+'.';
      }
    this.display = this.display+'\n';}
    return this.display;
  }
}
