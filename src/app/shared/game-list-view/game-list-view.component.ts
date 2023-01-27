import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Game } from 'src/app/models/game.model';

@Component({
  selector: 'app-game-list-view',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule
  ],
  templateUrl: './game-list-view.component.html',
  styleUrls: ['./game-list-view.component.scss']
})
export class GameListViewComponent {
  @Input() game!: Game;

}
