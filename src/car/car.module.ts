import { Module } from '@nestjs/common';
import { CarsService } from './car.service';
import { CarsController } from './car.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CarsController],
  providers: [CarsService, PrismaService],
})
export class CarModule {}
