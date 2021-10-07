import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class responseCommentDTO{
    @Field()
    commentId:Number;
    @Field()
    postId:Number;
    @Field()
    content:string;
}
@InputType()
export class requestNewCommentDTO{
    @Field()
  id:Number;
  @Field()
 content:string;
}



export class responseNewCommentDTO{

    message:String;
}