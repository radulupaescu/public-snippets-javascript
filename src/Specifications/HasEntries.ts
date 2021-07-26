import { Specification } from './BaseSpecifications';
import { Ticket } from '../Models';

export class HasEntries extends Specification
{
    isSatisfiedBy(ticket: Ticket): boolean
    {
        return ticket.entries.length < ticket.maxEntries;
    }
}
