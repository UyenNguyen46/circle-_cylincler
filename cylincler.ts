import {Cicle} from "./circle";

 export class Cylincler extends Cicle {
    height:number;


    constructor(radius: number, color: string, height: number) {
        super(radius, color);
        this.height = height;
    }
    getVolume():number{
        return super.getArea()*this.height;

    }
    public goString():string{
        return " hinh tru mau "
        + this.getColor()
        +" co the tich la "
        +this.getVolume()
    }

}