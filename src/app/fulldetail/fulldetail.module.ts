import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FulldetailPageRoutingModule } from './fulldetail-routing.module';

import { FulldetailPage } from './fulldetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FulldetailPageRoutingModule
  ],
  declarations: [FulldetailPage]
})
export class FulldetailPageModule {}
