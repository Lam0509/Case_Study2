export class emailRegex {
    static regex: RegExp = /^[A-Za-z0-9]+(@admin|@[A-Za-z]+)\.[A-Za-z]+$/

    static validateEmail(email): boolean {
        return this.regex.test(email);
    }
}