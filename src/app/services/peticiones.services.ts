import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Verdura} from '../verduras/verdura';

@Injectable()

export class PeticionesServices{
    public url: string; 

    constructor(private _httpClient:HttpClient){
        this.url="https://jsonvalidator";
    }

    getPrueba(){
        return "Hola! soy un Servicio";
    }

    getPosts(): Observable<any>{   //Lo que va a retornar getPosts es un Observable
       return this._httpClient.get(this.url);
    }

    setVerdura(verdura: Verdura): Observable <any> {
        let json = JSON.stringify(verdura);
        let params = 'json=' + json;
        let headers = new HttpHeaders().set('Content-type','application/json');      
       return this._httpClient.post(this.url, params, {headers:headers});
    }

}