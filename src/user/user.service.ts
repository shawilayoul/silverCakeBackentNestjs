import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service'; 
//import { Prisma } from '@prisma/client';
import { UserCreateInput } from './usert.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getUsers() {
    return this.prisma.user.findMany();
  }

  async createUser(data: UserCreateInput) {
    return this.prisma.user.create({ data });
  }
}
