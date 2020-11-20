import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuestsPage } from './guests.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: GuestsPage,
    children: [
      {
        path: 'her', 
        children:
        [
           { 
              path: '',
              loadChildren: () => import('../her-guests/her-guests.module').then( m => m.HerGuestsPageModule)
           }
        ]
      },
      {
        path: 'his',
        children:
        [
          {
            path: '',
            loadChildren: () => import('../his-guests/his-guests.module').then( m => m.HisGuestsPageModule)
          },
        ]
      },
      {
        path: '',
        redirectTo: '/guests/tabs/her',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/guests/tabs/her',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuestsPageRoutingModule {}
