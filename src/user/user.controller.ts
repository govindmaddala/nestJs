/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
    constructor(private userController: UserService) {
    }

    @Post("/register")
    registerUser(@Body() registerDetails: UserDto) {
        return this.userController.saveUser(registerDetails)
    }

    @Post("/validateuser")
    findUserByEmail(email:string){
        return this.userController.findUserByEmail(email);
    }
}
