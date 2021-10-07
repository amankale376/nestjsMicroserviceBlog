import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { Client, ClientGrpc, ClientProxy } from '@nestjs/microservices';
import { microservicesoptions } from './posts/grpc.options';

@Controller()
export class AppController {
  
  // @Client(microservicesoptions)
  // private client:ClientGrpc;

  // private grpcService;

  // async onModuleInit(){
  //   this.grpcService = this.client.getService('AppController');
  // }


  // @Get('/posts/:id/comments')
  //  getComments(@Param('id') id): [responseCommentDTO] {
  // return  this.grpcService.getComments({id:id});
  // }

    
  // @Post('/posts/:id/comments')
  //   newComments(@Param('id') id, @Body() body: requestNewCommentDTO):string{
  //   return this.grpcService.newComments({id, body});
  // }


  // @Get("/posts")
  // getPosts() {
  //   return this.grpcService.getPosts({});
  // }

  // @Post('/posts')
  // newPost(@Body() body:newPostBody){
  //   return this.grpcService.newPost({ title:body.title });
  // }


}
