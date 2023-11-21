import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Room } from 'src/schemas/room.schema';

import { Query } from 'express-serve-static-core';
import { RoomDTO } from 'src/dto/room/room.dto';

@Injectable()
export class RoomService {
    constructor(
        @InjectModel(Room.name)
        private roomModel: Model<Room>
    ){}

    async addRoom(room: RoomDTO): Promise<Room> {
        try {
            const newRoom = await this.roomModel.create(room);
            return newRoom;
        } catch (error) {
            throw error;
        }
    }

    async getRooms(query: Query): Promise<Room[]> {
        try {
            const resPerPage = 10;
            const page = query.page || 1;
            const skip:number = resPerPage * (+page - 1);	
            const title = query.title ? {
                title: {
                    $regex: query.title,
                    $options: "i"
                }
            } : {};
            const rooms = await this.roomModel.find({...title}).populate({
                path: 'owner',
                select: '-password -__v -createdAt -updatedAt -_id '
            }).limit(resPerPage).skip(skip);
            return rooms;
        } catch (error) {
            throw error;
        }
    }
}
