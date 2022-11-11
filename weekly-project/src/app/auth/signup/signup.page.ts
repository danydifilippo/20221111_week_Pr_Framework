import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Users } from '../Users';

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
        this.router.navigate(['/login'])
      },
      err => {
        console.log(err);
        this.error = err.error
        alert(this.error)
      }
    );
  }

}
