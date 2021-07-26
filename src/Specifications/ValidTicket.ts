import { Specification } from './BaseSpecifications';
import { Ticket } from '../Models';
import { HasEntries } from './HasEntries';
import { ExpiredTicket } from './ExpiredTicket';

export class ValidTicket extends Specification
{
    isSatisfiedBy(ticket: Ticket): boolean
    {
        return (new HasEntries())
            .andNot(new ExpiredTicket())
            .isSatisfiedBy(ticket);
    }
}
