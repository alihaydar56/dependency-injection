import { Injectable } from '@nestjs/common';


export class PowerService {

    supplyPower(watts:number){
        console.log("suppliying "+watts+" power...");
    }
}
