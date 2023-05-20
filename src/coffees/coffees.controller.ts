import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Logger,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Request } from 'express';
import { REQUEST } from '@nestjs/core';
import { PaginationQueryDto } from '../common/dto/pagination-query-mongo.dto';

@Controller('coffees')
export class CoffeesController {
  private readonly logger = new Logger(CoffeesController.name); // Logger 👈
  constructor(
    private readonly coffeesService: CoffeesService,
    @Inject(REQUEST) private request: Request,
  ) {
    console.log('CoffeesController created');
  }

  @Get()
  async findAll(@Query() paginationQuery: PaginationQueryDto) {
    // const { limit, offset } = paginationQuery;
    // route to hit: localhost:3000/coffees?limit=10&offset=20
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    return this.coffeesService.findAll(paginationQuery);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeesService.findOne(id);
  }

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeesService.create(createCoffeeDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeesService.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.coffeesService.remove(id);
  }
}
