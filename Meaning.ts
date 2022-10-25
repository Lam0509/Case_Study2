import {Example} from "./Example";
import {Word} from "./Word";

export class Meaning {
    definition: string;
    examples: Example[] = [];

    constructor(definition: string) {
        this.definition = definition;
    }
}