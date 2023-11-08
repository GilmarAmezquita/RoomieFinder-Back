import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Personality } from 'src/schemas/personality.schema';

@Injectable()
export class PersonalityService {
    constructor(
        @InjectModel(Personality.name)
        private personalityModel: Model<Personality>
    ) {}

    async getAllPersonalities(): Promise<Personality[]> {
        try {
            const personalities = await this.personalityModel.find().exec()
            return personalities
        } catch (error) {
            throw new Error(error)
        }
    }
}
