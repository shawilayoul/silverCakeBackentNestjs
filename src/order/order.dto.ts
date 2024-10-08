import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class OrderCreateInput {
  @Field()
  userId: string;

  @Field()
  productId: string;

  @Field(() => Int)
  quantity: number;
}

@InputType()
export class OrderUpdateInput {
  @Field({ nullable: true })
  userId: string;

  @Field({ nullable: true })
  productId: string;

  @Field(() => Int, { nullable: true })
  quantity: number;
}
