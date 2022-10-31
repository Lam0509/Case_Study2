import {Meaning} from "./Meaning";
import * as readlineSync from "readline-sync";
import {subMenuEditOneType, subMenuEditMeanings} from "../View/Menu";
import {jsonArrayMember, jsonMember, jsonObject} from "typedjson";
import {editMeanings, editOneType} from "../Enum/Choice";

@jsonObject
//@ts-ignore
export class Type {

    @jsonMember(String)
    //@ts-ignore
    nameOfType: string;

    @jsonArrayMember(Meaning)
    //@ts-ignore
    meanings: Meaning[] = [];

    constructor(nameOfType: string) {
        this.nameOfType = nameOfType;
    }

    setNameOfType(): void {
        let nameOfType = readlineSync.question('Enter again name of type:  ');
        this.nameOfType = nameOfType;
    }

    findMeaning(definition: string): Meaning | undefined {
        return this.meanings.find(meaning => {return meaning.definition == definition});
    }

    addMeaning(): void {
        do {
            let definition = readlineSync.question('Enter meaning you want to add:  ');
            if (this.findMeaning(definition) == undefined) {
                var continueAddMeaning;
                let meaning = new Meaning(definition);
                meaning.addExample();
                this.meanings.push(meaning);
                continueAddMeaning = readlineSync.question('Do you want to continue entering meaning?:  ');
            } else {
                console.log('This meaning has existed!');
                continueAddMeaning = readlineSync.question('Do you want to continue entering meaning?:  ');
            }
        } while (continueAddMeaning == "Yes");
    }

    deleteMeaning(): void {
        let continueDeleteMeaning
        do {
            let definition = readlineSync.question('Enter meaning you want to delete:  ');
            if (this.findMeaning(definition) !== undefined) {
                this.meanings = this.meanings.filter(meaning => {return meaning.definition !== definition});
                continueDeleteMeaning = readlineSync.question('Do you want to continue deleting meaning?:  ');
            } else {
                console.log('This meaning has not existed!')
                continueDeleteMeaning = readlineSync.question('Do you want to continue deleting meaning?:  ');
            }
        } while (continueDeleteMeaning == "Yes");
    }

    edit(): void {
        while (true) {
            subMenuEditOneType();
            let number = +readlineSync.question("Choose action:  ");
            switch (number) {
                case editOneType.changeName:
                    this.setNameOfType();
                    break;
                case editOneType.editMeanings:
                    while (true) {
                        subMenuEditMeanings();
                        let number = +readlineSync.question('Choose action:  ');
                        switch (number) {
                            case editMeanings.addMeaning:
                                this.addMeaning();
                                break;
                            case editMeanings.deleteMeaning:
                                this.deleteMeaning();
                                break;
                            case editMeanings.editOneMeaning:
                                try {
                                    let definition = readlineSync.question('Enter the meaning you want to edit:  ');
                                    let meaning = this.findMeaning(definition);
                                    if (meaning !== undefined) meaning.editOneMeaning();
                                    else throw new Error('This meaning has not existed!');
                                } catch (e) {
                                    console.log(e.message);
                                }
                                break;
                            case editMeanings.exit:
                                return;
                        }
                    }
                case editOneType.exit:
                    return;
            }
        }
    }
}