import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, catchError, tap, throwError } from 'rxjs';
import { User } from './user.model';

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

  constructor(private http: HttpClient) {}

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
      .pipe(catchError(this.handleError),
      tap((resData) => {
        this.handleAuthentication(
          resData.email,
          resData.localId,
          resData.idToken,
          +resData.expiresIn
        );
      }));
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
