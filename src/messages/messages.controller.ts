import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from 'src/dtos/create-message.dto';
import { MessagesService } from './messages.service';

// pathに対して実行するmethodを定義している

@Controller('messages')
export class MessagesController {
  constructor(public messagesService: MessagesService) {}

  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content);
  }

  // この書き方だとURLはなんでもいい
  @Post('/:id')
  createMessageWithID(@Body() body: CreateMessageDto, @Param('id') id: string) {
    return this.messagesService.createID(body.contentID, id);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);

    if (!message) {
      throw new NotFoundException('message not found');
    }

    return message;
  }
}
