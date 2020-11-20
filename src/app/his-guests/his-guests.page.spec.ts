import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HisGuestsPage } from './his-guests.page';

describe('HisGuestsPage', () => {
  let component: HisGuestsPage;
  let fixture: ComponentFixture<HisGuestsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HisGuestsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HisGuestsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
