export class Board {
  width;
  height;
  falling = false;
  display = '';
  fallingBlock;
  fallingBlockLocation = 0;

  drop(block){if(this.falling === true){throw("already falling");} else{this.falling = true; this.fallingBlock = block.color;}}

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  hasFalling(){
    return this.falling;
  }
 
  tick(){
    switch(this.fallingBlockLocation){
      case 2 : this.falling = false; break;
      default : this.fallingBlockLocation++; break;
    }
  }

  displaying(){
    if(this.display != ''){this.display = '';}
    for (let i = 0; i < this.height; i++) {
      for(let i2 = 0; i2 < this.width; i2++){
        console.log(i+'--'+this.fallingBlock+'-'+this.fallingBlockLocation);
       this.falling && i2 == 1 && i== 0 && this.fallingBlockLocation == i ? this.display += this.fallingBlock: 
        this.falling && i2 == 1 && i == 1 && this.fallingBlockLocation == i ? this.display += this.fallingBlock : 
          (this.falling || this.fallingBlockLocation == this.height-1) && i2 == 1 && i == 2 && this.fallingBlockLocation == i ? this.display += this.fallingBlock : 
            this.display += '.';
      }
    this.display = this.display+'\n';}
    return this.display;
  }

  toString() {
    return this.displaying().toString();
  }
}
