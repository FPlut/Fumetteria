import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  titolo:string="Benvenuto";
  percorsoImg:string="../../../assets/icon/logo_devskill.png";
  username:string;
  password:string;
  regPage:string="http://localhost:8100/registration";

  eventClick():void{
    window.open(this.regPage)
  }

  constructor() { }

  ngOnInit() {}
}

function regesterpage(){
  window.location.href = '../registration/registration.page.html';
}