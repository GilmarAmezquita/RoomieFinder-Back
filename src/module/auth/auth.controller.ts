import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PersonalityService } from 'src/services/personality/personality.service';
import { Personality } from 'src/schemas/personality.schema';
import { SignUpDTO } from 'src/dto/auth/signup.dto';
import { loginDTO } from 'src/dto/auth/login.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService, 
        private personalityService: PersonalityService) {}

    @Post('/signup')
    signUp(@Body() body: SignUpDTO) {
        return this.authService.signUp(body);
    }

    @Post('/login')
    login(@Body() body: loginDTO) {
        return this.authService.login(body);
    }

    @Get('/personalities')
    async getAllPersonalities(): Promise<Personality[]> {
        return this.personalityService.getAllPersonalities();
    }
}
