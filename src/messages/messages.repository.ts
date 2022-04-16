import { Injectable } from '@nestjs/common';
import { promises } from 'fs';

const { readFile, writeFile } = promises;

// 本来はDBとのやりとりをするところだけど、今回はfileの読み書きで対応している
// 関数を定義しているだけ

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);
    console.log(messages[id]);

    return messages[id];
  }
  async editMessage(id: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);
    console.log(messages[id]);

    return messages[id];
  }

  async findAll() {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    return messages;
  }

  async create(content: string) {
    console.log(content);
    const contents = await readFile('messages.json', 'utf8');
    console.log(contents);
    const messages = JSON.parse(contents);

    const id = Math.floor(Math.random() * 999);

    messages[id] = { id, content };

    await writeFile('messages.json', JSON.stringify(messages));
  }

  // この引数は単なる引数ではなくjsonのkeyに影響した
  // ここがtestだとjsonにinsertされるのもtest
  async createID(contentID: string, id: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);
    console.log(messages[id].id);

    if (id !== messages[id].id) {
      // idが存在しない場合はerror
      console.log('ok');
      throw new Error(`${id} is not found`);
    }

    messages[id] = { id, contentID };

    await writeFile('messages.json', JSON.stringify(messages));
  }
}
