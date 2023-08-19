import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})

export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = '';

  @ViewChild(PlaceholderDirective) alertHost!:PlaceholderDirective;

  constructor(
    private authService: AuthService,
    private router: Router,
    private componentFactortyResolver: ComponentFactoryResolver
  ) {}

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

    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;
    if (this.isLoginMode) {
      authObs = this.authService.login(email, password); //** for login mode */
    } else {
      authObs = this.authService.signup(email, password);
    }
    authObs.subscribe(
      (resData) => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['/recipes']); //**navigate for user when click some thing after login or sign up to navigate the recipe page */
      },
      (errorMessage) => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.showErrorAlert(errorMessage);
        this.isLoading = false;
      }
    );
    form.reset();
  }

  onHandleError() {
    this.error = '';
  }

  private showErrorAlert(message: string) {
    // const alertCap = new AlertComponent();
    const alertCmpFactory =
      this.componentFactortyResolver.resolveComponentFactory(
        AlertComponent
        );
const hostViewContainerRef = this.alertHost.viewContainerRef;
hostViewContainerRef.clear();

hostViewContainerRef.createComponent(alertCmpFactory)
  }
}
