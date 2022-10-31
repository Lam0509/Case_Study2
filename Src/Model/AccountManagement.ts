import {Account} from "./Account";
import {TypedJSON} from "typedjson";
import * as fs from "fs"
import {writeAccountsData} from "../Database/DBHelper";

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
}