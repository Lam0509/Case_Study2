import {Word} from "./Word";
import {subMenuEditWord} from "../View/Menu";
import {writeWordsData} from "../Database/DBHelper";
import {TypedJSON} from "typedjson";
import * as readlineSync from "readline-sync";
import * as fs from 'fs';
import {editWord} from "../Enum/Choice";

export class Dictionary {
    static words: Word[] = TypedJSON.parseAsArray(fs.readFileSync('C:\\Users\\Admin\\Case Study\\Src\\Database\\wordsData.json', {
        encoding: "utf8", flag: "r"
    }), Word);


    static showDictionary(): void {
        if (Dictionary.words.length !== 0) {
            Dictionary.words.sort((a, b) => {
                if (a.name.toLowerCase() < b.name.toLowerCase()) {return -1;}
                if (a.name.toLowerCase() > b.name.toLowerCase()) {return 1;}
                return 0;
            });
            Dictionary.words.forEach(word => {
                console.table(`${word.name}\t${word.pronoun}`)
            })
        } else throw new Error('There is not any words in the dictionary!');
    }

    static findWord(name: string): Word {
        return Dictionary.words.find(word=>{return word.name == name});
    }

    static showWord(): void {
        let name = readlineSync.question('Enter the word you want to translate:  ');
        const word = Dictionary.findWord(name);
        if (word !== undefined) {
            console.log(`Word: ${word.name}`)
            console.log(`Pronunciation: ${word.pronoun}`);
            console.log("---------------")
            word.types.forEach(type => {
                console.log(`\tType: ${type.nameOfType}`)
                console.log("\t---------------")
                type.meanings.forEach(meaning => {
                    console.log(`\t\tMeaning: ${meaning.definition}`)
                    console.log("\t\t---------------")
                    meaning.examples.forEach(example => {
                        console.log(`\t\tExample:`)
                        console.log(`\t\t\tEnglish: ${example.englishSentence}`)
                        console.log(`\t\t\tVietnamese: ${example.vietnameseSentence}`)
                    })
                })
            })
            console.log("---------------")
            console.log(`Synonyms: ${word.synonyms}`)
        } else throw new Error('This word has not existed in the dictionary');
    }

    static addWord(): void {
        let name = readlineSync.question('Enter word you want to add:  ');
        if (Dictionary.findWord(name) == undefined) {
            let pronoun = readlineSync.question('Enter this word\'s pronunciation:  ');
            let word = new Word(name, pronoun);
            word.addType();
            word.addSynonym();
            Dictionary.words.push(word);
            writeWordsData();
        } else throw new Error('This word has existed!');
    }

    static deleteWord(): void {
        let name = readlineSync.question('Enter word you want to delete:  ');
        if (Dictionary.findWord(name) !== undefined) {
            Dictionary.words = Dictionary.words.filter(word => word.name !== name);
            writeWordsData();
        } else throw new Error('This word has not existed in the dictionary');
    }

    static editWord(): void {
        let name = readlineSync.question('Enter word you want to edit:  ');
        const word = Dictionary.findWord(name);
        if (word !== undefined) {
            while (true) {
                subMenuEditWord();
                let number = +readlineSync.question('Choose action:  ');
                switch (number) {
                    case editWord.changeName:
                        word.setName();
                        writeWordsData();
                        break;
                    case editWord.changePronoun:
                        word.setPronoun();
                        writeWordsData();
                        break;
                    case editWord.changeTypes:
                        word.editTypes();
                        writeWordsData();
                        break;
                    case editWord.changeSyns:
                        word.editSynonyms();
                        writeWordsData();
                        break;
                    case editWord.exit:
                        return;
                }
            }
        } else throw new Error('This word has not existed in the dictionary');
    }
}