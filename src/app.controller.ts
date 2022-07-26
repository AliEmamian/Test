import { Body, Controller, Get, Param, Post, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Post('hello/:id')
  getHelloBody(@Body() body,@Query() query,@Param() param): string {
    console.log(body)
    console.log(query)
    console.log(param)
    return this.appService.getHello();
  }
}
