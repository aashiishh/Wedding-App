import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day3',
  templateUrl: './day3.page.html',
  styleUrls: ['./day3.page.scss'],
})
export class Day3Page implements OnInit {
  scheduleDay3 = [
    {
      "time": "06:30 am to 07:00 am",
      "event": "Bed Tea",
      "venue": "Respective Tents"
    },
    {
      "time": "07.00 am to 07.30 am",
      "event": "Luggage Packing",
      "venue": ""
    },
    {
      "time": "07:30 am to 08:15 am",
      "event": "Breakfast",
      "venue": "Dining Hall"
    },
    
    {
      "time": "08:30 am",
      "event": "Barat Viday",
      "venue": "Tent City Main Gate"
    },
    {
      "time": "10.30 am",
      "event": "Arrival & Check In",
      "venue": "Vadodara Airport"
    },
    {
      "time": "01.00 am",
      "event": "Departure For Delhi",
      "venue": "Bon Voyage"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
