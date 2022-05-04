import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-conv',
  templateUrl: './input-conv.component.html',
  styleUrls: ['./input-conv.component.scss'],
})
export class InputConvComponent implements OnInit {
  @Input() unita:string;
  risultato:number;
  @Input() valore:number;
  
  @Output() eventoUnita = new EventEmitter<string>();
  @Output() eventoConversione = new EventEmitter<number>();
  ngOnInit() {

  }
  
  convertitore():void{
    this.eventoUnita.emit(this.unita)
    if (this.unita == "Celsius"){
      this.risultato = (1.8 * this.valore) + 32;
    }
    if (this.unita == "Fahrenheit"){
      this.risultato = (this.valore - 32 ) /1.8;
    
    }
    if (this.unita == "Chilometro"){
      this.risultato = this.valore* 0.62;
    }
    if (this.unita == "Miglia"){
      this.risultato = this.valore * 1.6;
    }
    this.eventoConversione.emit(this.risultato)
  }
}
