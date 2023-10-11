import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDTO } from './dto/signup.dto';
import { loginDTO } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('/signup')
    signUp(@Body() body: SignUpDTO) {
        return this.authService.signUp(body);
    }

    @Get('/login')
    login(@Body() body: loginDTO) {
        return this.authService.login(body);
    }
}
