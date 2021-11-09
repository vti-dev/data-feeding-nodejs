import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PubSubServer } from 'nestjs-google-pubsub';

async function bootstrap() {
  const app2 = await NestFactory.create(AppModule);
  await app2.listen(3000);
  const app = await NestFactory.createMicroservice(AppModule, {
    strategy: new PubSubServer({
      projectId: 'pubsub-testing-septian',
      topics: {
        'order_topic': {
          subscriptionId: 'package_sub'
        }
      }
    })
  });
  app.listen();
  console.log('Listening...');
}
bootstrap();
