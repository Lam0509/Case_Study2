import {Menu} from "../View/Menu";
import * as readlineSync from "readline-sync";
import {AccountManagement} from "../Model/AccountManagement";
import {mainMenu} from "../Enum/Choice";

export function solveException(myFunction) {
    try {
        myFunction();
    } catch (e) {
        console.log(e.message);
    }
}

export class DictionaryController {
    static menuDictionaryController() {
        let isExist = false;
        while (!isExist) {
            Menu();
            let number = +readlineSync.question('Choose action:  ');
            switch (number) {
                case mainMenu.Login:
                    AccountManagement.login();
                    break;
                case mainMenu.Register:
                    AccountManagement.register();
                    break;
                case mainMenu.Exit:
                    isExist = true;
                    break;
            }
        }
    }
}