import {Account} from "./Account";
import {TypedJSON} from "typedjson";
import * as fs from "fs"
import {writeAccountsData} from "../Database/DBHelper";
import * as readlineSync from "readline-sync";
import {emailRegex} from "../View/ValidateInput/EmailRegex";
import {passwordRegex} from "../View/ValidateInput/PasswordRegex";
import {AdminAccountRegex} from "../View/ValidateInput/AdminAccountRegex";
import {adminMenu, userMenu} from "../View/Menu";
import {menuForAdmin, menuForUser} from "../Enum/Choice";
import {Dictionary} from "./Dictionary";
import {solveException} from "../Controller/DictionaryController";

export class AccountManagement {
    static accounts: Account[] = TypedJSON.parseAsArray(fs.readFileSync('C:\\Users\\Admin\\Case Study\\Src\\Database\\accountsData.json', {
        encoding: "utf8",
        flag: "r"
    }), Account);

    static addAccount(account: Account): void {
        this.accounts.push(account);
        writeAccountsData();
    }

    static findAccount(email: string, password: string): number {
        return this.accounts.filter(account => {
            return account.email == email && account.password == password;
        }).length;
    }

    static checkAdminAccount(email: string): number {
        return this.accounts.filter(account => {
            return account.email == email;
        }).length;
    }

    static register(): void {
        let newEmail = readlineSync.question('Enter email:  ');
        let newPassword = readlineSync.question('Enter password:  ');
        if (emailRegex.validateEmail(newEmail) && passwordRegex.validatePassword(newPassword)) {
            if (AccountManagement.checkAdminAccount(newEmail) !== 0) {
                console.log('This email has existed!');
            } else {
                let account = new Account(newEmail, newPassword);
                AccountManagement.addAccount(account);
            }
        } else console.log('Wrong syntax');
    }

    static login(): void {
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
            } else console.log('This account has not existed!');
        } else console.log('Wrong syntax!');
    }
}