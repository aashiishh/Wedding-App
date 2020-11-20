import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-her-guests',
  templateUrl: './her-guests.page.html',
  styleUrls: ['./her-guests.page.scss'],
})
export class HerGuestsPage implements OnInit,OnDestroy {

  isLoading0 : boolean = false;
  isLoading1 : boolean = false;
  isLoading2 : boolean = false;
  isLoading3 : boolean = false;
  isLoading4 : boolean = false;
 loadedFMNames : string[];
 loadedBNames : string[];
 loadedAUNames : string[];
 gmName : string;
 private gmNameSub : Subscription;
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
    this.gmNameSub = this.service.gmName.subscribe(name => {
       this.gmName = name;
    })
  }

  ionViewWillEnter()
  { 
      this.isLoading0 = true;
      this.isLoading1 = true;
      this.isLoading2 = true;
      this.isLoading3 = true;
      this.isLoading4 = true;
      this.service.fetchFatherMotherNames("her").subscribe(() => {
        this.isLoading1 = false;
      });
      this.service.fetchUncleandAuntNames("her").subscribe(() => {
        this.isLoading2 = false;  
      })
      this.service.fetchBroandSisNames("her").subscribe(() => {
        this.isLoading3 = false;  
      })
      this.service.fetchGrandmotherName().subscribe(() => {
        this.isLoading0 = false;
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
    if(this.gmNameSub)
    this.gmNameSub.unsubscribe();
  }

}
