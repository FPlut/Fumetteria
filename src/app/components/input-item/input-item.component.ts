import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-input-item',
  templateUrl: './input-item.component.html',
  styleUrls: ['./input-item.component.scss'],
})
export class InputItemComponent implements OnInit {
@Input() iValue:string;
@Input() iValue2:string;
@Input() icon:string;


  constructor() { }

  ngOnInit() {}

}
