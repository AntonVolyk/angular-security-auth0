import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/shareReplay';
import 'rxjs/add/operator/do';

export const ANONIMUS_USER = {
  id: undefined,
  email: ''
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private subject = new BehaviorSubject<User>(ANONIMUS_USER);
  user$: Observable<User> = this.subject.asObservable();
  isLoggedIn$: Observable<boolean> = this.user$.map(user => !!user.id);
  isLoggedOut$: Observable<boolean> = this.isLoggedIn$.map(isLoggedIn => !isLoggedIn);

  constructor(private http: HttpClient) { }

  signUp(email: string, password: string): Observable<User> {
    return this.http.post<User>('/api/signup', {email, password})
    .shareReplay()
    .do(user => this.subject.next(user));
  }
}
