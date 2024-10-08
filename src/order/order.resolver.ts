import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { OrderService } from './order.service';
import { Order } from './order.model';
import { OrderCreateInput, OrderUpdateInput } from './order.dto';

@Resolver(() => Order)
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}

  @Query(() => [Order], { name: 'getOrders' })
  async getOrders() {
    return this.orderService.getOders();
  }

  @Query(() => Order)
  async getOderById(@Args('id') id: string) {
    return this.orderService.getOderById(id);
  }

  @Mutation(() => Order)
  async createOrder(@Args('data') data: OrderCreateInput) {
    return this.orderService.createOrder(data);
  }

  @Mutation(() => Order)
  async updateOder(
    @Args('id') id: string,
    @Args('data') data: OrderUpdateInput,
  ) {
    return this.updateOder(id, data);
  }

  @Mutation(() => Order)
  async deleteOder(@Args('id') id: string) {
    return this.deleteOder(id);
  }
}
