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
    return this.falling;
  }
 
  tick(){
    switch(this.fallingBlockLocation){
      case this.height-1 : this.falling = false; this.blocksLocation.set(this.blockNumber, [this.fallingBlock, this.fallingBlockLocation]); break;
      default : this.fallingBlockLocation++; this.moveBlock(); break;
    }
  }

  createBoard(){
    for (let y = 0; y < this.height; y++) {
      for(let x = 0; x < this.width; x++){
        this.board[y][x] = '.';
      }}
  }

  hasAnotherBlockHere(y){
    for (let [key, value] of this.blocksLocation.entries()) {
      if (value[1] == y && this.blockNumber != key) return true;
      else return false;
    }
  }


  drawBlocksAlreadyFalled(){
    for (let [key, value] of this.blocksLocation.entries()) {
      this.board[value[1]][1] = value[0];
    }
  }

  moveBlock(){
    for (let y = 0; y < this.height; y++) {
      for(let x = 0; x < this.width; x++){
        if(y == this.fallingBlockLocation && x == 1 && (this.falling || this.fallingBlockLocation == this.height-1) && !this.hasAnotherBlockHere(y)){
          this.board[y][x] = this.fallingBlock;
        }
        else {
          console.log(this.hasAnotherBlockHere(y));
          this.hasAnotherBlockHere(y) ? null : this.board[y][x] = '.';}
      }}
  }

  toString() {
    return (this.board.join("\n")).split(",").join("")+"\n";
  }
}
