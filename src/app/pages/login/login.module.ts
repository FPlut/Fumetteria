import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { ButtonLogRegComponent } from 'src/app/components/button-log-reg/button-log-reg.component';
import { TitleImgComponent } from 'src/app/components/title-img/title-img.component';
import { InputItemComponent } from 'src/app/components/input-item/input-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    
  ],
  declarations: [LoginPage,ButtonLogRegComponent,TitleImgComponent,InputItemComponent]
})
export class LoginPageModule {}
