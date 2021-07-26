import { Ticket } from './Models';
import { ValidTicket } from './Specifications';

// Instantiating a ticket with a maximum of 2 entries.
const mTicket = new Ticket(new Date('2021-12-24'), 2);

/*
 * We'll attempt to use the ticket 3 times.
 * Watch the console, you'll see 2 outputs logging the addition of a new entry, and a third one
 * that logs the ticket as used.
 */

// valid.
if ((new ValidTicket()).isSatisfiedBy(mTicket)) {
    console.log('adding Eroilor');
    mTicket.addEntry('Eroilor');
} else {
    console.log('cannot use this ticket anymore.');
}

// still valid.
if ((new ValidTicket()).isSatisfiedBy(mTicket)) {
    console.log('adding Grozavesti');
    mTicket.addEntry('Grozavesti');
} else {
    console.log('cannot use this ticket anymore.');
}

// not valid anymore.
if ((new ValidTicket()).isSatisfiedBy(mTicket)) {
    console.log('adding Gara de Nord');
    mTicket.addEntry('Gara de Nord');
} else {
    console.log('cannot use this ticket anymore.');
}

// logging to see the entries log on the ticket.
console.log(mTicket);