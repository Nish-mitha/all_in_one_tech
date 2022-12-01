import { IsEmail, isNotEmpty, IsNotEmpty, IsString } from "@nestjs/class-validator";



export class insertUserObject {

    @IsNotEmpty()
    @IsString()
    firstName: string;

    @IsNotEmpty()
    @IsString()
    lastName: string;

    @IsString()
    gender: string;

    @IsString()
    dateOfBirth: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    emailId: string;

}