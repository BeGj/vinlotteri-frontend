import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  private allNavbarItems: NavbarItem[] = [
    {
      text: 'Dashboard',
      requiresAdmin: false,
      url: '/'
    },
    {
      text: 'Backoffice',
      requiresAdmin: true,
      url: 'backoffice'
    }
  ];
  public navbarItems: Observable<NavbarItem[]>;
  constructor(protected authService: AuthService) {
    this.navbarItems = authService.getUser().pipe(
      map((user) => {
        if (!user) {
          return [{
            text: 'Registrer deg',
            requiresAdmin: false,
            url: 'signup'
          } as NavbarItem,
          {
            text: 'Logg inn',
            requiresAdmin: false,
            url: 'login'
          } as NavbarItem]
        }
        return this.allNavbarItems.filter(item => user.isAdmin ? this.allNavbarItems : this.allNavbarItems.filter(item => item.requiresAdmin === false))
      })
    );
  }



}


interface NavbarItem {
  text: string;
  url: string;
  requiresAdmin: boolean;
}
