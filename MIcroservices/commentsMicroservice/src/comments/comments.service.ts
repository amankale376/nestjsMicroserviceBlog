import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './app.entity';
import { getRepository, Repository } from 'typeorm';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private repo:Repository<Comment>
  ){}
    async getComments(id) {
        try {
          const comments = await this.repo.find({where:{postId:id}});
          return comments;
        } catch (error) {
          return error
        }
      }
    
     async newComments(arg){
          try {
            const {id , body} = arg;
            const newComment = new Comment();
            newComment.postId = id;
            newComment.content = body.content;
            const success =   await this.repo.save(newComment);
            console.log(success)
            return {message:"success"};
          } catch (error) {
            throw new BadRequestException(error)
          }
      }
}
