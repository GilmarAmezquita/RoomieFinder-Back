import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true,
})
export class Personality {
    @Prop()
    code : string

    @Prop()
    name : string

    @Prop()
    emoji : string
}

export const PersonalitySchema = SchemaFactory.createForClass(Personality);