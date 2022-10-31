"use strict";
exports.__esModule = true;
exports.AccountManagement = void 0;
var Account_1 = require("./Account");
var typedjson_1 = require("typedjson");
var fs = require("fs");
var DBHelper_1 = require("../Database/DBHelper");
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
    AccountManagement.accounts = typedjson_1.TypedJSON.parseAsArray(fs.readFileSync('C:\\Users\\Admin\\Case Study\\Src\\Database\\accountsData.json', {
        encoding: "utf8",
        flag: "r"
    }), Account_1.Account);
    return AccountManagement;
}());
exports.AccountManagement = AccountManagement;
