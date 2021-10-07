import { Field, InputType, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class responseComment{
    @Field()
    commentId:Number;
    @Field()
    postId:Number;
    @Field()
    content:string;
}

@ObjectType()
export class responseComments{

    @Field()
    comment:responseComment;

}

@ObjectType()
export class responseNewComment{
    
        @Field()
        message:String;
}