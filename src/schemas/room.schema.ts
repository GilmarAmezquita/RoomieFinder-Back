import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema({
    timestamps: true,
})
export class Room extends Document{
    @Prop()
    title: string

    @Prop()
    price: number
    
    @Prop()
    bathroom: string

    @Prop()
    space: string

    @Prop()
    wardrobe: string
    
    @Prop()
    address: string

    @Prop()
    description: string

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
    owner: string;
    
    @Prop()
    images: string[]
}

export const RoomSchema = SchemaFactory.createForClass(Room);