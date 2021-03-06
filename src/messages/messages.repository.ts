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

    return messages[id];
  }

  async findAll() {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    return messages;
  }

  async create(content: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    const id = Math.floor(Math.random() * 999);

    messages[id] = { id, content };

    await writeFile('messages.json', JSON.stringify(messages));
  }

  // この引数は単なる引数ではなくjsonのkeyに影響した
  // ここがtestだとjsonにinsertされるのもtest
  async edit(contentID: string, id: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    // idがない場合ここに到達できないのでcontrollerに書く
    // if (id !== messages[id].id) {
    //   // idが存在しない場合はerror
    //   throw new Error(`${id} is not found`);
    // }

    messages[id] = { id, contentID };

    await writeFile('messages.json', JSON.stringify(messages));
  }
}
