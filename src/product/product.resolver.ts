import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Product } from './product.model';
import { ProductCreateInput, ProductUpdateInput } from './product.dto';
import { NotFoundException } from '@nestjs/common';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query(() => [Product], { name: 'getProducts' })
  async getProducts() {
    return this.productService.getProducts();
  }

  @Query(() => Product, { name: 'getProductById' })
  async getProductById(@Args('id') id: string) {
    return this.productService.getProdcutById(id);
  }

  @Mutation(() => Product)
  async createProduct(@Args('data') data: ProductCreateInput) {
    return this.productService.createProduct(data);
  }

  @Mutation(() => Product)
  async updateProductById(
    @Args('id') id: string,
    @Args('data') data: ProductUpdateInput,
  ) {
    try {
      return this.productService.updateProductById(id, data);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
    }
  }
}
