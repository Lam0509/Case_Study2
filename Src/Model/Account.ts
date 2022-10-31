import {jsonMember, jsonObject} from "typedjson";
@jsonObject
//@ts-ignore
export class Account {

    @jsonMember(String)
    //@ts-ignore
    email: string;

    @jsonMember(String)
    //@ts-ignore
    password: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }
}