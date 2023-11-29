import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomDTO } from 'src/dto/room/room.dto';

import { Query as ExpressQuery } from 'express-serve-static-core';
import { Room } from 'src/schemas/room.schema';

@Controller('room')
export class RoomController {
    constructor(
        private roomService: RoomService
    ) {}

    @Post()
    async addRoom(@Body() body: RoomDTO): Promise<Room> {
        return this.roomService.addRoom(body);
    }

    @Get()
    async getRooms(@Query() query: ExpressQuery): Promise<Room[]> {
        return this.roomService.getRooms(query);
    }

    @Get('/:id')
    async getRoom(@Param('id') id : string): Promise<Room> {
        return this.roomService.getRoom(id);
    }
}
