"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountService = void 0;
const common_1 = require("@nestjs/common");
const account_model_1 = require("./account.model");
let AccountService = class AccountService {
    constructor() {
        this.accounts = [];
    }
    addAccount(userData) {
        const newAccount = new account_model_1.Account(userData.firstName, userData.lastName, userData.gender, userData.dateOfBirth, userData.emailId);
        this.accounts.push(newAccount);
        return "Done";
    }
    getAllAccount() {
        return [...this.accounts];
    }
    getSingleAccount(emailId) {
        const account = this.findUser(emailId)[0];
        return Object.assign({}, account);
    }
    updateUser(userData, emailId) {
        const [account, index] = this.findUser(emailId);
        const updatedAccount = Object.assign({}, account);
        if (userData.firstName) {
            updatedAccount.firstName = userData.firstName;
        }
        if (userData.lastName) {
            updatedAccount.lastName = userData.lastName;
        }
        if (userData.gender) {
            updatedAccount.gender = userData.gender;
        }
        if (userData.dateOfBirth) {
            updatedAccount.dateOfBirth = userData.dateOfBirth;
        }
        if (emailId) {
            updatedAccount.emailId = emailId;
        }
        this.accounts[index] = updatedAccount;
    }
    deleteAccount(emaildId) {
        const index = this.findUser(emaildId)[1];
        this.accounts.splice(index, 1);
    }
    findUser(emailId) {
        const accountIndex = this.accounts.findIndex((user) => user.emailId === emailId);
        const account = this.accounts[accountIndex];
        if (!account) {
            throw new common_1.NotFoundException('User Not Found.');
        }
        return [account, accountIndex];
    }
};
AccountService = __decorate([
    (0, common_1.Injectable)()
], AccountService);
exports.AccountService = AccountService;
//# sourceMappingURL=account.service.js.map