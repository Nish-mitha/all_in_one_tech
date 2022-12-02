import { IsEmail, IsEnum, isEnum, isNotEmpty, IsNotEmpty, IsString, MaxLength } from "@nestjs/class-validator";

enum Gender {
    "Male", 
    "Female" 
}

export class insertUserObject {

    @IsNotEmpty()
    @IsString()
    @MaxLength(2, {
        message: "Nmae",
    })
    firstName: string;

    @IsNotEmpty()
    @IsString()
    lastName: string;

    @IsString()
    @IsEnum(Gender)
    gender: string;

    @IsString()
    dateOfBirth: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    emailId: string;

}