import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss']
})
export class SignupPage implements OnInit {

  error: undefined;

  constructor(private authservice: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm):void{
    this.authservice.signup(form.value).subscribe(
      data => {
        console.log(data);
        this.error = undefined;
        this.router.navigate(['/login']);
        localStorage.removeItem('userlogin')
      },
      err => {
        console.log(err);
        this.error = err.error
        alert(this.error)
      }
    );
  }

}
