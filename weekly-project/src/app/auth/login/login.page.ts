import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Users } from '../Users';

@Component({
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {

  error: undefined;

  constructor(private authservice: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm):void{
    const email = form.value.email
    this.authservice.signin(form.value).subscribe(
      data => {
        console.log(data);
        this.error = undefined
        localStorage.setItem('userLogin', JSON.stringify(data))
        console.log(email);

        this.router.navigate(['/home'])
      },
      err => {
        console.log(err);
        this.error = err.error
        alert(this.error)
      }
    );
  }

}
