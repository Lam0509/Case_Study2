"use strict";
exports.__esModule = true;
exports.subMenuEditExamples = exports.subMenuEditOneMeaning = exports.subMenuEditMeanings = exports.subMenuEditOneType = exports.subMenuEditTypes = exports.subMenuEditSynonyms = exports.subMenuEditWord = exports.adminMenu = exports.userMenu = exports.Login = void 0;
function Login() {
    console.log("1: Login");
    console.log("2: Register");
    console.log("0: Exit");
}
exports.Login = Login;
function userMenu() {
    console.log("1: Show Dictionary");
    console.log("2: Search one word");
    console.log("0: Log off");
}
exports.userMenu = userMenu;
function adminMenu() {
    console.log("1: Add one Word");
    console.log("2: Delete one Word");
    console.log("3: Edit one Word");
    console.log("0: Log off");
}
exports.adminMenu = adminMenu;
function subMenuEditWord() {
    console.log("1: Change name of word");
    console.log("2: Edit word's pronunciation");
    console.log("3: Edit word's types");
    console.log("4: Edit word's synonyms");
    console.log("0: Exit");
}
exports.subMenuEditWord = subMenuEditWord;
function subMenuEditSynonyms() {
    console.log("1: Add synonym");
    console.log("2: Delete synonym");
    console.log("0: Exit");
}
exports.subMenuEditSynonyms = subMenuEditSynonyms;
function subMenuEditTypes() {
    console.log("1: Add one type");
    console.log("2: Delete one type");
    console.log("3: Edit one type");
    console.log("0: Exit");
}
exports.subMenuEditTypes = subMenuEditTypes;
function subMenuEditOneType() {
    console.log("1: Change name of type");
    console.log("2: Edit meanings");
    console.log("0: Exit");
}
exports.subMenuEditOneType = subMenuEditOneType;
function subMenuEditMeanings() {
    console.log("1: Add one meaning");
    console.log("2: Delete one meaning");
    console.log("3: Edit one meaning");
    console.log("0: Exit");
}
exports.subMenuEditMeanings = subMenuEditMeanings;
function subMenuEditOneMeaning() {
    console.log("1: Change definition");
    console.log("2: Edit examples");
    console.log("0: Exit");
}
exports.subMenuEditOneMeaning = subMenuEditOneMeaning;
function subMenuEditExamples() {
    console.log("1: Add example");
    console.log("2: Delete example");
    console.log("0: Exit");
}
exports.subMenuEditExamples = subMenuEditExamples;
