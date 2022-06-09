import {RotatingShape} from './RotatingShape.mjs';

export class Tetromino {

 static T_SHAPE = new RotatingShape(".T."+"\n"+"TTT"+"\n"+"..."+"\n");

 rotateRight(){
    this.makeArray(this.string);
     return ".T."+"\n"+"T.T"+"\n"+".T."+"\n";
 }
 
}