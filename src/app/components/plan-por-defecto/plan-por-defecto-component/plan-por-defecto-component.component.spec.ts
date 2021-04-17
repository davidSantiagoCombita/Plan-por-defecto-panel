import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanPorDefectoComponentComponent } from './plan-por-defecto-component.component';

describe('PlanPorDefectoComponentComponent', () => {
  let component: PlanPorDefectoComponentComponent;
  let fixture: ComponentFixture<PlanPorDefectoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanPorDefectoComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanPorDefectoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
