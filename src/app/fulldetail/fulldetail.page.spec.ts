import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FulldetailPage } from './fulldetail.page';

describe('FulldetailPage', () => {
  let component: FulldetailPage;
  let fixture: ComponentFixture<FulldetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FulldetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FulldetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
