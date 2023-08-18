import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, catchError, tap, throwError } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';

export interface AuthResponseData {
  email: string;
  idToken: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  user = new Subject<User>();
  //  user : string | null = new BehaviorSubject<User>(null);
  private tokenExpitationTimer: any;
  constructor(private http: HttpClient, private router: Router) {}

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAyWd3npD6Xnm3gQx_hVStgU2NbbGBAX5s',
        { email: email, password: password, returnSecureToken: true }
      )
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  // ** for login

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAyWd3npD6Xnm3gQx_hVStgU2NbbGBAX5s',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }
  // ******************************************************************************************************
  autoLogin() {
    const userDataString = localStorage.getItem('userData');
    if (userDataString !== null) {
      const userData = JSON.parse(userDataString) as {
        email: string;
        id: string;
        _token: string | null;
        _tokenExpirationDate: string;
      };
      if (!userData) {
        return;
      }

      const loadedUser = new User(
        userData.email,
        userData.id,
        userData._token,
        new Date(userData._tokenExpirationDate)
      );
      if (loadedUser.token) {
        this.user.next(loadedUser);
        const expirationDuration =
          new Date(userData._tokenExpirationDate).getTime() -
          new Date().getTime();
        this.autoLogOut(expirationDuration);
      }
    }
  }

  //********************************************************************************************* */

  logOut() {
    // this.user.next(null)
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if (this.tokenExpitationTimer) {
      clearTimeout(this.tokenExpitationTimer);
    }
    this.tokenExpitationTimer = null;
  }

  autoLogOut(expirationDuration: number) {
    console.log(expirationDuration);
    this.tokenExpitationTimer = setTimeout(() => {
      this.logOut();
    }, expirationDuration);
  }

  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
    this.autoLogOut(expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user)); // ** for local Storage **/
  }

  //** error Handling */
  private handleError(errorRes: HttpErrorResponse) {
    let ErrorMesage = 'An Unknwon Error';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(ErrorMesage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        ErrorMesage = 'This Email alredy exits ';
        break;
      case 'EMAIL_NOT_FOUND':
        ErrorMesage = 'This email dose not exists';
        break;
      case 'INVALID_PASSWORD':
        ErrorMesage = 'Password is invalid!';
        break;
    }
    return throwError(ErrorMesage);
  }
}
