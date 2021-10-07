import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'posts-microservice',
    synchronize: true,
    entities: [join(__dirname, '**', '*.entity{.ts,.js}')],
  }),PostsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
