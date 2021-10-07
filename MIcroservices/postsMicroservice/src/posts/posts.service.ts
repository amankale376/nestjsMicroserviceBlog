import { BadRequestException, Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import {Post} from './posts.entity';
@Injectable()
export class PostsService {
   
  async getPosts() {
        try {
            const posts = await getRepository(Post).find({select:['id','title']});
            return  posts ;
        } catch (error) {
            throw new BadRequestException(error);
        }
      }
      
     async newPosts(body){
       try {
        const newPost = new Post();
        newPost.title = body.title;
        const success = await getRepository(Post).save(newPost);
        return {message:'success'};
       } catch (error) {
         throw new BadRequestException(error);
       }
      }
}
