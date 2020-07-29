import { Injectable } from '@angular/core';

import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaderResponse, HttpHeaders} from "@angular/common/http";

import {Observable, of, from , forkJoin, throwError} from "rxjs";
import {tap,map,catchError, mergeMap, mergeAll, concat, concatAll, concatMap} from 'rxjs/operators';

import { Secreto, Respuesta } from './../models';

@Injectable({
  providedIn: 'root'
})
export class SecretoService {

  private url = environment.API+"secreto/";
  private httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

  constructor(private http: HttpClient) { }

  public obtener(): Observable<Array<Secreto>> {
    return this.http.get<Array<Secreto>>(this.url,this.httpOptions)
    .pipe(tap(item=>console.log(item)))
    .pipe(map(items => items.map(item => new Secreto(item))));    
  }

  public guardar(secreto:Secreto): Observable<Respuesta> {
    return this.http.post<Respuesta>(this.url,secreto,this.httpOptions)
    .pipe(tap(item=>console.log(item)))
    .pipe(map(item=>new Respuesta(item)));
  }

}
