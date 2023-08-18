import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false
  error:string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  // ** for sign Up
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    let authObs:Observable<AuthResponseData>

    this.isLoading = true
    if (this.isLoginMode) {
      authObs = this.authService.login(email,password)//** for login mode */
    } else {
      authObs =   this.authService.signup(email, password)
     
    }
    authObs.subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false
        this.router.navigate(['/recipes']) //**navigate for user when click some thing after login or sign up to navigate the recipe page */
      },
      errorMessage => {
        console.log(errorMessage);
       this.error = errorMessage;
        this.isLoading = false
      }
    ) 
    form.reset(); 
  }

 
}
