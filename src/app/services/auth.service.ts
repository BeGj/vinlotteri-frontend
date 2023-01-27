import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  protected _user = new BehaviorSubject<User | null>(null);
  public user = this._user.pipe(filter(user => user !== null));
  public isLoggedIn = this._user.pipe(map(user => user !== null));

  constructor() {
    this._user.next({
      balance: 0,
      firstname: 'Peter',
      id: 0,
      lastname: 'Schjem',
      username: 'schpet1',
      isAdmin: true
    })
  }


}
