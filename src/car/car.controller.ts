import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CarsService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}
  @Post()
  create(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }
  @Get()
  findAll() {
    return this.carsService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carsService.findOne({ id: Number(id) });
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto) {
    return this.carsService.update({ id: Number(id) }, updateCarDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carsService.remove({ id: Number(id) });
  }
}
