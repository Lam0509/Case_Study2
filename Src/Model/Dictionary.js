"use strict";
exports.__esModule = true;
exports.Dictionary = void 0;
var Word_1 = require("./Word");
var Menu_1 = require("../View/Menu");
var DBHelper_1 = require("../Database/DBHelper");
var typedjson_1 = require("typedjson");
var readlineSync = require("readline-sync");
var fs = require("fs");
var Dictionary = /** @class */ (function () {
    function Dictionary() {
    }
    Dictionary.showDictionary = function () {
        if (Dictionary.words.length !== 0) {
            Dictionary.words.sort(function (a, b) {
                if (a.name.toLowerCase() < b.name.toLowerCase()) {
                    return -1;
                }
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                    return 1;
                }
                return 0;
            });
            Dictionary.words.forEach(function (word) {
                console.table("".concat(word.name, "\t").concat(word.pronoun));
            });
        }
        else
            throw new Error('There is not any words in the dictionary!');
    };
    Dictionary.findWord = function (name) {
        return Dictionary.words.find(function (word) { return word.name == name; });
    };
    Dictionary.showWord = function () {
        var name = readlineSync.question('Enter the word you want to translate:  ');
        var word = Dictionary.findWord(name);
        if (word !== undefined) {
            console.log("Word: ".concat(word.name));
            console.log("Pronunciation: ".concat(word.pronoun));
            console.log("---------------");
            word.types.forEach(function (type) {
                console.log("\tType: ".concat(type.nameOfType));
                console.log("\t---------------");
                type.meanings.forEach(function (meaning) {
                    console.log("\t\tMeaning: ".concat(meaning.definition));
                    console.log("\t\t---------------");
                    meaning.examples.forEach(function (example) {
                        console.log("\t\tExample:");
                        console.log("\t\t\tEnglish: ".concat(example.englishSentence));
                        console.log("\t\t\tVietnamese: ".concat(example.vietnameseSentence));
                    });
                });
            });
            console.log("---------------");
            word.synonyms.forEach(function (synonym) {
                console.log(synonym);
            });
        }
        else
            throw new Error('This word has not existed in the dictionary');
    };
    Dictionary.addWord = function () {
        var name = readlineSync.question('Enter word you want to add:  ');
        if (Dictionary.findWord(name) == undefined) {
            var pronoun = readlineSync.question('Enter this word\'s pronunciation:  ');
            var word = new Word_1.Word(name, pronoun);
            word.addType();
            word.addSynonym();
            Dictionary.words.push(word);
            (0, DBHelper_1.writeWordsData)();
        }
        else
            throw new Error('This word has existed!');
    };
    Dictionary.deleteWord = function () {
        var name = readlineSync.question('Enter word you want to delete:  ');
        if (Dictionary.findWord(name) !== undefined) {
            Dictionary.words = Dictionary.words.filter(function (word) { return word.name !== name; });
            (0, DBHelper_1.writeWordsData)();
        }
        else
            throw new Error('This word has not existed in the dictionary');
    };
    Dictionary.editWord = function () {
        var name = readlineSync.question('Enter word you want to edit:  ');
        var word = Dictionary.findWord(name);
        if (word !== undefined) {
            while (true) {
                (0, Menu_1.subMenuEditWord)();
                var number = readlineSync.question('Choose action:  ');
                switch (number) {
                    case "1":
                        word.setName();
                        (0, DBHelper_1.writeWordsData)();
                        break;
                    case "2":
                        word.setPronoun();
                        (0, DBHelper_1.writeWordsData)();
                        break;
                    case "3":
                        word.editTypes();
                        (0, DBHelper_1.writeWordsData)();
                        break;
                    case "4":
                        word.editSynonyms();
                        (0, DBHelper_1.writeWordsData)();
                        break;
                    case "0":
                        return;
                }
            }
        }
        else
            throw new Error('This word has not existed in the dictionary');
    };
    Dictionary.words = typedjson_1.TypedJSON.parseAsArray(fs.readFileSync('C:\\Users\\Admin\\Case Study\\Src\\Database\\wordsData.json', {
        encoding: "utf8", flag: "r"
    }), Word_1.Word);
    return Dictionary;
}());
exports.Dictionary = Dictionary;
