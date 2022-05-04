import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonLogRegComponent } from 'src/app/components/button-log-reg/button-log-reg.component';
import { ButtonLogRegModule } from 'src/app/components/button-log-reg/button-log-reg.module';
import { TitleImgComponent } from 'src/app/components/title-img/title-img.component';
import { TitleImgModule } from 'src/app/components/title-img/title-img.module';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
