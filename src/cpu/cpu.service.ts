import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {

    constructor(private powerService:PowerService){}

    power(a:number,b:number){
        console.log("lorem ipsum dolar sit amet");
        this.powerService.supplyPower(10);
        return a+b;
    }
}
