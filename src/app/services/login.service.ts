import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http' ;
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  urlLogin = 'https://accounts.spotify.com/api/token';
 /* data = {
    headers: new HttpHeaders({Authorization: environment.spotify.id}),
     params: new HttpParams(options: {grant_type: 'refresh_token', refresh_token: environment.spotify.secret})
  }; */
  constructor(/* private http: HttpClient, */) { }

  loginHandler(email: string, password: string) {
   /*  return this.http.get(''); */
  }
}
