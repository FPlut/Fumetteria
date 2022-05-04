import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConvertitorePageRoutingModule } from './convertitore-routing.module';

import { ConvertitorePage } from './convertitore.page';
import { InputConvComponent } from 'src/app/components/input-conv/input-conv.component';
import { TitleImgComponent } from 'src/app/components/title-img/title-img.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConvertitorePageRoutingModule
  ],
  declarations: [ConvertitorePage,InputConvComponent,TitleImgComponent]
})
export class ConvertitorePageModule {}
