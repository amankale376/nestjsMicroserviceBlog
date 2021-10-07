import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const microservicesoptions:ClientOptions = {
  transport:Transport.GRPC,
  options: {
    url: '127.0.0.1:4001',
    package:'app',
    protoPath: join(__dirname, '../../src/comments/comments.proto'),
  }
}