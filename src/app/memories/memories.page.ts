import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-memories',
  templateUrl: './memories.page.html',
  styleUrls: ['./memories.page.scss'],
})
export class MemoriesPage implements OnInit {
  isLoading : boolean = false;
  imageList : string[];
  private ImagesSub : Subscription;
  constructor(private service:MyServiceService) { }

  ngOnInit() {
    this.ImagesSub = this.service.images.subscribe(images => {
      this.imageList = images;
    })
  }
  ionViewWillEnter()
  { 
      this.isLoading = true;
      this.service.fetchMemories().subscribe(() => {
        this.isLoading= false;
      });
  }

  ngOnDestroy()
  {
    if(this.ImagesSub)
    this.ImagesSub.unsubscribe();
   
  }

}
