import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupConfimPlanSelComponent } from './popup-confim-plan-sel.component';

describe('PopupConfimPlanSelComponent', () => {
  let component: PopupConfimPlanSelComponent;
  let fixture: ComponentFixture<PopupConfimPlanSelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupConfimPlanSelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupConfimPlanSelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
