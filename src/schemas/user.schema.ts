import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({
    timestamps: true,
})
export class User {
    @Prop()
    name : string

    @Prop({ unique: [true, 'Email already in use'] })
    email : string

    @Prop()
    password : string

    @Prop(+{ unique: [true, 'Phone number already in use'] })
    phoneNumber : string

    @Prop()
    image : string

    @Prop()
    hobbies : string[]

    @Prop()
    traits : string[]

    @Prop()
    university : string
}

export const UserSchema = SchemaFactory.createForClass(User);