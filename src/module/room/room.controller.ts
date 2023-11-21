import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomDTO } from 'src/dto/room/room.dto';

import { Query as ExpressQuery } from 'express-serve-static-core';

@Controller('room')
export class RoomController {
    constructor(
        private roomService: RoomService
    ) {}

    @Post()
    addRoom(@Body() body: RoomDTO) {
        return this.roomService.addRoom(body);
    }

    @Get()
    getRooms(@Query() query: ExpressQuery) {
        return this.roomService.getRooms(query);
    }
}
