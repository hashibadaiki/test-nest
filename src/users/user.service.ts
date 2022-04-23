import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  create(email: string, password: string) {
    // create()でEntityのインスタンスを作成
    const user = this.usersRepository.create({ email, password });

    // save()でDBにデータを保存
    return this.usersRepository.save(user);
  }

  findOne(id: number) {
    console.log(id);
    return this.usersRepository.findOne(id);
  }

  find(email: string) {
    console.log(email);
    console.log({ email });
    return this.usersRepository.find({ email });
  }

  async update(id: number, attrs: Partial<User>) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }

    Object.assign(user, attrs);
    return this.usersRepository.save(user);
  }
}
