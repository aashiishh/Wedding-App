import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.page.html',
  styleUrls: ['./first.page.scss'],
})
export class FirstPage implements OnInit, OnDestroy {

  isLoading : boolean = false;
  url : string;
 private urlSub : Subscription;

 constructor(private service:MyServiceService) { }
ngOnInit() {
  this.urlSub = this.service.homePicUrl.subscribe(myurl => {
    this.url = myurl;
})
}
ionViewWillEnter()
{ 
  this.isLoading = true;
  this.service.fetchHomePicUrlLink().subscribe(() => {
  this.isLoading = false;
  });
  
}
ngOnDestroy()
  {
    if(this.urlSub)
    this.urlSub.unsubscribe();
  }
}

