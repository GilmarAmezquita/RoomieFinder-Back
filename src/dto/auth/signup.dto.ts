import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

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
    readonly password : string

    @IsNotEmpty()
    @IsString()
    readonly phoneNumber : string

    @IsNotEmpty()
    @IsString()
    readonly routine : string

    @IsNotEmpty()
    @IsString()
    readonly cleanliness : string

    @IsNotEmpty()
    @IsString()
    readonly pets : string

    @IsNotEmpty()
    @IsString()
    readonly specialNeeds : string

    @IsNotEmpty()
    @IsString()
    readonly personality : string

    @IsNotEmpty()
    @IsString()
    readonly sociability : string

    @IsNotEmpty()
    @IsString()
    readonly noise : string
}