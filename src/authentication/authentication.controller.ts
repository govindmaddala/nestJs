/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { UserDto } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/user.service';

@Controller('authentication')
export class AuthenticationController {

    constructor(private userService: UserService) {
    }

    @Post("/verifyUser")
    async validateuser(@Body() loginDetails: UserDto) {
        const user = await this.userService.findUserByEmail(loginDetails.email)
        if (user && loginDetails.password === user.password) {
            return { message: "user found" }
        } else {
            return { message: "Email or password doesn't match" }
        }
    }
}
