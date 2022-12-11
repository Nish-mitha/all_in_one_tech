import { Controller, Post, Body, Get, Param, Patch, Delete } from "@nestjs/common";
import { AccountService } from "./account.service";
import { insertUserObject, updateUserObject } from "../common/dto/user.dto";

@Controller('account')
export class AccountController {
    constructor(private readonly accountService: AccountService) {}

    @Post()
    signUpUser(@Body() userData: insertUserObject): string {
        return this.accountService.addAccount(userData);
    }

    @Get()
    getAllUser(): insertUserObject[] {
        return this.accountService.getAllAccount();
    }

    @Get(':emailId')
    getSingleUser(@Param('emailId') emailId: string): insertUserObject {
        return this.accountService.getSingleAccount(emailId);
    }

    @Patch(':emailId')
    updateUser(@Body() userData: updateUserObject, @Param('emailId') emailId: string): string {
        return this.accountService.updateUser(userData, emailId);
    }

    @Delete(':emailId')
    deleteUser(@Param('emailId') emailId: string): string {
        return this.accountService.deleteAccount(emailId);
    }
}