import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HisGuestsPage } from './his-guests.page';

const routes: Routes = [
  {
    path: '',
    component: HisGuestsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HisGuestsPageRoutingModule {}
