"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Type = void 0;
var Meaning_1 = require("./Meaning");
var readlineSync = require("readline-sync");
var Menu_1 = require("../View/Menu");
var typedjson_1 = require("typedjson");
var Type = /** @class */ (function () {
    function Type(nameOfType) {
        //@ts-ignore
        this.meanings = [];
        this.nameOfType = nameOfType;
    }
    Type.prototype.setNameOfType = function () {
        var nameOfType = readlineSync.question('Enter again name of type:  ');
        this.nameOfType = nameOfType;
    };
    Type.prototype.findMeaning = function (definition) {
        return this.meanings.find(function (meaning) { return meaning.definition == definition; });
    };
    Type.prototype.addMeaning = function () {
        do {
            var definition = readlineSync.question('Enter meaning you want to add:  ');
            if (this.findMeaning(definition) == undefined) {
                var continueAddMeaning;
                var meaning = new Meaning_1.Meaning(definition);
                meaning.addExample();
                this.meanings.push(meaning);
                continueAddMeaning = readlineSync.question('Do you want to continue entering meaning?:  ');
            }
            else {
                console.log('This meaning has existed!');
                continueAddMeaning = readlineSync.question('Do you want to continue entering meaning?:  ');
            }
        } while (continueAddMeaning == "Yes");
    };
    Type.prototype.deleteMeaning = function () {
        var continueDeleteMeaning;
        var _loop_1 = function () {
            var definition = readlineSync.question('Enter meaning you want to delete:  ');
            if (this_1.findMeaning(definition) !== undefined) {
                this_1.meanings = this_1.meanings.filter(function (meaning) { return meaning.definition !== definition; });
                continueDeleteMeaning = readlineSync.question('Do you want to continue deleting meaning?:  ');
            }
            else {
                console.log('This meaning has not existed!');
                continueDeleteMeaning = readlineSync.question('Do you want to continue deleting meaning?:  ');
            }
        };
        var this_1 = this;
        do {
            _loop_1();
        } while (continueDeleteMeaning == "Yes");
    };
    Type.prototype.edit = function () {
        while (true) {
            (0, Menu_1.subMenuEditOneType)();
            var number = readlineSync.question("Choose action:  ");
            switch (number) {
                case "1":
                    this.setNameOfType();
                    break;
                case "2":
                    while (true) {
                        (0, Menu_1.subMenuEditMeanings)();
                        var number_1 = readlineSync.question('Choose action:  ');
                        switch (number_1) {
                            case "1":
                                this.addMeaning();
                                break;
                            case "2":
                                this.deleteMeaning();
                                break;
                            case "3":
                                try {
                                    var definition = readlineSync.question('Enter the meaning you want to edit:  ');
                                    var meaning = this.findMeaning(definition);
                                    if (meaning !== undefined)
                                        meaning.editOneMeaning();
                                    else
                                        throw new Error('This meaning has not existed!');
                                }
                                catch (e) {
                                    console.log(e.message);
                                }
                                break;
                            case "0":
                                return;
                        }
                    }
                case "0":
                    return;
            }
        }
    };
    __decorate([
        (0, typedjson_1.jsonMember)(String)
        //@ts-ignore
    ], Type.prototype, "nameOfType");
    __decorate([
        (0, typedjson_1.jsonArrayMember)(Meaning_1.Meaning)
        //@ts-ignore
    ], Type.prototype, "meanings");
    Type = __decorate([
        typedjson_1.jsonObject
        //@ts-ignore
    ], Type);
    return Type;
}());
exports.Type = Type;
