import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqps://andpxmjj:1JlRaJDsJvcEyGg-X5I2_mRmqRrksy5t@jackal.rmq.cloudamqp.com/andpxmjj'],
      queue: 'main_queue',
      queueOptions: {
        durable: false
      }
    }
  })

  app.listen()
}
bootstrap();
