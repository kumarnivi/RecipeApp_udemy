import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

interface AuthResponseData {
    idToken:string,
    refreshToken:string,
    expiresIn: string

}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
  return  this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAyWd3npD6Xnm3gQx_hVStgU2NbbGBAX5s',
      { email: email, password: password, returnSecureToken: true }
    ).pipe(catchError( errorRes => {
      let ErrorMesage = 'An Unknwon Error'
      if (!errorRes.error || !errorRes.error.error) {
        return throwError(ErrorMesage)
      }
      switch (errorRes.error.error.message) {
        case 'EMAIL_EXISTS':
        ErrorMesage = 'This Email alredy exits '
      }
      return throwError(ErrorMesage);
    }));
  }
}
