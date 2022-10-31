"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Word = void 0;
var Type_1 = require("./Type");
var readlineSync = require("readline-sync");
var Menu_1 = require("../View/Menu");
var typedjson_1 = require("typedjson");
var Choice_1 = require("../Enum/Choice");
var Word = /** @class */ (function () {
    function Word(name, pronoun) {
        //@ts-ignore
        this.types = [];
        //@ts-ignore
        this.synonyms = [];
        this.name = name;
        this.pronoun = pronoun;
    }
    Word.prototype.setName = function () {
        var name = readlineSync.question('Enter again name of word:  ');
        this.name = name;
    };
    Word.prototype.setPronoun = function () {
        var pronoun = readlineSync.question('Enter again pronoun of word:  ');
        this.pronoun = pronoun;
    };
    Word.prototype.findType = function (typeName) {
        return this.types.find(function (type) { return type.nameOfType == typeName; });
    };
    Word.prototype.addType = function () {
        do {
            var nameOfType = readlineSync.question('Enter type you want to add:  ');
            if (this.findType(nameOfType) == undefined) {
                var continueAddType;
                var type = new Type_1.Type(nameOfType);
                type.addMeaning();
                this.types.push(type);
                continueAddType = readlineSync.question('Do you want to continue entering type?:  ');
            }
            else {
                console.log('This type has existed!');
                continueAddType = readlineSync.question('Do you want to continue entering type?:  ');
            }
        } while (continueAddType == "Yes");
    };
    Word.prototype.deleteType = function () {
        var continueDeleteType;
        var _loop_1 = function () {
            var nameOfType = readlineSync.question('Enter type you want to delete:  ');
            if (this_1.findType(nameOfType) !== undefined) {
                this_1.types = this_1.types.filter(function (type) {
                    return type.nameOfType !== nameOfType;
                });
                continueDeleteType = readlineSync.question('Do you want to continue deleting type?:  ');
            }
            else {
                console.log('This type has not existed!');
                continueDeleteType = readlineSync.question('Do you want to continue deleting type?:  ');
            }
        };
        var this_1 = this;
        do {
            _loop_1();
        } while (continueDeleteType == "Yes");
    };
    Word.prototype.editTypes = function () {
        while (true) {
            (0, Menu_1.subMenuEditTypes)();
            var number = +readlineSync.question('Choose action:  ');
            switch (number) {
                case Choice_1.editTypes.addType:
                    this.addType();
                    break;
                case Choice_1.editTypes.deleteType:
                    this.deleteType();
                    break;
                case Choice_1.editTypes.editOneType:
                    try {
                        var nameOfType = readlineSync.question('Enter type you want to edit:  ');
                        var type = this.findType(nameOfType);
                        if (type !== undefined)
                            type.edit();
                        else
                            throw new Error('This type has not existed!');
                    }
                    catch (e) {
                        console.log(e.message);
                    }
                    break;
                case Choice_1.editTypes.exit:
                    return;
            }
        }
    };
    Word.prototype.findSynonym = function (typeSynonym) {
        return this.synonyms.find(function (synonym) { return synonym == typeSynonym; });
    };
    Word.prototype.addSynonym = function () {
        do {
            var typeSynonym = readlineSync.question('Enter the synonym you want to add:  ');
            if (this.findSynonym(typeSynonym) == undefined) {
                var continueAddSynonym;
                this.synonyms.push(typeSynonym);
                continueAddSynonym = readlineSync.question('Do you want to continue adding synonym?:  ');
            }
            else {
                console.log('This synonym has existed!');
                continueAddSynonym = readlineSync.question('Do you want to continue adding synonym?:  ');
            }
        } while (continueAddSynonym == "Yes");
    };
    Word.prototype.deleteSynonym = function () {
        var continueDeleteSynonym;
        var _loop_2 = function () {
            var typeSynonym = readlineSync.question('Enter the synonym you want to delete:  ');
            if (this_2.findSynonym(typeSynonym) !== undefined) {
                this_2.synonyms = this_2.synonyms.filter(function (synonym) { return synonym !== typeSynonym; });
                continueDeleteSynonym = readlineSync.question('Do you want to continue deleting synonym?:  ');
            }
            else {
                console.log('This synonym has not existed!');
                continueDeleteSynonym = readlineSync.question('Do you want to continue deleting synonym?:  ');
            }
        };
        var this_2 = this;
        do {
            _loop_2();
        } while (continueDeleteSynonym == "Yes");
    };
    Word.prototype.editSynonyms = function () {
        while (true) {
            (0, Menu_1.subMenuEditSynonyms)();
            var number = +readlineSync.question('Choose action:  ');
            switch (number) {
                case Choice_1.editSyn.addSyn:
                    this.addSynonym();
                    break;
                case Choice_1.editSyn.deleteSyn:
                    this.deleteSynonym();
                    break;
                case Choice_1.editSyn.exit:
                    return;
            }
        }
    };
    __decorate([
        (0, typedjson_1.jsonMember)(String)
        //@ts-ignore
    ], Word.prototype, "name");
    __decorate([
        (0, typedjson_1.jsonMember)(String)
        //@ts-ignore
    ], Word.prototype, "pronoun");
    __decorate([
        (0, typedjson_1.jsonArrayMember)(Type_1.Type)
        //@ts-ignore
    ], Word.prototype, "types");
    __decorate([
        (0, typedjson_1.jsonArrayMember)(String)
        //@ts-ignore
    ], Word.prototype, "synonyms");
    Word = __decorate([
        typedjson_1.jsonObject
        //@ts-ignore
    ], Word);
    return Word;
}());
exports.Word = Word;
