"use strict";
exports.__esModule = true;
exports.AccountManagement = void 0;
var Account_1 = require("./Account");
var typedjson_1 = require("typedjson");
var fs = require("fs");
var DBHelper_1 = require("../Database/DBHelper");
var readlineSync = require("readline-sync");
var EmailRegex_1 = require("../View/ValidateInput/EmailRegex");
var PasswordRegex_1 = require("../View/ValidateInput/PasswordRegex");
var AdminAccountRegex_1 = require("../View/ValidateInput/AdminAccountRegex");
var Menu_1 = require("../View/Menu");
var Choice_1 = require("../Enum/Choice");
var Dictionary_1 = require("./Dictionary");
var DictionaryController_1 = require("../Controller/DictionaryController");
var AccountManagement = /** @class */ (function () {
    function AccountManagement() {
    }
    AccountManagement.addAccount = function (account) {
        this.accounts.push(account);
        (0, DBHelper_1.writeAccountsData)();
    };
    AccountManagement.findAccount = function (email, password) {
        return this.accounts.filter(function (account) {
            return account.email == email && account.password == password;
        }).length;
    };
    AccountManagement.checkAdminAccount = function (email) {
        return this.accounts.filter(function (account) {
            return account.email == email;
        }).length;
    };
    AccountManagement.register = function () {
        var newEmail = readlineSync.question('Enter email:  ');
        var newPassword = readlineSync.question('Enter password:  ');
        if (EmailRegex_1.emailRegex.validateEmail(newEmail) && PasswordRegex_1.passwordRegex.validatePassword(newPassword)) {
            if (AccountManagement.checkAdminAccount(newEmail) !== 0) {
                console.log('This email has existed!');
            }
            else {
                var account = new Account_1.Account(newEmail, newPassword);
                AccountManagement.addAccount(account);
            }
        }
        else
            console.log('Wrong syntax');
    };
    AccountManagement.login = function () {
        var typeEmail = readlineSync.question('Enter email:  ');
        var typePassword = readlineSync.question('Enter password:  ');
        if (EmailRegex_1.emailRegex.validateEmail(typeEmail) && PasswordRegex_1.passwordRegex.validatePassword(typePassword)) {
            if (AccountManagement.findAccount(typeEmail, typePassword) !== 0) {
                if (AdminAccountRegex_1.AdminAccountRegex.validateAdminAccount(typeEmail)) {
                    var isOutAdminMenu = false;
                    while (!isOutAdminMenu) {
                        (0, Menu_1.adminMenu)();
                        var number = +readlineSync.question('Choose action:  ');
                        switch (number) {
                            case Choice_1.menuForAdmin.addWord:
                                (0, DictionaryController_1.solveException)(Dictionary_1.Dictionary.addWord);
                                break;
                            case Choice_1.menuForAdmin.deleteWord:
                                (0, DictionaryController_1.solveException)(Dictionary_1.Dictionary.deleteWord);
                                break;
                            case Choice_1.menuForAdmin.editWord:
                                (0, DictionaryController_1.solveException)(Dictionary_1.Dictionary.editWord);
                                break;
                            case Choice_1.menuForAdmin.logOff:
                                isOutAdminMenu = true;
                                break;
                        }
                    }
                }
                else {
                    var isOutUserMenu = false;
                    while (!isOutUserMenu) {
                        (0, Menu_1.userMenu)();
                        var number = +readlineSync.question('Choose action:  ');
                        switch (number) {
                            case Choice_1.menuForUser.showDictionary:
                                (0, DictionaryController_1.solveException)(Dictionary_1.Dictionary.showDictionary);
                                break;
                            case Choice_1.menuForUser.searchWord:
                                (0, DictionaryController_1.solveException)(Dictionary_1.Dictionary.showWord);
                                break;
                            case Choice_1.menuForUser.logOff:
                                isOutUserMenu = true;
                                break;
                        }
                    }
                }
            }
            else
                console.log('This account has not existed!');
        }
        else
            console.log('Wrong syntax!');
    };
    AccountManagement.accounts = typedjson_1.TypedJSON.parseAsArray(fs.readFileSync('C:\\Users\\Admin\\Case Study\\Src\\Database\\accountsData.json', {
        encoding: "utf8",
        flag: "r"
    }), Account_1.Account);
    return AccountManagement;
}());
exports.AccountManagement = AccountManagement;
