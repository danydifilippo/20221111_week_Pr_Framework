import { AfterContentInit, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit, AfterContentInit {

  user:any;
  error: undefined;
  advice: boolean = false
  welcome: boolean = false
  alertType:string = 'success'
  name:any



  constructor(private authservice: AuthService, private router:Router ) { }

  ngOnInit(): void {
  }

  ngAfterContentInit ():void {
    this.user = localStorage.getItem('userLogin')
    this.name = JSON.parse(this.user)
    console.log(this.name.user.name);
  }


  onSubmit(form: NgForm){
    this.authservice.signin(form.value).subscribe(
      data => {
        console.log(data);
        this.error = undefined
        localStorage.setItem('userLogin', JSON.stringify(data))
        this.welcome = true
        setTimeout(() => {
          this.router.navigate(['/navbar'])
        }, 3000);

      },
      err => {
        console.log(err);
        this.error = err.error;
        this.advice = true
      }
    );
  }
  }


