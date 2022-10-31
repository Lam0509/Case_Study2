export class passwordRegex {
    static regex: RegExp = /^[A-Za-z0-9]{8,}$/;

    static validatePassword(password): boolean {
        return this.regex.test(password);
    }
}