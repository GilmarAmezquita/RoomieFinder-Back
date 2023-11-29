import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';

import { Query } from 'express-serve-static-core';

@Injectable()
export class RoomieService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>
    ) {}

    async getRoomies(query: Query): Promise<User[]> {
        try {
            const resPerPage = 10;
            const page = query.page || 1;
            const skip:number = resPerPage * (+page - 1);	
            const roomies = await this.userModel.find({}).select(
                '-password -__v -createdAt -updatedAt'
            );
            return roomies;
        } catch (error) {
            throw error;
        }
    }

    async getRoomieById(id: string): Promise<User> {
        try {
            const roomie = await this.userModel.findById(id).select(
                '-password -__v -createdAt -updatedAt'
            );
            return roomie;
        } catch (error) {
            throw error;
        }
    }
}
