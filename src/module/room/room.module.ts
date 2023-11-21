import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomService } from './room.service';
import { RoomController } from './room.controller';
import { RoomSchema } from '../../schemas/room.schema';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: 'Room', schema: RoomSchema }]),
  ],
  providers: [RoomService],
  controllers: [RoomController]
})
export class RoomModule {}
