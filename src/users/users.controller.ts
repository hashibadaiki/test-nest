import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { CreateUserDto, UpdateUserDto, UserDto } from 'src/dtos/user.dto';
import { Serialize } from './serialize.interceptor';
import { UsersService } from './user.service';

@Controller('auth')
@Serialize(UserDto)
export class UserController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    this.authService.signup(body.email, body.password);
  }

  @Patch('/:id')
  updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.usersService.update(parseInt(id), body);
  }

  @Get('/:id')
  findUser(@Param('id') id: string) {
    return this.usersService.findOne(parseInt(id));
  }
}
