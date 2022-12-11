import { Injectable, NotFoundException } from "@nestjs/common";
import { insertUserObject, updateUserObject } from "src/common/dto/user.dto";

@Injectable()
export class AccountService {
    private accounts: insertUserObject[] = [];

    addAccount(userData: insertUserObject): string {
            this.accounts.push(userData);
            return  "User Added Successfully";
        }

    getAllAccount(): insertUserObject[] {
        return [...this.accounts];
    }

    getSingleAccount(emailId: string): insertUserObject {
        const account = this.findUser(emailId)[0];
        return { ...account };
    }

    updateUser(userData: Partial<updateUserObject>, emailId: string): string {
        const [account, index] = this.findUser(emailId);
        const updatedAccount = { ...account, ...userData }
        this.accounts[index] = updatedAccount;
        return  "Updated Successfully";
    }

    deleteAccount(emaildId: string): string {
        const index = this.findUser(emaildId)[1];
        this.accounts.splice(index, 1);
        return  "Deleted Successfully";
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
