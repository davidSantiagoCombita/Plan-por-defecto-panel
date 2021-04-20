import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { ServicesPlan } from '../../../services/services-plan';

export interface DialogData {
  nombre: string;
  valor: string;
  valorMes: number;
}

@Component({
  selector: 'app-popup-confim-plan-sel',
  templateUrl: './popup-confim-plan-sel.component.html',
  styleUrls: ['./popup-confim-plan-sel.component.css'],
  providers: [ ServicesPlan ]
})
export class PopupConfimPlanSelComponent implements OnInit {

  // icono de warnin en el texto
  warning = faExclamationTriangle;

  constructor(public dialogRef: MatDialogRef<PopupConfimPlanSelComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
              private services: ServicesPlan) { }

  ngOnInit(): void {}

  // se cancela y se cierra el dialogo
  onClosePressCancel(): void{
    this.dialogRef.close();
  }

  // metodo cuando se da confirmar a cambiar el plan
  onClosePressConfirm(): void{
    this.dialogRef.close();
    // se manda el valor de el plan escogido para poder hacer el calculo en la web api
    // luego de cambiarlo se actulaliza y se pide en plan por defecto
  }

}
