import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { OrderCreateInput, OrderUpdateInput } from './order.dto';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async getOders() {
    return this.prisma.order.findMany();
  }

  async getOderById(id: string) {
    return this.prisma.order.findUnique({
      where: {
        id,
      },
    });
  }
  async createOrder(data: OrderCreateInput) {
    return this.prisma.order.create({ data });
  }

  async updateOder(id: string, data: OrderUpdateInput) {
    return this.prisma.order.update({
      where: { id },
      data,
    });
  }
  async deleteOder(id: string) {
    return this.prisma.order.delete({
      where: { id },
    });
  }
}
