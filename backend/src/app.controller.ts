import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { Message } from '@google-cloud/pubsub';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('order_topic')
  async handleMyTopicEvent(data: Message) {
    console.log(data.data.toString());
  }
 
}
