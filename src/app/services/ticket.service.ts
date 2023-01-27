import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Ticket } from '../models/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  allTickets$ = new BehaviorSubject<Ticket[]>([]);
  selectTicketsForGameId$ = (gameId: number) => {
    return this.allTickets$.pipe(map(tickets => tickets.filter(ticket => ticket.gameId === gameId)))
  };
  selectTicketsAmountForGameId$ = (gameId: number) => {
    return this.selectTicketsForGameId$(gameId).pipe(map(tickets => tickets.map(ticket => ticket.amount).reduce((sum, amount) => sum + amount)))
  };
  constructor() { }
  ticketRules = {
    min: 0,
    max: 5,
    ticketPrice: 10
  };

  buyTicket(amount: number, gameId: number, userId: number): Ticket | null {
    if (amount > this.ticketRules.min && amount <= this.ticketRules.max) {
      const newTicket: Ticket = {
        date: new Date(),
        gameId,
        id: 333,
        userId,
        amount
      };
      return newTicket;
    }
    return null;
  }

}
