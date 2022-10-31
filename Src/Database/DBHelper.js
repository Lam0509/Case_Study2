"use strict";
exports.__esModule = true;
exports.writeAccountsData = exports.writeWordsData = void 0;
var Dictionary_1 = require("../Model/Dictionary");
var AccountManagement_1 = require("../Model/AccountManagement");
var fs = require("fs");
function writeWordsData() {
    fs.writeFileSync('./wordsData.json', JSON.stringify(Dictionary_1.Dictionary.words, null, '\t'), {
        encoding: 'utf8'
    });
}
exports.writeWordsData = writeWordsData;
function writeAccountsData() {
    fs.writeFileSync('./accountsData.json', JSON.stringify(AccountManagement_1.AccountManagement.accounts, null, '\t'), {
        encoding: 'utf8'
    });
}
exports.writeAccountsData = writeAccountsData;
