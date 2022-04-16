import { Expose } from 'class-transformer';
import { IsEmail, IsOptional, IsString } from 'class-validator';

// バリデーションの為のfileっぽい
// data transfer object なので変更しつつ見てるっぽい
// @はそれ以下に適用みたい

export class CreateUserDto {
  @IsString()
  @IsOptional()
  email: string;
  password: string;
}

export class UpdateUserDto {
  @IsEmail()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  password: string;
}

export class UserDto {
  @Expose()
  id: number;

  @Expose()
  email: string;
}
