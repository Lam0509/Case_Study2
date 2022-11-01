"use strict";
exports.__esModule = true;
exports.DictionaryController = exports.solveException = void 0;
var Menu_1 = require("../View/Menu");
var readlineSync = require("readline-sync");
var AccountManagement_1 = require("../Model/AccountManagement");
var Choice_1 = require("../Enum/Choice");
function solveException(myFunction) {
    try {
        myFunction();
    }
    catch (e) {
        console.log(e.message);
    }
}
exports.solveException = solveException;
var DictionaryController = /** @class */ (function () {
    function DictionaryController() {
    }
    DictionaryController.menuDictionaryController = function () {
        var isExist = false;
        while (!isExist) {
            (0, Menu_1.Menu)();
            var number = +readlineSync.question('Choose action:  ');
            switch (number) {
                case Choice_1.mainMenu.Login:
                    AccountManagement_1.AccountManagement.login();
                    break;
                case Choice_1.mainMenu.Register:
                    AccountManagement_1.AccountManagement.register();
                    break;
                case Choice_1.mainMenu.Exit:
                    isExist = true;
                    break;
            }
        }
    };
    return DictionaryController;
}());
exports.DictionaryController = DictionaryController;
