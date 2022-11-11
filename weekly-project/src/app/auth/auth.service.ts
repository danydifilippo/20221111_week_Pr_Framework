import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Users } from './Users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http :HttpClient) { }

  signup(obj: Users){
    return this.http.post(environment.urlApi + 'signup', obj)
  }

  signin(obj: Users){
    return this.http.post(environment.urlApi + 'login', obj)
  }
}
