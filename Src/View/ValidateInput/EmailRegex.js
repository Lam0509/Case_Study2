"use strict";
exports.__esModule = true;
exports.emailRegex = void 0;
var emailRegex = /** @class */ (function () {
    function emailRegex() {
    }
    emailRegex.validateEmail = function (email) {
        return this.regex.test(email);
    };
    emailRegex.regex = /^[A-Za-z0-9]+(@admin|@[A-Za-z]+)\.[A-Za-z]+$/;
    return emailRegex;
}());
exports.emailRegex = emailRegex;
