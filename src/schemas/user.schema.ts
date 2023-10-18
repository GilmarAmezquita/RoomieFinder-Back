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
    routine : string

    @Prop()
    cleanliness : string

    @Prop()
    pets : string

    @Prop()
    specialNeeds : string

    @Prop()
    personality : string

    @Prop()
    sociability : string

    @Prop()
    noise : string
}

export const UserSchema = SchemaFactory.createForClass(User);