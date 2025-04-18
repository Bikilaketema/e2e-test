import { Test, TestingModule } from '@nestjs/testing';
import { CarsController } from './car.controller';
import { CarsService } from './car.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { prismaService, postgresClient } from '../../test/setupTests.e2e';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';

describe('CarsController', () => {
  let controller: CarsController;
  let app: INestApplication;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarsController],
      providers: [CarsService, PrismaService],
    })
      .overrideProvider(PrismaService)
      .useValue(prismaService)
      .compile();
    controller = module.get<CarsController>(CarsController);
    app = module.createNestApplication();
    await app.init();
  });
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('should create a car', async () => {
    const createCarDto = { model: 'Mercedes', color: 'Red' };
    const response = await request(app.getHttpServer())
      .post('/cars')
      .send(createCarDto)
      .expect(201);
    expect(response.body).toEqual({
      id: 1,
      model: 'Mercedes',
      color: 'Red',
    });
  });
});
