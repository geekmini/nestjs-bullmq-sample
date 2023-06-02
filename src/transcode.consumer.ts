import { Process, Processor } from '@nestjs/bull';
import { TRANSCODE_QUEUE_TOKEN } from './const';
import { Job } from 'bull';
import { Logger } from '@nestjs/common';
import stringify from 'fast-safe-stringify';

@Processor(TRANSCODE_QUEUE_TOKEN)
export class TranscodeConsumer {
  @Process()
  async transcode(job: Job<unknown>) {
    Logger.log(stringify(job, null, 2));

    await new Promise((resolve) => setTimeout(resolve, 8000));
    Logger.log('job finished');
  }
}
