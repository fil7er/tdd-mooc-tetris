export class Board {
  width;
  height;
  falling = false;
  display = '';
  board;
  fallingBlock;
  fallingBlockLocation = 0;
  blocksLocation;
  blockNumber;

  drop(block){if(this.falling === true){throw("already falling");} else{this.falling = true; this.fallingBlock = block.color;}}

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = Array.from(Array(height), () => new Array(width));
    this.createBoard();
    this.blocksLocation = new Map();
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

  createBoard(){
    for (let y = 0; y < this.height; y++) {
      for(let x = 0; x < this.width; x++){
        this.board[y][x] = '.';
      }}
  }

  moveBlock(){
    for (let y = 0; y < this.height; y++) {
      for(let x = 0; x < this.width; x++){
        if(y = this.fallingBlock && x == 1){
          this.board[y][x] = this.fallingBlock;
        }
      }}
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
