export class Entry
{
    date: Date;
    station: string;

    constructor(station: string) {
        this.date = new Date();
        this.station = station;
    }
}
