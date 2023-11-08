import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Room } from 'src/schemas/room.schema';

@Injectable()
export class RoomService {
    constructor(
        @InjectModel(Room.name)
        private roomModel: Model<Room>
    ){}

    async addRoom(room: Room): Promise<Room> {
        const newRoom = await this.roomModel.create(room)
        return newRoom
    }

    async getRooms(): Promise<Room[]> {
        const rooms = await this.roomModel.find().exec()
        return rooms
    }
}
