export class AdminAccountRegex {
    static regex: RegExp = /^[A-Za-z0-9]+@admin\.[A-Za-z]+$/;

    static validateAdminAccount(email): boolean {
        return this.regex.test(email);
    }
}