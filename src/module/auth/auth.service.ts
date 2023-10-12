import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../../schemas/user.schema';
import { Model } from 'mongoose';

import * as bcrypt from 'bcryptjs'
import { JwtService } from '@nestjs/jwt';
import { SignUpDTO } from '../../dto/signup.dto';
import { loginDTO } from '../../dto/login.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name) 
        private userModel: Model<User>,
        private jwtService: JwtService
    ) {}

    async signUp(signUpDTO : SignUpDTO): Promise<{ token : string }> {
        const { name, email, password } = signUpDTO
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await this.userModel.create({
            name,
            email,
            password: hashedPassword
        })
        const token = this.jwtService.sign({ id: user._id })
        return { token }
    }

    async login(loginDTO : loginDTO): Promise<{ token : string }> {
        const { email, password } = loginDTO
        const user = await this.userModel.findOne({ email })
        if (!user) {
            throw new UnauthorizedException('Invalid email or password')
        }
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid email or password')
        }
        const token = this.jwtService.sign({ id: user._id })
        return { token }
    }
}
