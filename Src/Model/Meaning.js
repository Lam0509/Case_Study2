"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Meaning = void 0;
var Example_1 = require("./Example");
var readlineSync = require("readline-sync");
var Menu_1 = require("../View/Menu");
var Menu_2 = require("../View/Menu");
var typedjson_1 = require("typedjson");
var Choice_1 = require("../Enum/Choice");
var Meaning = /** @class */ (function () {
    function Meaning(definition) {
        //@ts-ignore
        this.examples = [];
        this.definition = definition;
    }
    Meaning.prototype.setDefinition = function () {
        var definition = readlineSync.question('Enter again the definition:  ');
        this.definition = definition;
        this.examples = [];
    };
    Meaning.prototype.findExample = function (keyword) {
        return this.examples.find(function (example) { return example.checkEnglishSentence(keyword) || example.checkVietnameseSentence(keyword); });
    };
    Meaning.prototype.addExample = function () {
        var continueAddExample;
        do {
            var english = readlineSync.question('Enter english example:  ');
            var vietnamese = readlineSync.question('Enter vietnamese example:  ');
            var example = new Example_1.Example(english, vietnamese);
            this.examples.push(example);
            continueAddExample = readlineSync.question('Do you want to continue entering example?:  ');
        } while (continueAddExample == "Yes");
    };
    Meaning.prototype.deleteExample = function () {
        var continueDeleteQues;
        do {
            var keyword = readlineSync.question('Enter the keyword in the example you want to delete:  ');
            var example = this.findExample(keyword);
            if (example !== undefined) {
                this.examples = this.examples.filter(function (example) { return example !== example; });
                continueDeleteQues = readlineSync.question('Do you want to continue deleting example?:  ');
            }
            else {
                console.log('This example has not existed!');
                continueDeleteQues = readlineSync.question('Do you want to continue deleting example?:  ');
            }
        } while (continueDeleteQues == "Yes");
    };
    Meaning.prototype.editOneMeaning = function () {
        while (true) {
            (0, Menu_1.subMenuEditOneMeaning)();
            var number = +readlineSync.question('Choose action:  ');
            switch (number) {
                case Choice_1.editOneMeaning.changeDefinition:
                    this.setDefinition();
                    break;
                case Choice_1.editOneMeaning.editExamples:
                    while (true) {
                        (0, Menu_2.subMenuEditExamples)();
                        var number_1 = +readlineSync.question('Choose action:  ');
                        switch (number_1) {
                            case Choice_1.editExamples.addExample:
                                this.addExample();
                                break;
                            case Choice_1.editExamples.deleteExample:
                                this.deleteExample();
                                break;
                            case Choice_1.editExamples.exit:
                                return;
                        }
                    }
                case Choice_1.editOneMeaning.exit:
                    return;
            }
        }
    };
    __decorate([
        (0, typedjson_1.jsonMember)(String)
        //@ts-ignore
    ], Meaning.prototype, "definition");
    __decorate([
        (0, typedjson_1.jsonArrayMember)(Example_1.Example)
        //@ts-ignore
    ], Meaning.prototype, "examples");
    Meaning = __decorate([
        typedjson_1.jsonObject
        //@ts-ignore
    ], Meaning);
    return Meaning;
}());
exports.Meaning = Meaning;
