import {jsonMember, jsonObject} from "typedjson";

@jsonObject
//@ts-ignore
export class Example {

    @jsonMember(String)
    //@ts-ignore
    englishSentence: string;

    @jsonMember(String)
    //@ts-ignore
    vietnameseSentence: string;

    constructor(englishSentence: string, vietnameseSentence: string) {
        this.englishSentence = englishSentence;
        this.vietnameseSentence = vietnameseSentence;
    }

    checkEnglishSentence(keyword: string): boolean {
        return this.englishSentence.includes(keyword);
    }

    checkVietnameseSentence(keyword: string): boolean {
        return this.vietnameseSentence.includes(keyword);
    }
}