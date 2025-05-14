import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  getHello(): string {
    this.logger.log(`Hello World! method called from env ${process.env.APP_ENV}`);
    return 'Hello World!';
  }
}
