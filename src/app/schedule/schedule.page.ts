import { Component, OnInit } from '@angular/core';

interface s{
  time: string,
  event: string,
  venue: string,
}

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {

  constructor() { }
  

  
  
  ngOnInit() {
  }

}
