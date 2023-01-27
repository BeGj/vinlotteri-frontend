import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service'
@Injectable({
  providedIn: 'root'
})
export class BalanceService {
  protected _balance$ = new BehaviorSubject<number>(50);
  public balance$ = this._balance$.asObservable();

  constructor(private authService: AuthService) { }


  addBalance(amount: number): boolean {
    this._balance$.next(this._balance$.value + amount);
    return true;
  }

  subtractBalance(amount: number): boolean {
    if (this._balance$.value <= -150) {
      return false;
    }
    this._balance$.next(this._balance$.value - amount);
    return true;
  }

}
