import { IsArray, IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class SignUpDTO {
    @IsNotEmpty()
    @IsString()
    readonly name : string

    @IsNotEmpty()
    @IsEmail({}, { message: 'Invalid email format'})
    readonly email : string

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password : string

    @IsNotEmpty()
    @IsString()
    readonly phoneNumber : string

    @IsNotEmpty()
    readonly image : string

    @IsNotEmpty()
    @IsArray()
    readonly hobbies : string[]

    @IsNotEmpty()
    @IsArray()
    readonly traits : string[]

    @IsNotEmpty()
    @IsString()
    readonly university : string
}