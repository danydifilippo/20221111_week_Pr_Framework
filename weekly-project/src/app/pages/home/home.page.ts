import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/auth/Users';

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  users:Users[]=[]

  constructor(private http:HttpClient) { }

  getUser(){
    return this.users
  }

  ngOnInit(): void {
  }

}
