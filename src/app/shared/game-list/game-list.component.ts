import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from 'src/app/models/game.model';
import { ButtonModule } from 'primeng/button';
import { GameListViewComponent } from "../game-list-view/game-list-view.component";

@Component({
    selector: 'app-game-list',
    standalone: true,
    templateUrl: './game-list.component.html',
    styleUrls: ['./game-list.component.scss'],
    imports: [
        CommonModule,
        GameListViewComponent
    ]
})
export class GameListComponent {
  @Input() games: Game[] = [];
}
