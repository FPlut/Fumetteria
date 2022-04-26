import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertitore',
  templateUrl: './convertitore.page.html',
  styleUrls: ['./convertitore.page.scss'],
})

export class ConvertitorePage implements OnInit {

  
  
  //Distanza
  convertitoreMiInKm(miglia:number):number{
    let migliaKm:number= miglia * 1.6;
    return migliaKm
  }
  convertitoreKmInMi(chilometri:number):number{
    let kmMiglia:number= chilometri * 0.62;
    return kmMiglia
  }
    /*
  convertitoreMiInCen(miglia:number):number{
    let migliaCen:number= miglia * 160934;
    return migliaCen
  }
  convertitoreKmInCen(chilometri:number):number{
    let kmCen:number= chilometri * 10000;
    return kmCen
  }
  convertitoreCenInKm(centimetri:number):number{
    let cenMiglia:number= centimetri / 100000;
    return cenMiglia
  }
  
  convertitoreCenInMi(centimetri:number):number{
    let cenMi:number= centimetri / 160934;
    return cenMi
  }
  */
  //Gradi
  convertitoreCInF(centigradi:number):number{
    let cF:number= (1.8 * centigradi) + 32;
    return cF
  }
  convertitoreFInC(fahrenheit:number):number{
   
    let fC:number= (fahrenheit - 32 ) /1.8;
    return fC
  }
  /*
  convertitoreCInK(centigradi:number):number{
    let c:number=centigradi;
    let cK:number= c * 1 + 273;
    return cK
  }
  convertitoreFInK(fahrenheit:number):number{
   
    let fC:number= (fahrenheit - 32) * 5/9 + 273;
    return fC
  }
  convertitoreKInC(kelvin:number):number{
    let kC:number= kelvin - 273.15;
    return kC
  }

  convertitoreKInF(kelvin:number):number{
    let kF:number= (kelvin - 273.15) * 9/5 + 32;
    return kF
  }
  */
  //DisplayCalculatedValue
  //Gradi
  getValC(val){
    this.displayValue=this.convertitoreCInF(val);
    //this.displayValue5=this.convertitoreCInK(val);
    this.val2 = null;
  }
  getValF(val){
    this.displayValue2=this.convertitoreFInC(val);
    //this.displayValue5=this.convertitoreFInK(val);
    this.val1=null;
  }
  /*
  getValK(val){
    this.displayValue2=this.convertitoreKInF(val);
    this.displayValue=this.convertitoreKInC(val);
    this.val5 = null;
  }
  */
  //Distanza
  getValKm(val){
    this.displayValue3=this.convertitoreKmInMi(val);
    //this.displayValue6=this.convertitoreKmInCen(val);
    this.val4 = null;
  }
  getValMi(val){
    this.displayValue4=this.convertitoreMiInKm(val);
    //this.displayValue6=this.convertitoreMiInCen(val);
    this.val3= null;
  }
  /*
  getValCen(val){
    this.displayValue3=this.convertitoreCenInMi(val);
    this.displayValue4=this.convertitoreCenInKm(val);
    this.val6 = null;
  }
*/
  //ClearDisplayedValue
  //Gradi
  clearValC(){
    this.displayValue2=null;
  }
  
  clearValF(){
    this.displayValue=null;
  }
  /*
  clearValK(){
    this.displayValue5=null;
  }
  */
  //Distanza
  clearValKm(){
    this.displayValue4=null;
  }
  
  clearValMi(){
    this.displayValue3=null;
  }
  /*
  clearValCen(){
    this.displayValue6=null;
  }
  */


  displayValue:number;
  displayValue2:number;
  displayValue3:number;
  displayValue4:number;
  //displayValue5:number;
  //displayValue6:number;
  
  titolo:string="Convertitore di gradi e distanza";
  val1:number;
  val2:number;
  val3:number;
  val4:number;
  //val5:number;
  //val6:number;
  constructor() { }

  ngOnInit() {
  }

}
