import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductCreateInput, ProductUpdateInput } from './product.dto';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async getProducts() {
    return this.prisma.product.findMany();
  }

  async getProdcutById(id: string) {
    return this.prisma.product.findUnique({
      where: { id },
    });
  }

  async createProduct(data: ProductCreateInput) {
    return this.prisma.product.create({ data });
  }

  async updateProductById(id: string, data: ProductUpdateInput) {
    try {
      const productExist = await this.prisma.product.findUnique({
        where: {
          id,
        },
      });
      if (!productExist) {
        throw new NotFoundException(`Product with ID ${id} not found`);
      }
      return this.prisma.product.update({
        where: {
          id,
        },
        data,
      });
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
    }
  }
}
