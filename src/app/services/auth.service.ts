import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import {  filter, from, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user = from(this.keycloakService.loadUserProfile()).pipe(
    filter(user => user != null),
    map(user => {
      const roles = this.keycloakService.getUserRoles();
      return {
        ...user,
        roles: roles,
        isAdmin: roles.some(role => role === 'admin'),
        isUser: roles.some(role => role === 'user'),
      }
    })
  );
  public isLoggedIn = from(this.keycloakService.isLoggedIn())

  constructor(
    private keycloakService: KeycloakService
  ) {
    this.keycloakService.isLoggedIn().then(status => {
      console.log('isLoggedIn: ' + status);

    })

    this.user.subscribe(user => {
      console.log(user);
    })



  }


}
