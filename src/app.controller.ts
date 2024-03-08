import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('latihan')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('show-data/:id_data')
  getHello(@Param() param): string {
    return 'hellow , saya belajar nest js' + param.id_data;
  }

  @Get()
  index() {
    return {
      status: 'data_ok',
    };
  }
}
