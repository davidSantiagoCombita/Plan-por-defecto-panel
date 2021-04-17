import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumProcesPlanComponent } from './num-proces-plan.component';

describe('NumProcesPlanComponent', () => {
  let component: NumProcesPlanComponent;
  let fixture: ComponentFixture<NumProcesPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumProcesPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumProcesPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
