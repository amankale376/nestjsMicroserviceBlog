import { Controller } from '@nestjs/common';
import { EventPattern, GrpcMethod } from '@nestjs/microservices';
import { PostsService } from './posts.service';

@Controller('/')
export class PostsController {
    constructor(private readonly appService:PostsService){}
    
   @GrpcMethod('PostsController','GetPosts')
    getPosts({}) {
     const res = this.appService.getPosts();
     console.log(res);
     return res
  }

  @GrpcMethod('PostsController','NewPost')
  newPosts(body){
    return this.appService.newPosts(body);
  }
}
