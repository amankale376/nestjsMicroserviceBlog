import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport:Transport.GRPC,
    options: {
      url: '127.0.0.1:4002',
      package:'app',
      protoPath: join(__dirname, '../src/posts/posts.proto'),
    }
  } 
    );

   app.listen().then(()=> console.log("Posts microservice is listening"));
}
bootstrap();
