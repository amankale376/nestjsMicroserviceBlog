import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post{
@PrimaryGeneratedColumn()
id:Number;

@Column()
title:string;

}