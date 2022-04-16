import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  constructor() {}

  @Get()
  listMessages() {}

  @Post()
  createMessage(@Body() body: any) {}

  @Get('/:id')
  getMessage(@Param('id') id: string) {}
}
