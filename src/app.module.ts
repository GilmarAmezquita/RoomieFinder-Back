import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './module/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomModule } from './module/room/room.module';
import { RoomieModule } from './module/roomie/roomie.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MulterModule.register({
      dest: './uploads',
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    AuthModule,
    RoomModule,
    RoomieModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
