import {Meaning} from "./Meaning";

export class Type {
    nameOfType: string;
    meanings: Meaning[] = [];

    constructor(nameOfType: string) {
        this.nameOfType = nameOfType;
    }
}