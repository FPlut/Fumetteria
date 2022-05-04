import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-button-log-reg',
  templateUrl: './button-log-reg.component.html',
  styleUrls: ['./button-log-reg.component.scss'],
})
export class ButtonLogRegComponent implements OnInit {
  @Input() logOrReg:string;
   paths:string[]=[];
  @Input() path:string;
  
  constructor() { }
  
  ngOnInit() {
   this.paths.push(this.path);
  }

}
