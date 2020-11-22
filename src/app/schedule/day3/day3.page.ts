import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventDetail } from 'src/app/models/event-details';
import { MyServiceService } from 'src/app/my-service.service';

@Component({
  selector: 'app-day3',
  templateUrl: './day3.page.html',
  styleUrls: ['./day3.page.scss'],
})
export class Day3Page implements OnInit, OnDestroy {
  isLoading1 : boolean = false;
  day3Names : EventDetail[];
  
  private day3NamesSub : Subscription;
 
  constructor(private service:MyServiceService) { }
   ngOnInit() {
     this.day3NamesSub = this.service.day1table.subscribe(names => {
         this.day3Names = names;
     })
     
   }
   ionViewWillEnter()
  { 
    this.isLoading1 = true;
      this.service.fetchDayFirst("Day3").subscribe(() => {
        this.isLoading1 = false;
      });
  }

  ngOnDestroy()
  {
    if(this.day3NamesSub)
    this.day3NamesSub.unsubscribe();
  }
  // scheduleDay3 = [
  //   {
  //     "time": "06:30 am to 07:00 am",
  //     "event": "Bed Tea",
  //     "venue": "Respective Tents"
  //   },
  //   {
  //     "time": "07:00 am to 07:30 am",
  //     "event": "Luggage Packing",
  //     "venue": ""
  //   },
  //   {
  //     "time": "07:30 am to 08:15 am",
  //     "event": "Breakfast",
  //     "venue": "Dining Hall"
  //   },
    
  //   {
  //     "time": "08:30 am",
  //     "event": "Barat Viday",
  //     "venue": "Tent City Main Gate"
  //   },
  //   {
  //     "time": "10.30 am",
  //     "event": "Arrival & Check In",
  //     "venue": "Vadodara Airport"
  //   },
  //   {
  //     "time": "01:00 am",
  //     "event": "Departure For Delhi",
  //     "venue": "Bon Voyage"
  //   }
  // ]
  
}
