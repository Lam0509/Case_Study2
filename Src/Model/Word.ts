import {Type} from "./Type";
import * as readlineSync from "readline-sync";
import {subMenuEditTypes, subMenuEditSynonyms} from "../View/Menu";
import {jsonArrayMember, jsonMember, jsonObject} from "typedjson";
import {editSyn, editTypes} from "../Enum/Choice";

@jsonObject
//@ts-ignore
export class Word {

    @jsonMember(String)
    //@ts-ignore
    name: string;

    @jsonMember(String)
    //@ts-ignore
    pronoun: string;

    @jsonArrayMember(Type)
    //@ts-ignore
    types: Type[] = [];

    @jsonArrayMember(String)
    //@ts-ignore
    synonyms: string[] = [];

    constructor(name: string,
                pronoun: string) {
        this.name = name;
        this.pronoun = pronoun;
    }

    setName(): void {
        let name = readlineSync.question('Enter again name of word:  ');
        this.name = name;
    }

    setPronoun(): void {
        let pronoun = readlineSync.question('Enter again pronoun of word:  ');
        this.pronoun = pronoun;
    }

    findType(typeName: string): Type | undefined {
        return this.types.find(type => {return type.nameOfType == typeName});
    }

    addType(): void {
        do {
            let nameOfType = readlineSync.question('Enter type you want to add:  ');
            if (this.findType(nameOfType) == undefined) {
                var continueAddType;
                let type = new Type(nameOfType);
                type.addMeaning();
                this.types.push(type);
                continueAddType = readlineSync.question('Do you want to continue entering type?:  ');
            } else {
                console.log('This type has existed!');
                continueAddType = readlineSync.question('Do you want to continue entering type?:  ');
            }
        } while (continueAddType == "Yes");
    }

    deleteType(): void {
        let continueDeleteType;
        do {
            let nameOfType = readlineSync.question('Enter type you want to delete:  ');
            if (this.findType(nameOfType) !== undefined) {
                this.types = this.types.filter(type => {
                    return type.nameOfType !== nameOfType
                });
                continueDeleteType = readlineSync.question('Do you want to continue deleting type?:  ');
            } else {
                console.log('This type has not existed!');
                continueDeleteType = readlineSync.question('Do you want to continue deleting type?:  ');
            }
        } while (continueDeleteType == "Yes");

    }

    editTypes(): void {
        while (true) {
            subMenuEditTypes();
            let number = +readlineSync.question('Choose action:  ');
            switch (number) {
                case editTypes.addType:
                    this.addType();
                    break;
                case editTypes.deleteType:
                    this.deleteType();
                    break;
                case editTypes.editOneType:
                    try {
                        let nameOfType = readlineSync.question('Enter type you want to edit:  ');
                        const type = this.findType(nameOfType);
                        if (type !== undefined) type.edit();
                        else throw new Error('This type has not existed!');
                    } catch (e) {
                        console.log(e.message)
                    }
                    break;
                case editTypes.exit:
                    return;
            }
        }
    }

    findSynonym(typeSynonym: string): string | undefined {
        return this.synonyms.find(synonym => {return synonym == typeSynonym});
    }

    addSynonym(): void {
        do {
            let typeSynonym = readlineSync.question('Enter the synonym you want to add:  ');
            if (this.findSynonym(typeSynonym) == undefined) {
                var continueAddSynonym;
                this.synonyms.push(typeSynonym);
                continueAddSynonym = readlineSync.question('Do you want to continue adding synonym?:  ');
            } else {
                console.log('This synonym has existed!');
                continueAddSynonym = readlineSync.question('Do you want to continue adding synonym?:  ');
            }
        } while (continueAddSynonym == "Yes");
    }

    deleteSynonym(): void {
        let continueDeleteSynonym;
        do {
            let typeSynonym = readlineSync.question('Enter the synonym you want to delete:  ');
            if (this.findSynonym(typeSynonym) !== undefined) {
                this.synonyms = this.synonyms.filter(synonym => {return synonym !== typeSynonym});
                continueDeleteSynonym = readlineSync.question('Do you want to continue deleting synonym?:  ');
            } else {
                console.log('This synonym has not existed!');
                continueDeleteSynonym = readlineSync.question('Do you want to continue deleting synonym?:  ');
            }
        } while (continueDeleteSynonym == "Yes");
    }

    editSynonyms(): void {
        while (true) {
            subMenuEditSynonyms();
            let number = +readlineSync.question('Choose action:  ');
            switch (number) {
                case editSyn.addSyn:
                    this.addSynonym();
                    break;
                case editSyn.deleteSyn:
                    this.deleteSynonym();
                    break;
                case editSyn.exit:
                    return;
            }
        }
    }
}



