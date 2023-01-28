import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, map, Observable } from 'rxjs';
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
  protected profileDropdownVisible = new BehaviorSubject<boolean>(false);
  protected navMenuVisible = new BehaviorSubject<boolean>(false);
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
    this.navbarItems = authService.user.pipe(
      map((user) => {
        if (!user) {
          return [
          {
            text: 'Logg inn',
            requiresAdmin: false,
            url: 'login'
          } as NavbarItem]
        }
        return this.allNavbarItems.filter(item => user.isAdmin ? item : item.requiresAdmin === false)
      })
    );
  }



}


interface NavbarItem {
  text: string;
  url: string;
  requiresAdmin: boolean;
}
