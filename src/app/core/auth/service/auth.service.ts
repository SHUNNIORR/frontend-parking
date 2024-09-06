import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginUser, LoginUserResponse } from '../models/login.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = true;
  readonly API_URL = environment.url
  constructor(private http:HttpClient) {
  }

  login(userData: LoginUser): Observable<LoginUserResponse>{
    return this.http.post<LoginUserResponse>(`${this.API_URL}/auth/login`, userData)
  }
  logout(){
    this.deleteTokenFromLocal();
    localStorage.removeItem('token');
  }

  saveTokenToLocal(jwt: string): void {
    localStorage.setItem('token', jwt);
  }
  deleteTokenFromLocal(): void {
    localStorage.removeItem('token')
  }
  getTokenFromLocal():string|null {
    return localStorage.getItem('token');
  }
}
