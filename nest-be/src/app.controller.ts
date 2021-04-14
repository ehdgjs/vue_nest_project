import { Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/hi')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello/:id')
  getHello(@Param() param): string {
    return this.appService.getHello(param);
  }

  @Post('/Bye')
  postBye(): string {
    return this.appService.postBye();
  }
}
