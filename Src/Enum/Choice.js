"use strict";
exports.__esModule = true;
exports.editExamples = exports.editOneMeaning = exports.editMeanings = exports.editOneType = exports.editTypes = exports.editSyn = exports.editWord = exports.menuForUser = exports.menuForAdmin = exports.mainMenu = void 0;
var mainMenu;
(function (mainMenu) {
    mainMenu[mainMenu["Login"] = 1] = "Login";
    mainMenu[mainMenu["Register"] = 2] = "Register";
    mainMenu[mainMenu["Exit"] = 0] = "Exit";
})(mainMenu = exports.mainMenu || (exports.mainMenu = {}));
var menuForAdmin;
(function (menuForAdmin) {
    menuForAdmin[menuForAdmin["addWord"] = 1] = "addWord";
    menuForAdmin[menuForAdmin["deleteWord"] = 2] = "deleteWord";
    menuForAdmin[menuForAdmin["editWord"] = 3] = "editWord";
    menuForAdmin[menuForAdmin["logOff"] = 0] = "logOff";
})(menuForAdmin = exports.menuForAdmin || (exports.menuForAdmin = {}));
var menuForUser;
(function (menuForUser) {
    menuForUser[menuForUser["showDictionary"] = 1] = "showDictionary";
    menuForUser[menuForUser["searchWord"] = 2] = "searchWord";
    menuForUser[menuForUser["logOff"] = 0] = "logOff";
})(menuForUser = exports.menuForUser || (exports.menuForUser = {}));
var editWord;
(function (editWord) {
    editWord[editWord["changeName"] = 1] = "changeName";
    editWord[editWord["changePronoun"] = 2] = "changePronoun";
    editWord[editWord["changeTypes"] = 3] = "changeTypes";
    editWord[editWord["changeSyns"] = 4] = "changeSyns";
    editWord[editWord["exit"] = 0] = "exit";
})(editWord = exports.editWord || (exports.editWord = {}));
var editSyn;
(function (editSyn) {
    editSyn[editSyn["addSyn"] = 1] = "addSyn";
    editSyn[editSyn["deleteSyn"] = 2] = "deleteSyn";
    editSyn[editSyn["exit"] = 0] = "exit";
})(editSyn = exports.editSyn || (exports.editSyn = {}));
var editTypes;
(function (editTypes) {
    editTypes[editTypes["addType"] = 1] = "addType";
    editTypes[editTypes["deleteType"] = 2] = "deleteType";
    editTypes[editTypes["editOneType"] = 3] = "editOneType";
    editTypes[editTypes["exit"] = 0] = "exit";
})(editTypes = exports.editTypes || (exports.editTypes = {}));
var editOneType;
(function (editOneType) {
    editOneType[editOneType["changeName"] = 1] = "changeName";
    editOneType[editOneType["editMeanings"] = 2] = "editMeanings";
    editOneType[editOneType["exit"] = 0] = "exit";
})(editOneType = exports.editOneType || (exports.editOneType = {}));
var editMeanings;
(function (editMeanings) {
    editMeanings[editMeanings["addMeaning"] = 1] = "addMeaning";
    editMeanings[editMeanings["deleteMeaning"] = 2] = "deleteMeaning";
    editMeanings[editMeanings["editOneMeaning"] = 3] = "editOneMeaning";
    editMeanings[editMeanings["exit"] = 0] = "exit";
})(editMeanings = exports.editMeanings || (exports.editMeanings = {}));
var editOneMeaning;
(function (editOneMeaning) {
    editOneMeaning[editOneMeaning["changeDefinition"] = 1] = "changeDefinition";
    editOneMeaning[editOneMeaning["editExamples"] = 2] = "editExamples";
    editOneMeaning[editOneMeaning["exit"] = 0] = "exit";
})(editOneMeaning = exports.editOneMeaning || (exports.editOneMeaning = {}));
var editExamples;
(function (editExamples) {
    editExamples[editExamples["addExample"] = 1] = "addExample";
    editExamples[editExamples["deleteExample"] = 2] = "deleteExample";
    editExamples[editExamples["exit"] = 0] = "exit";
})(editExamples = exports.editExamples || (exports.editExamples = {}));
