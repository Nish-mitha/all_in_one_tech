import { AccountService } from "./account.service";
import { insertUserObject } from "../common/dto/user.dto";
export declare class AccountController {
    private readonly accountService;
    constructor(accountService: AccountService);
    signUpUser(userData: insertUserObject): any;
    getAllUser(): import("./account.model").Account[];
    getSingleUser(emailId: string): {
        firstName: string;
        lastName: string;
        gender: string;
        dateOfBirth: string;
        emailId: string;
    };
    updateUser(userData: insertUserObject, emailId: string): any;
    deleteUser(emailId: string): void;
}
