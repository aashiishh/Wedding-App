import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HerGuestsPageRoutingModule } from './her-guests-routing.module';

import { HerGuestsPage } from './her-guests.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HerGuestsPageRoutingModule
  ],
  declarations: [HerGuestsPage]
})
export class HerGuestsPageModule {}
