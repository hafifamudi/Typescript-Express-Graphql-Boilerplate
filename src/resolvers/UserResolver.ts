import { Arg, Field, InputType, Int, Mutation, Query, Resolver} from 'type-graphql';
import { User } from '../entity/User'

@InputType()
class UserInput {
    @Field(() => String)
    firstname:string;

    @Field(() => String)
    lastname:string

    @Field(() => Int)
    age:number
}

@InputType()
class UserUpdateInput {
    @Field(() => String, {nullable: true})
    firstname?:string;

    @Field(() => String, {nullable: true})
    lastname?:string;

    @Field(() => Int, {nullable: true})
    age?:number;
}

@Resolver()
export class UserResolver {
    @Mutation(() => User)
    async createUser(@Arg("options") options:UserInput) {
        const user = await User.create(options).save();
        return user;
    } 

    @Mutation(() => Boolean)
    async updateUser(
        @Arg("id") id: number,
        @Arg("input") input: UserUpdateInput
        ) {
        await User.update({ id }, input);
        return true;
    }

    @Mutation(() => Boolean)
    async deleteUser(@Arg("id") id: number){
        await User.delete({ id });
        return true;
    }

    @Query(() => [User])
    users() {
        return User.find();
    }
}