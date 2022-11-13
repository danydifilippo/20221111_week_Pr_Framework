import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from './Users';

export interface Authdata{
  accessToken:string,
  user: {
    id:number,
    email: string,
    name:string,
  }
}

@Injectable({
  providedIn: 'root'
})


export class AuthService implements OnInit {

isLogin=false

  constructor(private http :HttpClient) { }

  ngOnInit(): void {
    this.restore();
  }

  restore() {
    const userLogin = localStorage.getItem('userlogin')
    if(userLogin) {
      this.isLogin = true
    }
  }

  signup(obj: Users){
    return this.http.post(environment.urlApi + 'signup', obj)
  }

  signin(obj: Users){
    return this.http.post<Authdata>(environment.urlApi + 'login', obj).pipe(
      tap((data)=>{
        console.log(data);
      })
      )
  }

  getUser(){
    return this.http.get<Users[]>(environment.urlApi + 'users')
  }


}
