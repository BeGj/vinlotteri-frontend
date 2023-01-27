import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { CreateGameDto, Game } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public allGames = new BehaviorSubject<Game[]>([]);
  public previousGames = this.allGames.pipe(
    map(games => games.filter(game => game.date < new Date()))
  );
  public upcomingGames = this.allGames.pipe(
    map(games => games.filter(game => game.date > new Date()))
  );
  constructor() { }


  public createGame(createGameDto: CreateGameDto): Game {
    const id = this.allGames.value.length + 1;
    const createdGame: Game = {
      ...createGameDto,
      id,
      rewards: [],
      tickets: [],
    };
    this.allGames.next([...this.allGames.value, createdGame]);
    return createdGame;
  }
}
