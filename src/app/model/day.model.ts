export class Day {
    opens: string;
    closes: string;

    constructor(obj?:any) {
        this.opens = obj && obj.opens || "";
        this.closes = obj && obj.opens || "";
    }
}