/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepositoryEntity: Repository<UserEntity>
    ) { }

    saveUser(userDetails: UserDto) {
        this.userRepositoryEntity.save(userDetails);
    }

    findUserByEmail(email: string) {
        return this.userRepositoryEntity.findOne({ where: { email } })
    }
}
