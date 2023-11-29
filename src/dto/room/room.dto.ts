import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class RoomDTO {
    @IsNotEmpty()
    @IsString()
    readonly title : string

    @IsNotEmpty()
    @IsNumber()
    readonly price : number

    @IsNotEmpty()
    @IsString()
    readonly bathroom : string

    @IsNotEmpty()
    @IsString()
    readonly space : string

    @IsNotEmpty()
    @IsString()
    readonly wardrobe : string

    @IsNotEmpty()
    @IsString()
    readonly address : string

    @IsNotEmpty()
    @IsString()
    readonly description : string

    @IsNotEmpty()
    @IsString()
    readonly owner : string

    readonly images : string[]
}