import { Ticket } from "./ticket.model";

export interface Reward {
  id: string;
  title: string;
  description?: string;
  value?: string;
  winningTicket?: Ticket;
  winningTicketId?: number;
}
