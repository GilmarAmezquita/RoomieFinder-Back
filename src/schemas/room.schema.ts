import { Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true,
})
export class Room {
    title: string
    description: string
    owner: string
    price: number
    location: string
    photos: string[]
}

export const RoomSchema = SchemaFactory.createForClass(Room);