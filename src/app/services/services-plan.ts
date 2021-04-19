import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ServicesPlan{

    // url de la api
    public url: string;
    // correo cliente
    public email = '';

    constructor(private httpClient: HttpClient ){
        this.url = 'https://';
    }

    // obtener el informe general de excel
    generateExcelGenerla(): Observable<any>{
        return this.httpClient.post(this.url + 'GenerarExcelGeneral' , null, {responseType: 'blob'});
    }

}
