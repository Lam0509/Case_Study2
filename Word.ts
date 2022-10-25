import {Type} from "./Type";
import * as readlineSync from "readline-sync";

export class Word {
    name: string;
    pronoun: string;
    types: Type[] = []

    constructor(name: string,
                pronoun: string) {
        this.name = name;
        this.pronoun = pronoun;
    }
}

