import { Injectable, NotFoundException } from "@nestjs/common";
import { insertUserObject, updateUserObject } from "src/common/dto/user.dto";

@Injectable()
export class AccountService {
    private accounts: insertUserObject[] = [];

    addAccount(userData: insertUserObject) {
            this.accounts.push(userData);
            return  "User Added Successfully";
        }

    getAllAccount() {
        return [...this.accounts];
    }

    getSingleAccount(emailId: string) {
        const account = this.findUser(emailId)[0];
        return { ...account };
    }

    updateUser(userData: updateUserObject, emailId: string) {
        const [account, index] = this.findUser(emailId);
        const updatedAccount = { 
            ...account,
            firstName: userData.firstName ? userData.firstName : account.firstName,
            lastName: userData.lastName ? userData.lastName : account.lastName,
            gender: userData.gender ? userData.gender : account.gender,
            dateOfBirth: userData.dateOfBirth ? userData.dateOfBirth : account.dateOfBirth,
            emailId: userData.emailId ? userData.emailId : account.emailId
        }
        this.accounts[index] = updatedAccount;
    }

    deleteAccount(emaildId: string) {
        const index = this.findUser(emaildId)[1];
        this.accounts.splice(index, 1);
    }

    private findUser(emailId: string): [insertUserObject, number] {
        const accountIndex = this.accounts.findIndex((user) => user.emailId === emailId);
        const account = this.accounts[accountIndex];
        if(!account) {
            throw new NotFoundException('User Not Found.');
        }
        return [account, accountIndex];
    }
}
