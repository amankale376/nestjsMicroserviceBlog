import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';

import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports:[
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.ggl'),
    }),
    PostsModule,
    CommentsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
