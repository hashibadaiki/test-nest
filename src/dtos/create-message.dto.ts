import { IsOptional, IsString } from 'class-validator';

// バリデーションの為のfileっぽい
// data transfer object なので変更しつつ見てるっぽい
// @はそれ以下に適用みたい

export class CreateMessageDto {
  @IsString()
  @IsOptional()
  contentID: string;
  content: string;
  id: string;
}
