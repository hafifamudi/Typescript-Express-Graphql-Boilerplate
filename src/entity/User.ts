import { Field, ID, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class User extends BaseEntity{
  @Field(() => ID)
  @PrimaryGeneratedColumn()
    id: number;
  
  @Field(() => String)
  @Column()
    firstname: string;

  @Field(() => String)
  @Column()
    lastname: string;

  @Field(() => Int)
  @Column()
    age: number;
}