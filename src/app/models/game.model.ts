import { Reward } from "./reward.model";
import { Ticket } from "./ticket.model";

export interface Game {
  id: number;
  date: Date;
  rewards: Reward[];
  tickets: Ticket[];
}

export interface CreateGameDto {
  date: Date;
}




