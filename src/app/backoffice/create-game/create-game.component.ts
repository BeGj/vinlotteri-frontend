import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GameService } from 'src/app/services/game.service';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CalendarModule,
    ButtonModule
  ]
})
export class CreateGameComponent {

  createGameForm = new FormGroup({
    date: new FormControl(new Date(), { nonNullable: true, validators: [Validators.required] })
  });

  constructor(public gameServices: GameService) { }


  public createGameClicked(): void {
    const { date } = this.createGameForm.value;
    if (date) {
      this.gameServices.createGame({ date })
    }
  }
}
