import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventDetail } from 'src/app/models/event-details';
import { MyServiceService } from 'src/app/my-service.service';

@Component({
  selector: 'app-day1',
  templateUrl: './day1.page.html',
  styleUrls: ['./day1.page.scss'],
})
export class Day1Page implements OnInit, OnDestroy {

  isLoading1 : boolean = false;
 day1Names : EventDetail[];
 
 private day1NamesSub : Subscription;

 constructor(private service:MyServiceService) { }
  ngOnInit() {
    this.day1NamesSub = this.service.day1table.subscribe(names => {
        this.day1Names = names;
    })
    
  }

  ionViewWillEnter()
  { 
    this.isLoading1 = true;
      this.service.fetchDayFirst("Day1").subscribe(() => {
        this.isLoading1 = false;
      });
      
 
  }

  ngOnDestroy()
  {
    if(this.day1NamesSub)
    this.day1NamesSub.unsubscribe();
    
  }
}
  //scheduleDay1: EventDetail[];
//   scheduleDay1 = [
//     {
//       "time": "04.00 am",
//       "event": "Arrival & Welcome",
//       "venue": "Vadodara Rly Station"
//     },
//     {
//       "time": "04.30 am",
//       "event": "Departure for Swaminarayana Temple, Poicha",
//       "venue": ""
//     },
//     {
//       "time": "06.00 am 07.00 am",
//       "event": "Temple Darshan",
//       "venue": "Swaminarayana Temple, Poicha"
//     },
//     {
//       "time": "07.30 am",
//       "event": "Departure for Tent City, Narmada",
//       "venue": ""
//     },
//     {
//       "time": "08.30am",
//       "event": "Arrival & Check In",
//       "venue": "Tent City, Narmada"
//     },
//     {
//       "time": "09.00 am to 10 am.",
//       "event": "Breakfast",
//       "venue": "Dining Hall"
//     },
//     {
//       "time": "11:00 am",
//       "event": "Welcome Tribal Dance",
//       "venue": "Entrance"
//     },
//     {
//       "time": "12.00 Noon to 01.00 pm",
//       "event": "Lunch",
//       "venue": "Dining Hall"
//     },
//     {
//       "time": "1.00 pm to 4.00 pm",
//       "event": "Outing",
//       "venue": "Statue Of Unity"
//     },
//     {
//       "time": "04.30 pm to 05.00 pm",
//       "event": "Hi – Tea",
//       "venue": "Accommodation Area"
//     },
//     {
//       "time": "06.00 pm to 8.30 pm",
//       "event": "Sangeet Sandhya",
//       "venue": "Cultural Programme Stage Area"

//     }  ,
//     {
//       "time": "08.30 pm to 10.00 pm",
//       "event": "Dinner",
//       "venue": "Dining Hall"
//     }
//   ]
  