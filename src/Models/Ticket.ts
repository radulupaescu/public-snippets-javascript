import { Entry } from './Entry';

export class Ticket
{
    expiresAt: Date;
    maxEntries: number;
    entries: Entry[];

    constructor(expiration: Date, maxEntries: number)
    {
        this.expiresAt = expiration;
        this.maxEntries = maxEntries;
        this.entries = [];
    }

    addEntry(station: string): Ticket
    {
        this.entries.push(new Entry(station));

        return this;
    }
}
