import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-img',
  templateUrl: './title-img.component.html',
  styleUrls: ['./title-img.component.scss'],
})
export class TitleImgComponent implements OnInit {
  percorsoImg:string="../assets/icon/logo_devskill.png";
  @Input() testo:string;
  constructor() { }

  ngOnInit() {}

}
