import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
// import { MessagesRepository } from './messages.repository';

@Injectable()
export class UsersService {
  constructor(public usersRepo: UsersRepository) {}

  // findOne(id: string) {
  //   return this.usersRepo.findOne(id);
  // }

  findAll() {
    return this.usersRepo.findAll();
  }

  // create(content: string) {
  //   return this.messagesRepo.create(content);
  // }

  // // 実行してるだけ
  // edit(contentID: string, id: string) {
  //   return this.messagesRepo.edit(contentID, id);
  // }
}
