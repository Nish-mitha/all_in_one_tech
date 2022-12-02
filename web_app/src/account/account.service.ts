import { Injectable, NotFoundException } from "@nestjs/common";
import { insertUserObject } from "src/common/dto/user.dto";

@Injectable()
export class AccountService {
    private accounts: insertUserObject[] = [];

    addAccount(userData: insertUserObject) {
            console.log(insertUserObject);
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

    updateUser(userData: insertUserObject, emailId: string) {
        const [account, index] = this.findUser(emailId);
        const updatedAccount = { ...account };
        if(userData.firstName) {
            updatedAccount.firstName = userData.firstName;
        }
        if(userData.lastName) {
            updatedAccount.lastName = userData.lastName;
        }
        if(userData.gender) {
            updatedAccount.gender = userData.gender;
        }
        if(userData.dateOfBirth) {
            updatedAccount.dateOfBirth = userData.dateOfBirth;
        }
        if(emailId) {
            updatedAccount.emailId = emailId;
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
