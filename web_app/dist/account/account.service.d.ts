import { insertUserObject } from "src/common/dto/user.dto";
import { Account } from "./account.model";
export declare class AccountService {
    private accounts;
    addAccount(userData: insertUserObject): string;
    getAllAccount(): Account[];
    getSingleAccount(emailId: string): {
        firstName: string;
        lastName: string;
        gender: string;
        dateOfBirth: string;
        emailId: string;
    };
    updateUser(userData: insertUserObject, emailId: string): void;
    deleteAccount(emaildId: string): void;
    private findUser;
}
