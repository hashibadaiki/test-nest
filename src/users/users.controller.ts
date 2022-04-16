import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto, UserDto } from 'src/dtos/user.dto';
import { Serialize } from './serialize.interceptor';
import { UsersService } from './users.service';

// @Controller('users')
// export class UsersController {}

@Controller('auth')
@Serialize(UserDto)
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    this.usersService.create(body.email, body.password);
  }

  @Patch('/:id')
  updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.usersService.update(parseInt(id), body);
  }
}
