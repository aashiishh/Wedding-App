import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HerGuestsPage } from './her-guests.page';

describe('HerGuestsPage', () => {
  let component: HerGuestsPage;
  let fixture: ComponentFixture<HerGuestsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerGuestsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HerGuestsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
