import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Comment{

    @PrimaryGeneratedColumn()
    commentId: Number;

    @Column()
    postId:Number;

    @Column()
    content:string;
}