import {Example} from "./Example";
import * as readlineSync from "readline-sync";
import {subMenuEditOneMeaning} from "../View/Menu";
import {subMenuEditExamples} from "../View/Menu";
import {jsonArrayMember, jsonMember, jsonObject} from "typedjson";
import {editExamples, editMeanings, editOneMeaning} from "../Enum/Choice";

@jsonObject
//@ts-ignore
export class Meaning {

    @jsonMember(String)
    //@ts-ignore
    definition: string;

    @jsonArrayMember(Example)
    //@ts-ignore
    examples: Example[] = [];

    constructor(definition: string) {
        this.definition = definition;
    }

    setDefinition(): void {
        let definition = readlineSync.question('Enter again the definition:  ');
        this.definition = definition;
    }

    findExample(keyword: string): Example | undefined {
        return this.examples.find(example => {return example.checkEnglishSentence(keyword) || example.checkVietnameseSentence(keyword)})
    }

    addExample(): void {
        let continueAddExample;
        do {
            let english = readlineSync.question('Enter english example:  ');
            let vietnamese = readlineSync.question('Enter vietnamese example:  ');
            let example = new Example(english, vietnamese);
            this.examples.push(example);
            continueAddExample = readlineSync.question('Do you want to continue entering example?:  ')
        } while (continueAddExample == "Yes");
    }

    deleteExample(): void {
        let continueDeleteQues;
        do {
            let keyword = readlineSync.question('Enter the keyword in the example you want to delete:  ');
            let example = this.findExample(keyword);
            if (example !== undefined) {
                this.examples = this.examples.filter(example => {return example !== example});
                continueDeleteQues = readlineSync.question('Do you want to continue deleting example?:  ');
            } else {
                console.log('This example has not existed!');
                continueDeleteQues = readlineSync.question('Do you want to continue deleting example?:  ');
            }
        } while (continueDeleteQues == "Yes");
    }

    editOneMeaning(): void {
        while (true) {
            subMenuEditOneMeaning();
            let number = +readlineSync.question('Choose action:  ');
            switch (number) {
                case editOneMeaning.changeDefinition:
                    this.setDefinition();
                    break;
                case editOneMeaning.editExamples:
                    while (true) {
                        subMenuEditExamples();
                        let number = +readlineSync.question('Choose action:  ');
                        switch (number) {
                            case editExamples.addExample:
                                this.addExample();
                                break;
                            case editExamples.deleteExample:
                                this.deleteExample();
                                break;
                            case editExamples.exit:
                                return;
                        }
                    }
                case editOneMeaning.exit:
                    return;
            }
        }
    }
}