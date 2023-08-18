import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyAyWd3npD6Xnm3gQx_hVStgU2NbbGBAX5s`,
      { email: email, password: password, returnSecureToken: true }
    );
  }
}
