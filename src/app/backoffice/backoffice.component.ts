import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateGameComponent } from './create-game/create-game.component';
import { GameService } from '../services/game.service';
import { GameListComponent } from '../shared/game-list/game-list.component';
import { UserService } from '../services/user.service';
import { UserBalanceTableComponent } from './user-balance-table/user-balance-table.component';
import { BalanceLineChartComponent } from './balance-line-chart/balance-line-chart.component';

@Component({
  selector: 'app-backoffice',
  standalone: true,
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.scss'],
  imports: [
    CommonModule,
    CreateGameComponent,
    GameListComponent,
    UserBalanceTableComponent,
    BalanceLineChartComponent,
  ],
})
export class BackofficeComponent {
  constructor(
    public gameService: GameService,
    public userService: UserService
  ) {}
}
