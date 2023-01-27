import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service'
@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private authService: AuthService) { }


}
