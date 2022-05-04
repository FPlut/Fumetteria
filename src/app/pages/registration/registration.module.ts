import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrationPageRoutingModule } from './registration-routing.module';

import { RegistrationPage } from './registration.page';
import { TitleImgComponent } from 'src/app/components/title-img/title-img.component';
import { InputItemComponent } from 'src/app/components/input-item/input-item.component';
import { ButtonLogRegComponent } from 'src/app/components/button-log-reg/button-log-reg.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrationPageRoutingModule
  ],
  declarations: [RegistrationPage,ButtonLogRegComponent,TitleImgComponent,InputItemComponent]
})
export class RegistrationPageModule {}
