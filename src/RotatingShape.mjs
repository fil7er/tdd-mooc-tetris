export class RotatingShape{
    shape;


    constructor(shape, where){
        let row = shape.replaceAll(" ", "").trim().split("\n");
        this.shape = Array.from(Array(row.length), () => new Array(row.length));
        switch(where){
            case 1 :  for(let y= 0;y < this.shape.length;y++)for(let x=this.shape.length-1;x>=0;x--) this.shape[y][(this.shape.length-1-x)] = Array.from(row[x])[y]; break; //Right
            case 2 : for(let y =this.shape.length-1;y>=0;y--) for(let x=0;x<this.shape.length;x++) this.shape[this.shape.length-1-y][x] = Array.from(row[x])[y]; break; //Left
            default : for(let y=0;y< this.shape.length;y++) for(let x=0;x< this.shape.length;x++) this.shape[y][x] = Array.from(row[y])[x]; break;
        }
    }

    rotateRight(){
        return new RotatingShape(((this.shape.join("\n").trim().toString()).split(",").join("").trim().toString() + '\n'), 1);
    }

    rotateLeft(){
        return new RotatingShape(((this.shape.join("\n").trim().toString()).split(",").join("").trim().toString() + '\n'), 2);
    }

    toString(){    
        return ((this.shape.join("\n").trim().toString()).split(",").join("").trim().toString() + '\n');
    }
}