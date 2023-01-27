import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<User | null>(null);
  constructor() {
    this.user.next({
      balance: 0,
      firstname: 'Peter',
      id: 0,
      lastname: 'Schjem',
      username: 'schpet1',
      isAdmin: true
    })
  }



  public getUser(): Observable<User | null> {
    return this.user.asObservable()
  }


  public isLoggedIn(): Observable<boolean> {
    return this.user.pipe(map(user => user !== null));
  }
}
