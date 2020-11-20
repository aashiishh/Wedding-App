import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { GuestsPageRoutingModule } from './guests-routing.module';

import { GuestsPage } from './guests.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    GuestsPageRoutingModule
  ],
  declarations: [GuestsPage]
})
export class GuestsPageModule {}
