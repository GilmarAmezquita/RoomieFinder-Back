import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class RoomDTO {
    @IsNotEmpty()
    @IsString()
    readonly title : string

    @IsNotEmpty()
    @IsString()
    readonly description : string

    @IsNotEmpty()
    @IsNumber()
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
    @IsNumber()
    readonly partners : number

    @IsNotEmpty()
    @IsString()
    readonly owner : string

    readonly photos : string[]
}