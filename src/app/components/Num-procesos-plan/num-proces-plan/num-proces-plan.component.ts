import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color } from 'ng2-charts';

import { ServicesPlan } from '../../../services/services-plan';

@Component({
  selector: 'app-num-proces-plan',
  templateUrl: './num-proces-plan.component.html',
  styleUrls: ['./num-proces-plan.component.css'],
  providers: [ ServicesPlan ]
})
export class NumProcesPlanComponent implements OnInit {

  // Doughnut
  // Datos de la grafica
  public doughnutChartData: number[];
  // opciones de configuración grafica
  public doughnutChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    events: []
  };

  // Lista con datos para representar en el panel y grafica
  planesPorDefecto = [
    {nombre: 'Todos los días', colorPlan: '#FDB45C', cantidad: 0},
    {nombre: 'Dos días por semana, Lunes y Viernes', colorPlan: '#949FB1', cantidad: 0},
    {nombre: 'Dos días por semana, Martes y Jueves', colorPlan: '#F7464A', cantidad: 0},
    {nombre: 'Dos días por semana, Miercoles y Viernes', colorPlan: '#46BFBD', cantidad: 0},
    {nombre: 'Una vez por semana', colorPlan: '#4D5360', cantidad: 0},
    {nombre: 'Dos veces al mes', colorPlan: '#46BF6D', cantidad: 0},
    {nombre: 'Una vez al mes ', colorPlan: '#46FFBD', cantidad: 0}
  ];

  // Lista de colores grafica
  public doughnutChartColors: Color[];
  // desactivando la leyenda de la grafica
  public doughnutChartLegend = false;
  // Asigando el tipo de grafica quie se quiere
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private services: ServicesPlan) {}

  ngOnInit(): void {
    // se llama al inicio para cuando se conecte a un servicio agrege los datos para la grafica
    this.cantidadPlanesUtilizados();
    // se cambian lo colores, el tamaño del borde y su color.
    this.doughnutChartColors = [
      { backgroundColor: this.colors(), borderWidth: 5, borderColor: '#F5F5F5'}
    ];
    // con los datos obtenidos se cambia la cantidad para la lista que se le pasa a la grafica
    this.doughnutChartData = this.cantidad();
  }

  // Metodo utilizado para traer los datos de la api y remplazarlos para mostrarlos en la grafica
  public cantidadPlanesUtilizados(): void{
    // Datos quemados, pero se pueden remplazar pidiendo desde un servicio acá para cambiar la cantidad.
    const cantidad = [6, 1, 234, 2, 4, 1, 8];
    for (let index = 0; index < this.planesPorDefecto.length; index++) {
      this.planesPorDefecto[index].cantidad = cantidad[index];
    }
  }

  // Cambiar los colores de la grafica
  public colors(): string[] {
    const colors: string[] = [];
    for (const iterator of this.planesPorDefecto) {
      colors.push(iterator.colorPlan);
    }
    return colors;
  }

  // tomando los datos de la lista para cambiarlos en la grafica.
  public cantidad(): number[] {
    const cantidad: number[] = [];
    for (const iterator of this.planesPorDefecto) {
      cantidad.push(iterator.cantidad);
    }
    return cantidad;
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
