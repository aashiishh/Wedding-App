import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventDetail } from 'src/app/models/event-details';
import { MyServiceService } from 'src/app/my-service.service';

@Component({
  selector: 'app-day2',
  templateUrl: './day2.page.html',
  styleUrls: ['./day2.page.scss'],
})
export class Day2Page implements OnInit, OnDestroy{
  isLoading1 : boolean = false;
  day2Names : EventDetail[];
  
  private day2NamesSub : Subscription;
 
  constructor(private service:MyServiceService) { }
   ngOnInit() {
     this.day2NamesSub = this.service.day1table.subscribe(names => {
         this.day2Names = names;
     })
     
   }
   ionViewWillEnter()
  { 
    this.isLoading1 = true;
      this.service.fetchDayFirst("Day2").subscribe(() => {
        this.isLoading1 = false;
      });
  }

  ngOnDestroy()
  {
    if(this.day2NamesSub)
    this.day2NamesSub.unsubscribe();
  }
  // scheduleDay2 = [
  //   {
  //     "time": "06.30 am to 07.00 am",
  //     "event": "Bed Tea",
  //     "venue": "Respective Tents"
  //   },
  //   {
  //     "time": "07:30 am to 08.30 am",
  //     "event": "Breakfast",
  //     "venue": "Dining Hall"
  //   },
  //   {
  //     "time": "09.00 am to 12 Noon",
  //     "event": "Outing",
  //     "venue": "Sardar Sarovar Dam & Other Attractions"
  //   },
  //   {
  //     "time": "12.00 pm to 02.00 pm",
  //     "event": "Lunch",
  //     "venue": "Dining Hall"
  //   },
  //   {
  //     "time": "03:30 pm to 04:00 pm",
  //     "event": "Hi – Tea",
  //     "venue": "Near Accommodation Area"
  //   },
  //   {
  //     "time": "04:00 pm to 05:00 pm",
  //     "event": "Barat",
  //     "venue": "From Cultural Programme Stage Area"
  //   },
  //   {
  //     "time": "05:00 pm to 08:30 pm",
  //     "event": "Wedding Ceremony & Photo Shoot",
  //     "venue": "Lawn No. 07"
  //   },
  //   {
  //     "time": "08:30 pm to 09:30 pm",
  //     "event": "Dinner",
  //     "venue": "Dining Hall"
  //   },
  //   {
  //     "time": "09:30 pm",
  //     "event": "Kanya Viday",
  //     "venue": "Wedding Area"
  //   },
  //   {
  //     "time": "11:30 pm",
  //     "event": "Teda Vidhi",
  //     "venue": "Tent Area"
  //   }
  // ]
 

}
