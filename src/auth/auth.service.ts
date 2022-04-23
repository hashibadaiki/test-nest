import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/user.service';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signup(email: string, password: string) {
    // emailが使用済かどうか確認
    const users = await this.usersService.find(email);
    if (users.length) {
      throw new BadRequestException('email in use');
    }

    // Salt生成
    const salt = randomBytes(8).toString('hex');

    // パスワードとSaltを連結してハッシュ化
    const hash = (await scrypt(password, salt, 32)) as Buffer;

    // Saltとハッシュ値を結合
    const result = salt + '.' + hash.toString('hex');

    // 新しいユーザの作成と保存
    const user = await this.usersService.create(email, result);

    // ユーザを返す
    return user;
  }
}
