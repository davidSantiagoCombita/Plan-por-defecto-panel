import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { PopupConfimPlanSelComponent } from '../popup-confim-plan-sel/popup-confim-plan-sel.component';
import { ServicesPlan } from '../../../services/services-plan';
import { DialogData } from '../popup-confim-plan-sel/popup-confim-plan-sel.component';

@Component({
  selector: 'app-plan-por-defecto-component',
  templateUrl: './plan-por-defecto-component.component.html',
  styleUrls: ['./plan-por-defecto-component.component.css'],
  providers: [ ServicesPlan ]
})
export class PlanPorDefectoComponentComponent implements OnInit {

  valorPlan = '400';

  planesPorDefecto = [
    {nombre: 'Todos los días', valor: 38},
    {nombre: 'Lu y Mie', valor: 75},
    {nombre: 'Ma y Ju', valor: 80},
    {nombre: 'Mie y Vie', valor: 85},
    {nombre: '1 vez por semana', valor: 120},
    {nombre: '2 veces al mes', valor: 200},
    {nombre: '1 veces al mes', valor: 300}
  ];

  constructor(public dialog: MatDialog,
              private services: ServicesPlan) { }

  ngOnInit(): void {
    this.valorPlanServ();
  }

  openDialog(nombrePlan, valorSel): void {
    const dialogRef = this.dialog.open(PopupConfimPlanSelComponent, {
      width: '560px',
      data: {nombre: nombrePlan, valor: valorSel},
      backdropClass: 'dialog-bg'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.valorPlan = result;
      }
    });
  }

  valorPlanServ(): void{
    // se cambia el valor del plan del cliente pidiendolo desde la web api
    // cuando se conecte.
  }
}

