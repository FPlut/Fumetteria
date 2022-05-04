import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonLogRegComponent } from 'src/app/components/button-log-reg/button-log-reg.component';
import { TitleImgComponent } from 'src/app/components/title-img/title-img.component';

import { RegistrationPage } from './registration.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationPageRoutingModule {}
