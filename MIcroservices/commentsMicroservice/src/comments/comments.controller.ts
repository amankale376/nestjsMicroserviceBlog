import { Controller } from '@nestjs/common';
import { EventPattern, GrpcMethod } from '@nestjs/microservices';
import { CommentsService } from './comments.service';

@Controller('/')
export class CommentsController {
    constructor(private readonly appService:CommentsService){}

 
  @GrpcMethod('CommentsController','GetComments')
 async getComments(id) {
    const ret = await this.appService.getComments(id.id);
    console.log(ret)
    return ret;
  }

  @GrpcMethod('CommentsController','NewComments')
   newComments(arg){
    return this.appService.newComments(arg);
  }
}
