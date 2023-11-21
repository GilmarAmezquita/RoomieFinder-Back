import { IsNotEmpty, IsString } from "class-validator";

export class roomDTO {
    @IsNotEmpty()
    @IsString()
    readonly name : string

    @IsNotEmpty()
    @IsString()
    readonly description : string

    @IsNotEmpty()
    @IsString()
    readonly price : number

    @IsNotEmpty()
    @IsString()
    readonly state : string

    @IsNotEmpty()
    @IsString()
    readonly country : string

    @IsNotEmpty()
    @IsString()
    readonly city : string

    @IsNotEmpty()
    @IsString()
    readonly address : string

    @IsNotEmpty()
    @IsString()
    readonly partners : number[]

    @IsNotEmpty()
    @IsString()
    readonly owner : number

    @IsNotEmpty()
    @IsString()
    readonly images : string[]
}