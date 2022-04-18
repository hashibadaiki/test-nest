import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto, UserDto } from 'src/dtos/user.dto';
import { Serialize } from './serialize.interceptor';
import { UserService } from './user.service';

@Controller('auth')
@Serialize(UserDto)
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    this.userService.create(body.email, body.password);
  }

  @Patch('/:id')
  updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.userService.update(parseInt(id), body);
  }

  @Get('/:id')
  findUser(@Param('id') id: string) {
    return this.userService.findOne(parseInt(id));
  }
}
