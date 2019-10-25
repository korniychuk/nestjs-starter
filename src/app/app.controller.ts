import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  public constructor(
    private readonly $app: AppService,
  ) {}

  @Get()
  public getHello(): string {
    return this.$app.getHello();
  }
}
