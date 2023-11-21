import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';

import * as bcrypt from 'bcryptjs'
import { SignUpDTO } from '../../dto/signup.dto';
import { loginDTO } from '../../dto/login.dto';
import { User } from '../../schemas/user.schema';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name) 
        private userModel: Model<User>,
        private jwtService: JwtService
    ) {}

    async signUp(signUpDTO : SignUpDTO): Promise<{ token : string }> {
        signUpDTO.password = await bcrypt.hash(signUpDTO.password, 10)
        const user = await this.userModel.create(signUpDTO)
        const token = this.jwtService.sign({ id: user._id })
        return { token }
    }

    async login(loginDTO : loginDTO): Promise<{ token : string }> {
        const user = await this.userModel.findOne({ email : loginDTO.email })
        if (!user) {
            throw new UnauthorizedException('Invalid email or password')
        }
        const isPasswordValid = await bcrypt.compare(loginDTO.password, user.password)
        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid email or password')
        }
        const token = this.jwtService.sign({ id: user._id })
        return { token }
    }
}
