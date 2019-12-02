import { Injectable } from '@angular/core';
import { Login } from './login';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    
  private baseUrl= 'http://localhost:49275/api';
  formData: Login;

  constructor(private http: HttpClient) { }

  

  public Login(userInfo:Login): Observable<any>{
    
    //localStorage.setItem('ACCESS_TOKEN',"access_token");
    return this.http.get(this.baseUrl+'/Login_tbl?u_name='+userInfo.u_name+'&p_word='+userInfo.p_word);


  }
  
  public isLoggedIn()
  {
    return localStorage.getItem('ACCESS_TOKEN')!==null;
  }

  public logout()
  {
    localStorage.removeItem('ACCESS_TOKEN');
  }

  public getLoginDet(): Observable<any>{
    return this.http.get(this.baseUrl+'/Login_tbl');
  }

}