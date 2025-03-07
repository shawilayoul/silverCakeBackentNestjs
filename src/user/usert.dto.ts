import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UserCreateInput {
  @Field()
  email: string;

  @Field()
  name: string;

  @Field()
  password: string;
}
