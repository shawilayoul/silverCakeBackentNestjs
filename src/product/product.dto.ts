import { InputType, Field, Int, Float } from '@nestjs/graphql';

@InputType()
export class ProductCreateInput {
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
}

@InputType()
export class ProductUpdateInput {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => Float, { nullable: true })
  price: number;

  @Field({ nullable: true })
  image: string;

  @Field(() => Int, { nullable: true })
  quantity: number;
}
