import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServicesPlan{

    // url de la api
    public url: string;
    // correo cliente
    public email = '';

    constructor(private httpClient: HttpClient ){
        this.url = 'https://';
    }

}
