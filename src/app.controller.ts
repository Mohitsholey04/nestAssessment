import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor() {}

  @Get('/login')
  getHello(): string {
    return 'Hello World! This is the login page';
  }
}
