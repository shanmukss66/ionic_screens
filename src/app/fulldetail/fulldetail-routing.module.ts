import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FulldetailPage } from './fulldetail.page';

const routes: Routes = [
  {
    path: '',
    component: FulldetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FulldetailPageRoutingModule {}
