"use strict";
exports.__esModule = true;
exports.passwordRegex = void 0;
var passwordRegex = /** @class */ (function () {
    function passwordRegex() {
    }
    passwordRegex.validatePassword = function (password) {
        return this.regex.test(password);
    };
    passwordRegex.regex = /^[A-Za-z0-9]{8,}$/;
    return passwordRegex;
}());
exports.passwordRegex = passwordRegex;
