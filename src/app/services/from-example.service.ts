import { Injectable } from '@angular/core';
import { DataFromExample } from '../models/fromExample';

@Injectable({
  providedIn: 'root'
})
export class FromExampleService {

  dataFrom!: DataFromExample[];

  constructor() { 
    this.dataFrom=[
      // {
      //   name: "prueba1",
      //   description: "esta prueba es la 1"
      // }
    ]
  }
  getDtaFrom(){
    return this.dataFrom;
  }
  addDtaFrom(data: DataFromExample ){
    this.dataFrom.push(data);
  }
}
