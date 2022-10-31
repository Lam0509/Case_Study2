"use strict";
exports.__esModule = true;
exports.AdminAccountRegex = void 0;
var AdminAccountRegex = /** @class */ (function () {
    function AdminAccountRegex() {
    }
    AdminAccountRegex.validateAdminAccount = function (email) {
        return this.regex.test(email);
    };
    AdminAccountRegex.regex = /^[A-Za-z0-9]+@admin\.[A-Za-z]+$/;
    return AdminAccountRegex;
}());
exports.AdminAccountRegex = AdminAccountRegex;
