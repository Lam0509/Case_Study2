"use strict";
exports.__esModule = true;
exports.Dictionary = void 0;
var Word_1 = require("./Word");
var readlineSync = require("readline-sync");
var Type_1 = require("./Type");
var Dictionary = /** @class */ (function () {
    function Dictionary() {
    }
    Dictionary.addWord = function () {
        var name = readlineSync.question('Nhập 1 từ mới:  ');
        var pronoun = readlineSync.question('Nhập phát âm của từ đó:  ');
        var word = new Word_1.Word(name, pronoun);
        var number = readlineSync.question('Nhập số:   ');
        while (number != '0') {
            var nameOfType = readlineSync.question('Nhập type:  ');
            var type = new Type_1.Type(nameOfType);
            word.types.push(type);
            number = readlineSync.question('Nhập số:   ');
        }
        Dictionary.words.push(word);
    };
    Dictionary.words = [];
    return Dictionary;
}());
exports.Dictionary = Dictionary;
