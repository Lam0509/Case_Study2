"use strict";
exports.__esModule = true;
var Dictionary_1 = require("./Dictionary");
var readlineSync = require("readline-sync");
var isExist = false;
function mainMenu() {
    console.log('1: Thêm một từ vào từ điển');
    console.log('0: Thoát');
}
while (!isExist) {
    mainMenu();
    var number = readlineSync.question('Chọn chức năng: ');
    switch (number) {
        case "1":
            Dictionary_1.Dictionary.addWord();
            break;
        case "0":
            isExist = true;
            break;
    }
}
