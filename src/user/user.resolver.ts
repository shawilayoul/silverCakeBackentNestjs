import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserCreateInput } from './usert.dto';
import { User } from './user.model';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User], { name: 'getUsers' })
  async getUsers() {
    return this.userService.getUsers();
  }

  @Mutation(() => User)
  async createUser(@Args('data') data: UserCreateInput) {
    return this.userService.createUser(data);
  }
}
