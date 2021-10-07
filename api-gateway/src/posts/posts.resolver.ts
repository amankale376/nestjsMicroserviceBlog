import { Query } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { newPostBody, returnPostsDTO } from './dto/dto';
import { microservicesoptions } from './grpc.options';
import { responseAllComments, responseNewPost } from './returns/return';

@Resolver((of) => responseAllComments || responseNewPost)
export class PostsResolver {

    @Client(microservicesoptions)
  private client:ClientGrpc;

  private grpcService;

  async onModuleInit(){
    this.grpcService = this.client.getService('PostsController');
  }
 
  // @Query((returns) => [responseAllComments])
  // getPosts():returnPostsDTO{
  //   return this.grpcService.getPosts({});
  // }

  @Mutation((returns) => responseNewPost)
  newPost(@Args('body') body:newPostBody):responseNewPost{
    return this.grpcService.newPost({ title:body.title });
  }

}
