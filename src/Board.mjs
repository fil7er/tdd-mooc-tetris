export class Board {
  width;
  height;
  falling = false;
  display = '';
  fallingBlock;
  fallingBlockLocation = 0;

  drop(block){if(this.falling === true){throw("already falling");} this.falling = true; this.fallingBlock = block.color;}

  constructor(width, height) {
    this.width = width;
    this.height = height;
    console.log(width+'-'+height);
  }
 
  tick(){this.fallingBlockLocation++;}

  displaying(){
    if(this.display != ''){this.display = '';}
    for (let i = 0; i < this.height; i++) {
      for(let i2 = 0; i2 < this.width; i2++){
       this.falling && i2 == 1 && i== 0 && this.fallingBlockLocation == i ? this.display += this.fallingBlock: 
        this.falling && i2 == 1 && i == 1 && this.fallingBlockLocation == i ? this.display += this.fallingBlock : 
          this.falling && i2 == 1 && i == 2 && this.fallingBlockLocation == i ? this.display += this.fallingBlock : this.display += '.';
      }
    this.display = this.display+'\n';}
    return this.display;
  }

  toString() {
    return this.displaying().toString();
  }
}
