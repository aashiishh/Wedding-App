import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HisGuestsPageRoutingModule } from './his-guests-routing.module';

import { HisGuestsPage } from './his-guests.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HisGuestsPageRoutingModule
  ],
  declarations: [HisGuestsPage]
})
export class HisGuestsPageModule {}
