import { Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true,
})
export class Room {
    title: string
    description: string
    price: number
    state: string
    country: string
    city: string
    address: string
    partners : number[]
    owner: string
    photos: string[]
}

export const RoomSchema = SchemaFactory.createForClass(Room);