import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-live-video',
  templateUrl: './live-video.page.html',
  styleUrls: ['./live-video.page.scss'],
})
export class LiveVideoPage implements OnInit, OnDestroy {
  isLoading : boolean = false;
  url : string;
 private urlSub : Subscription;

 constructor(private service:MyServiceService) { }
ngOnInit() {
  this.urlSub = this.service.yURL.subscribe(myurl => {
    this.url = myurl;
})
}
ionViewWillEnter()
{ 
  this.isLoading = true;
  this.service.fetchYoutubeLink().subscribe(() => {
  this.isLoading = false;
  });
  
}
ngOnDestroy()
  {
    if(this.urlSub)
    this.urlSub.unsubscribe();
  }
}
