import {RotatingShape} from './RotatingShape.mjs';

export class Tetromino {

 static T_SHAPE = new RotatingShape(".T."+"\n"+"TTT"+"\n"+"..."+"\n");
 static I_SHAPE = new RotatingShape("....."+"\n"+"....."+"\n"+"IIII."+"\n"+"....."+"\n"+"....."+"\n",null, 2);

}