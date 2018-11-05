import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()

export class PeticionesServices{
    public url: string; 

    constructor(private _httpClient:HttpClient){
        this.url="https://jsonplaceholder.typicode.com/posts";
    }

    getPrueba(){
        return "Hola! soy un Servicio";
    }

    getPosts(): Observable<any>{   //Lo que va a retornar getPosts es un Observable
        return this._httpClient.get(this.url);
    }

}