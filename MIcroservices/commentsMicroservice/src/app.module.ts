import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'postgres',
    host:'localhost',
    port:5432,
    username:'postgres',
    password:'password',
    database:'comments-microservice',
    synchronize:true,
    entities: [join(__dirname, '**', '*.entity{.ts,.js}')],
  }), CommentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
