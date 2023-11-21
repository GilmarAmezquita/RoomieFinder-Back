import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema({
    timestamps: true,
})
export class Room extends Document{
    @Prop()
    title: string

    @Prop()
    description: string
    
    @Prop()
    price: number
    
    @Prop()
    state: string
    
    @Prop()
    country: string
    
    @Prop()
    city: string
    
    @Prop()
    address: string
    
    @Prop()
    partners : number
    
    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
    owner: string;
    
    @Prop()
    photos: string[]
}

export const RoomSchema = SchemaFactory.createForClass(Room);