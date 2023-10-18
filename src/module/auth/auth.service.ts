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
        const hashedPassword = await bcrypt.hash(signUpDTO.password, 10)
        const user = await this.userModel.create({
            name : signUpDTO.name,
            email : signUpDTO.email,
            password: hashedPassword,
            phoneNumber : signUpDTO.phoneNumber,
            routine : signUpDTO.routine,
            cleanliness : signUpDTO.cleanliness,
            pets : signUpDTO.pets,
            specialNeeds : signUpDTO.specialNeeds,
            personality : signUpDTO.personality,
            sociability : signUpDTO.sociability,
            noise : signUpDTO.noise
        })
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
