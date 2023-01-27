import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../services/game.service';
import { AuthService } from '../services/auth.service';
import { GameListComponent } from "../shared/game-list/game-list.component";
import { BalanceService } from '../services/balance.service';

@Component({
    selector: 'app-frontoffice',
    standalone: true,
    templateUrl: './frontoffice.component.html',
    styleUrls: ['./frontoffice.component.scss'],
    imports: [
        CommonModule,
        GameListComponent
    ]
})
export class FrontofficeComponent {

  constructor(
    public gameService: GameService,
    public authService: AuthService,
    public balanceService: BalanceService
  ) { }
}
