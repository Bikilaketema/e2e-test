import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarModule } from './car/car.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [CarModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
