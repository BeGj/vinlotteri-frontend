import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateGameComponent } from './create-game/create-game.component';
import { GameService } from '../services/game.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-backoffice',
  standalone: true,
  imports: [
    CommonModule,
    CreateGameComponent,
    ButtonModule
  ],
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.scss']
})
export class BackofficeComponent {
  constructor(public gameService: GameService) { }

}
