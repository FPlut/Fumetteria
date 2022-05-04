import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertitore',
  templateUrl: './convertitore.page.html',
  styleUrls: ['./convertitore.page.scss'],
})

export class ConvertitorePage implements OnInit {
  eventClick(){
    this.val1=null
    this.val2=null
    this.val3=null
    this.val4=null
  }
  titolo:string;
  val1:number;
  val2:number;
  val3:number;
  val4:number;
  unita:string;
  aggiornaUnita(unita:string){
    this.unita=unita
  }
  notificaConversione(risultato:number){
    if (this.unita === "Celsius"){
      this.val2=risultato;
    }
    if (this.unita === "Fahrenheit"){
      this.val1=risultato;
    }
    if (this.unita === "Chilometro"){
      this.val4=risultato;
    }
    if (this.unita === "Miglia"){
      this.val3=risultato;
    }
  }
  constructor() {}

  ngOnInit() {}
}