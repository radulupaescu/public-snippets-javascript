import { Specification } from './BaseSpecifications';
import { Ticket } from '../Models';

export class ExpiredTicket extends Specification
{
    isSatisfiedBy(ticket: Ticket): boolean
    {
        return ticket.expiresAt <= (new Date());
    }
}
