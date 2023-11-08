import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDTO } from '../../dto/signup.dto';
import { loginDTO } from '../../dto/login.dto';
import { PersonalityService } from 'src/services/personality/personality.service';
import { Personality } from 'src/schemas/personality.schema';

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
