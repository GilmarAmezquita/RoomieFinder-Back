import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class loginDTO {
    @IsNotEmpty()
    @IsEmail({}, { message: 'Invalid email format'})
    readonly email : string

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    readonly password : string
}