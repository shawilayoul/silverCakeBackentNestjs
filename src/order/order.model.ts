import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Order {
  @Field(() => ID)
  id: string;

  @Field()
  userId: string;

  @Field()
  productId: string;

  @Field(() => Int)
  quantity: number;
}
