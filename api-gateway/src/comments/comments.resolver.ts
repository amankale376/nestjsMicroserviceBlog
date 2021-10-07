import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { requestNewCommentDTO, responseNewCommentDTO } from './dto/dto';
import { microservicesoptions } from './grpc.options';
import { responseComment, responseComments, responseNewComment } from './returns/commentReturns';

@Resolver((of) => responseComments || responseNewComment )
export class CommentsResolver {
    @Client(microservicesoptions)
    private client:ClientGrpc;
  
    private grpcService;
  
    async onModuleInit(){
      this.grpcService = this.client.getService('CommentsController');
    }
  
 @Query(() => [responseComments])
  async getComments(@Args('id') id:Number)  {
    const res =  await this.grpcService.getComments({id});
    console.log(res)
    return res;
    }


  @Mutation(() => responseNewComment)
    newComments(@Args('data') data:requestNewCommentDTO):responseNewCommentDTO{
        return this.grpcService.newComments({id:data.id , content:data.content});
      }
}
