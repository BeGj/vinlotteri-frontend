import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private authService: AuthService) { }

  addBalance(amount: number): number {
    const user = this.authService.getUser()
    return 0;
  }

}
