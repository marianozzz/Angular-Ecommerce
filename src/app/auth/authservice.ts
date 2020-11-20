import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginCredentials } from '../models/login-credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: undefined;
  UserDetails: undefined;

  loginUrl = 'https://utn-avanzada2-tp-final.herokuapp.com/api/User/Login';
  redirectUrl: string;

  constructor(private http: HttpClient) { }

  login(loginCredential: LoginCredentials): Promise<any> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
      const promise = this.http.post(this.loginUrl, loginCredential, httpOptions).toPromise();

      // tslint:disable-next-line: no-string-literal
      promise.then(response => {this.token = response['token'];
                                sessionStorage.setItem('token', this.token);
    }).catch(error => {
      console.log(error);
    });

      return promise;
  }

  logout(): void{
    sessionStorage.removeItem('token');
    this.token = undefined;
  }
}
