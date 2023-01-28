import { Injectable } from '@angular/core';
import { BehaviorSubject, map, of } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service'
import { mockedUsers, User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _users = of(mockedUsers)
  public users = this._users;
  public balanceOverview = this._users.pipe(
    map(users => {
      let positiveBalance = 0;
      let balanceForNextGame = 0;
      let negativeBalance = 0;
      users.forEach(user => {
        if (user.balance >= 0) {
          positiveBalance += user.balance;
          if (user.balance >= 50) {
            balanceForNextGame += 50;
          } else {
            balanceForNextGame += user.balance
          }
        } else {
          negativeBalance += user.balance;
        }
      });
      return {
        positiveBalance,
        balanceForNextGame,
        negativeBalance
      };
    })
  );
  constructor(private authService: AuthService) { }


}
