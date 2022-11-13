import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.page.html',
  styleUrls: ['./navbar.page.scss']
})
export class NavbarPage implements OnInit {

  mainActive:boolean=true
  name:any
  n:any
  profile:boolean= true
  enter:boolean= false

  constructor() { }

  ngOnInit(): void {
    this.name = localStorage.getItem('userLogin')
    this.n = JSON.parse(this.name)
  }

}
