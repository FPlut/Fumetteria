import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  titolo:string="Benvenuto nella pagina di registrazione";
  percorsoImg:string="../../../assets/icon/logo_devskill.png";
  logPage:string="http://localhost:8100/login";
  name:string;
  surname:string;
  username:string;
  password:string;
  cPassword:string;
  
  eventClick():void{
    window.open(this.logPage)
  }
  constructor() { }

  ngOnInit() {
  }

}
