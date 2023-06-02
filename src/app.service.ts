import { Injectable } from '@nestjs/common';
import { TRANSCODE_QUEUE_TOKEN } from './const';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';

@Injectable()
export class AppService {
  constructor(@InjectQueue(TRANSCODE_QUEUE_TOKEN) private queue: Queue) {}
  getHello(): string {
    return 'Hello World!';
  }

  async transcode() {
    await this.queue.add({
      fileName: './file.mp3',
    });
  }
}
