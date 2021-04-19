import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlanPorDefectoComponentComponent } from './components/plan-por-defecto/plan-por-defecto-component/plan-por-defecto-component.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PopupConfimPlanSelComponent } from './components/plan-por-defecto/popup-confim-plan-sel/popup-confim-plan-sel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NumProcesPlanComponent } from './components/Num-procesos-plan/num-proces-plan/num-proces-plan.component';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PlanPorDefectoComponentComponent,
    PopupConfimPlanSelComponent,
    NumProcesPlanComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    ChartsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
