import { ObjectType, Field, Int, Float, ID } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field(() => ID)
  id: string;
  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => Float)
  price: number;

  @Field()
  image: string;

  @Field(() => Int)
  quantity: number;

  @Field()
  createdAt: Date;
}
