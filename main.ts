import {Dictionary} from "./Dictionary";
import {Word} from "./Word";
import {Type} from "./Type";
import {Meaning} from "./Meaning";
import {Example} from "./Example";
import * as readlineSync from "readline-sync";

let isExist = false;

function mainMenu() {
    console.log('1: Thêm một từ vào từ điển');
    console.log('2: Xóa 1 từ trong từ điển');
    console.log('3: Sửa 1 từ trong từ điển');
    console.log('0: Thoát');
}

while (!isExist) {
    mainMenu();
    let number = readlineSync.question('Chọn chức năng: ');
    switch (number) {
        case "1":
            Dictionary.addWord();
            break;
        case "0":
            isExist = true;
            break;
    }
}


