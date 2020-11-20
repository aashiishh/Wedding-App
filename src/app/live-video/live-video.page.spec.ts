import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LiveVideoPage } from './live-video.page';

describe('LiveVideoPage', () => {
  let component: LiveVideoPage;
  let fixture: ComponentFixture<LiveVideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveVideoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LiveVideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
