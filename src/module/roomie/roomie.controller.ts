import { Controller, Get, Param, Query } from '@nestjs/common';
import { RoomieService } from './roomie.service';

import { Query as ExpressQuery } from 'express-serve-static-core';
import { User } from 'src/schemas/user.schema';

@Controller('api/roomies')
export class RoomieController {
    constructor(
        private roomieService: RoomieService
    ) {}

    @Get()
    async getRoomies(@Query() query: ExpressQuery): Promise<User[]> {
        return this.roomieService.getRoomies(query);
    }

    @Get('/:id')
    async getRoomie(@Param('id') id: string): Promise<User> {
        return this.roomieService.getRoomieById(id);
    }
}
