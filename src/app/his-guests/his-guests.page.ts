import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MyServiceService } from '../my-service.service';
@Component({
  selector: 'app-his-guests',
  templateUrl: './his-guests.page.html',
  styleUrls: ['./his-guests.page.scss'],
})
//Interface
export class HisGuestsPage implements OnInit {

  isLoading1 : boolean = false;
  isLoading2 : boolean = false;
  isLoading3 : boolean = false;
  isLoading4 : boolean = false;
 loadedFMNames : string[];
 loadedBNames : string[];
 loadedAUNames : string[];
 private fmNamesSub : Subscription;
 private bsNamesSub : Subscription;
 private auNamesSub : Subscription;
 private oNamesSub : Subscription;

 constructor(private service:MyServiceService) { }
  ngOnInit() {
    this.fmNamesSub = this.service.fmNames.subscribe(names => {
        this.loadedFMNames = names;
    })
    this.bsNamesSub = this.service.bNames.subscribe(names => {
      this.loadedBNames = names;
    })
    this.auNamesSub = this.service.auNames.subscribe(names => {
      this.loadedAUNames = names;
    })
  }

  ionViewWillEnter()
  { 
      this.isLoading1 = true;
      this.isLoading2 = true;
      this.isLoading3 = true;
      this.isLoading4 = true;
      this.service.fetchFatherMotherNames("his").subscribe(() => {
        this.isLoading1 = false;
      });
      this.service.fetchUncleandAuntNames("his").subscribe(() => {
        this.isLoading2 = false;  
      })
      this.service.fetchBroandSisNames("his").subscribe(() => {
        this.isLoading3 = false;  
      })
  }

  ngOnDestroy()
  {
    if(this.fmNamesSub)
    this.fmNamesSub.unsubscribe();
    if(this.bsNamesSub)
    this.bsNamesSub.unsubscribe();
    if(this.auNamesSub)
    this.auNamesSub.unsubscribe();
  }

}
