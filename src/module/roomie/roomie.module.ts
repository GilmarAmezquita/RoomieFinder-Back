import { Module } from '@nestjs/common';
import { RoomieController } from './roomie.controller';
import { RoomieService } from './roomie.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [RoomieController],
  providers: [RoomieService]
})
export class RoomieModule {}
