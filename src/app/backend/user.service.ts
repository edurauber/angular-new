import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public get():Observable<any> {
    const route: string = "rota da minha api";
    return this.http.get(route, {
      headers: {
        Authorization: 'Bearer a token que recebo da api'
      },
    });
  }
}
