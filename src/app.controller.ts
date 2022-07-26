import { Body, Controller, Get, Ip, Param, Post, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { get } from 'http';

@Controller({ host: '127.0.0.1' })
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Post('hello/:id')
  getHelloBody(@Body() body,@Query() query,@Param() param,@Ip() ip): string {
    console.log(body)
    console.log(query)
    console.log(param)
    console.log(ip)

    return this.appService.getHello();
  }
  @Get('hello')
  getHello(){
    return 'hello';
  }
}
