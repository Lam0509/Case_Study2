import {Dictionary} from "../Model/Dictionary";
import {AccountManagement} from "../Model/AccountManagement";
import * as fs from "fs";

export function writeWordsData(): void {
    fs.writeFileSync('C:\\Users\\Admin\\Case Study\\Src\\Database\\wordsData.json', JSON.stringify(Dictionary.words, null, '\t'), {
        encoding: 'utf8'
    });
}

export function writeAccountsData(): void {
    fs.writeFileSync('C:\\Users\\Admin\\Case Study\\Src\\Database\\accountsData.json', JSON.stringify(AccountManagement.accounts, null, '\t'), {
        encoding: 'utf8'
    });
}