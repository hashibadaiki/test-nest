import { IsOptional, IsString } from 'class-validator';

// バリデーションの為のfileっぽい
// data transfer object なので変更しつつ見てるっぽい
// @はそれ以下に適用みたい

export class CreateUserDto {
  @IsString()
  @IsOptional()
  email: string;
  password: string;
}
