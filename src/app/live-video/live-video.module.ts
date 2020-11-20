import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LiveVideoPageRoutingModule } from './live-video-routing.module';

import { LiveVideoPage } from './live-video.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LiveVideoPageRoutingModule
  ],
  declarations: [LiveVideoPage]
})
export class LiveVideoPageModule {}
