import {Menu, adminMenu, userMenu} from "../View/Menu";
import * as readlineSync from "readline-sync";
import {Dictionary} from "../Model/Dictionary";
import {Account} from "../Model/Account";
import {AccountManagement} from "../Model/AccountManagement";
import {emailRegex} from "../View/ValidateInput/EmailRegex";
import {passwordRegex} from "../View/ValidateInput/PasswordRegex";
import {AdminAccountRegex} from "../View/ValidateInput/AdminAccountRegex";
import {mainMenu, menuForAdmin, menuForUser} from "../Enum/Choice";

function solveException(myFunction) {
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
                    try {
                        let typeEmail = readlineSync.question('Enter email:  ');
                        let typePassword = readlineSync.question('Enter password:  ');
                        if (emailRegex.validateEmail(typeEmail) && passwordRegex.validatePassword(typePassword)) {
                            if (AccountManagement.findAccount(typeEmail, typePassword) !== 0) {
                                if (AdminAccountRegex.validateAdminAccount(typeEmail)) {
                                    let isOutAdminMenu = false;
                                    while (!isOutAdminMenu) {
                                        adminMenu();
                                        let number = +readlineSync.question('Choose action:  ');
                                        switch (number) {
                                            case menuForAdmin.addWord:
                                                solveException(Dictionary.addWord);
                                                break;
                                            case menuForAdmin.deleteWord:
                                                solveException(Dictionary.deleteWord);
                                                break;
                                            case menuForAdmin.editWord:
                                                solveException(Dictionary.editWord);
                                                break;
                                            case menuForAdmin.logOff:
                                                isOutAdminMenu = true;
                                                break;
                                        }
                                    }
                                }
                                else {
                                    let isOutUserMenu = false;
                                    while (!isOutUserMenu) {
                                        userMenu();
                                        let number = +readlineSync.question('Choose action:  ');
                                        switch (number) {
                                            case menuForUser.showDictionary:
                                                solveException(Dictionary.showDictionary);
                                                break;
                                            case menuForUser.searchWord:
                                                solveException(Dictionary.showWord);
                                                break;
                                            case menuForUser.logOff:
                                                isOutUserMenu = true;
                                                break;
                                        }
                                    }
                                }
                            } else throw new Error('This account has not existed!');
                        } else throw new Error('Wrong syntax!');
                    } catch (e) {
                        console.log(e.message);
                    }
                    break;
                case mainMenu.Register:
                    try {
                        let newEmail = readlineSync.question('Enter email:  ');
                        let newPassword = readlineSync.question('Enter password:  ');
                        if (emailRegex.validateEmail(newEmail) && passwordRegex.validatePassword(newPassword)) {
                            if (AccountManagement.checkAdminAccount(newEmail) !== 0) {
                                throw new Error('This email has existed!');
                            } else {
                                let account = new Account(newEmail, newPassword);
                                AccountManagement.addAccount(account);
                            }
                        } else throw new Error('Wrong syntax');
                    } catch (e) {
                        console.log(e.message);
                    }
                    break;
                case mainMenu.Exit:
                    isExist = true;
                    break;
            }
        }
    }
}