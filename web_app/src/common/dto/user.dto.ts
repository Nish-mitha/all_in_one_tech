import { IsEmail, IsEnum, isEnum, isNotEmpty, IsNotEmpty, IsOptional, IsString, MaxLength } from "@nestjs/class-validator";

enum Gender {
    "Male", 
    "Female" 
}

export class insertUserObject {

    @IsNotEmpty()
    @IsString()
    @MaxLength(15)
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

export class updateUserObject {

    @IsOptional()
    @IsString()
    @MaxLength(15)
    firstName: string;

    @IsOptional()
    @IsString()
    lastName: string;

    @IsOptional()
    @IsString()
    @IsEnum(Gender)
    gender: string;

    @IsString()
    @IsOptional()
    dateOfBirth: string;

    @IsOptional()
    @IsString()
    @IsEmail()
    emailId: string;

}