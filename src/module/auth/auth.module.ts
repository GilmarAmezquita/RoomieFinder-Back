import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserSchema } from '../../schemas/user.schema';
import { PassportModule } from '@nestjs/passport';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PersonalityService } from 'src/services/personality/personality.service';
import { PersonalitySchema } from 'src/schemas/personality.schema';
import { JwtStrategy } from './jwt.strategy';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.registerAsync({
            inject: [ConfigService],
            useFactory: async (config: ConfigService) => ({
                secret: config.get('JWT_SECRET'),
                signOptions: {
                    expiresIn: config.get('JWT_EXPIRES'),
                },
            }),
        }),
        MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
        MongooseModule.forFeature([{ name: 'Personality', schema: PersonalitySchema }])
    ],
    controllers: [AuthController],
    providers: [AuthService, PersonalityService, JwtStrategy],
    exports: [JwtStrategy, PassportModule]
})
export class AuthModule {}
