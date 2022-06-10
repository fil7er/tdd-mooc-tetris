export class Board {
  width;
  height;
  falling = false;
  display = '';
  board;
  fallingBlock;
  fallingBlockLocation = 0;
  blocksLocation;
  blockNumber = 0;
  isTouched = false;

  drop(block){

  if(this.falling === true){
    throw("already falling");
  } 
  else{
    this.falling = true; 
    this.fallingBlock = block.color;
    this.blockNumber++;
    this.fallingBlockLocation = 0;
    this.createBoard();
    this.drawBlocksAlreadyFalled();
    this.moveBlock();
  }

}

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = Array.from(Array(height), () => new Array(width));
    this.createBoard();
    this.blocksLocation = new Map();
  }

  hasFalling(){
    console.log('teste'-+this.falling);
    return this.falling;
  }

  touchBLock(y,x){
    this.board[y-1][x] = this.fallingBlock;
    this.isTouched = true;
    console.log('done');
  }
 
  tick(){
    if(this.fallingBlockLocation >= this.height-1 && (this.falling == true || this.isTouched === true)){
      this.falling = false; this.blocksLocation.set(this.blockNumber, [this.fallingBlock, this.fallingBlockLocation]);
    }
    else {
      this.fallingBlockLocation++; this.moveBlock();
    }
  }

  createBoard(){
    for (let y = 0; y < this.height; y++) {
      for(let x = 0; x < this.width; x++){
        this.board[y][x] = '.';
      }}
  }

  hasAnotherBlockHere(y, x){
    for (let [key, value] of this.blocksLocation.entries()) {
      if (value[1] == y && x == 1 && this.blockNumber != key) {
        return true;
      }
    }
    return false;
  }


  drawBlocksAlreadyFalled(){
    for (let [key, value] of this.blocksLocation.entries()) {
      this.board[value[1]][1] = value[0];
    }
  }

  moveBlock(){
    for (let y = 0; y < this.height; y++) {
      for(let x = 0; x < this.width; x++){
        console.log(y+'-'+x);
        if(y == this.fallingBlockLocation && x == 1 && (this.falling || this.fallingBlockLocation == this.height-1) && !this.hasAnotherBlockHere(y, x)){
          this.board[y][x] = this.fallingBlock;
        }
        else {
          this.hasAnotherBlockHere(y, x) ? this.touchBLock(y,x) : this.board[y][x] = '.';}
      }}
  }

  toString() {
    return (this.board.join("\n")).split(",").join("")+"\n";
  }
}
