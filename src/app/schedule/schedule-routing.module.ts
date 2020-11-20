import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchedulePage } from './schedule.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: SchedulePage,
    children: [
      {
        path: 'day1', 
        children:
        [
           { 
              path: '',
              loadChildren: () => import('./day1/day1.module').then( m => m.Day1PageModule)
           }
        ]
      },
      {
        path: 'day2',
        children:
        [
          {
            path: '',
    loadChildren: () => import('./day2/day2.module').then( m => m.Day2PageModule)
          },
        ]
      },
      {
        path: 'day3',
        children:
        [
          {
            path: '',
            loadChildren: () => import('./day3/day3.module').then( m => m.Day3PageModule)
          },
        ]
      },
      {
        path: '',
        redirectTo: '/schedule/tabs/day1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/schedule/tabs/day1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchedulePageRoutingModule {}
