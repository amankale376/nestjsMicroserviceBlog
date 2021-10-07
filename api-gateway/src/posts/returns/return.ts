import { Field, ObjectType } from "@nestjs/graphql";



@ObjectType()
export class responseNewPost{
       
    @Field()
    message:string;
    
}


@ObjectType()
export class responseAllComments{
       
    @Field()
     id:Number;
     
     @Field()
     title:String;
}