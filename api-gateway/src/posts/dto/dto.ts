import { Field, InputType } from "@nestjs/graphql";


@InputType()
export class newPostBody{
    @Field()
    title:string;
}

@InputType()
export class returnPostsDTO{
    @Field()
    id:Number;
    @Field()
    title:string;
}