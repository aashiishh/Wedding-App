import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiveVideoPage } from './live-video.page';

const routes: Routes = [
  {
    path: '',
    component: LiveVideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiveVideoPageRoutingModule {}
