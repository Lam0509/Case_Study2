"use strict";
exports.__esModule = true;
exports.DictionaryController = void 0;
var Menu_1 = require("../View/Menu");
var readlineSync = require("readline-sync");
var Dictionary_1 = require("../Model/Dictionary");
var Account_1 = require("../Model/Account");
var AccountManagement_1 = require("../Model/AccountManagement");
var EmailRegex_1 = require("../View/ValidateInput/EmailRegex");
var PasswordRegex_1 = require("../View/ValidateInput/PasswordRegex");
var AdminAccountRegex_1 = require("../View/ValidateInput/AdminAccountRegex");
function solveException(myFunction) {
    try {
        myFunction();
    }
    catch (e) {
        console.log(e.message);
    }
}
var DictionaryController = /** @class */ (function () {
    function DictionaryController() {
    }
    DictionaryController.menuDictionaryController = function () {
        var isExist = false;
        while (!isExist) {
            (0, Menu_1.Login)();
            var number = readlineSync.question('Choose action:  ');
            switch (number) {
                case "1":
                    try {
                        var typeEmail = readlineSync.question('Enter email:  ');
                        var typePassword = readlineSync.question('Enter password:  ');
                        if (EmailRegex_1.emailRegex.validateEmail(typeEmail) && PasswordRegex_1.passwordRegex.validatePassword(typePassword)) {
                            if (AccountManagement_1.AccountManagement.findAccount(typeEmail, typePassword) !== 0) {
                                if (AdminAccountRegex_1.AdminAccountRegex.validateAdminAccount(typeEmail)) {
                                    var isOutAdminMenu = false;
                                    while (!isOutAdminMenu) {
                                        (0, Menu_1.adminMenu)();
                                        var number_1 = readlineSync.question('Choose action:  ');
                                        switch (number_1) {
                                            case "1":
                                                solveException(Dictionary_1.Dictionary.addWord);
                                                break;
                                            case "2":
                                                solveException(Dictionary_1.Dictionary.deleteWord);
                                                break;
                                            case "3":
                                                solveException(Dictionary_1.Dictionary.editWord);
                                                break;
                                            case "0":
                                                isOutAdminMenu = true;
                                                break;
                                        }
                                    }
                                }
                                else {
                                    var isOutUserMenu = false;
                                    while (!isOutUserMenu) {
                                        (0, Menu_1.userMenu)();
                                        var number_2 = readlineSync.question('Choose action:  ');
                                        switch (number_2) {
                                            case "1":
                                                solveException(Dictionary_1.Dictionary.showDictionary);
                                                break;
                                            case "2":
                                                solveException(Dictionary_1.Dictionary.showWord);
                                                break;
                                            case "0":
                                                isOutUserMenu = true;
                                                break;
                                        }
                                    }
                                }
                            }
                            else
                                throw new Error('This account has not existed!');
                        }
                        else
                            throw new Error('Wrong syntax!');
                    }
                    catch (e) {
                        console.log(e.message);
                    }
                    break;
                case "2":
                    try {
                        var newEmail = readlineSync.question('Enter email:  ');
                        var newPassword = readlineSync.question('Enter password:  ');
                        if (EmailRegex_1.emailRegex.validateEmail(newEmail) && PasswordRegex_1.passwordRegex.validatePassword(newPassword)) {
                            if (AccountManagement_1.AccountManagement.checkAdminAccount(newEmail) !== 0) {
                                throw new Error('This email has existed!');
                            }
                            else {
                                var account = new Account_1.Account(newEmail, newPassword);
                                AccountManagement_1.AccountManagement.addAccount(account);
                            }
                        }
                        else
                            throw new Error('Wrong syntax');
                    }
                    catch (e) {
                        console.log(e.message);
                    }
                    break;
                case "0":
                    isExist = true;
                    break;
            }
        }
    };
    return DictionaryController;
}());
exports.DictionaryController = DictionaryController;
