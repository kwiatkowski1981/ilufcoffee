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
  SetMetadata,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { Request } from 'express';
import { REQUEST } from '@nestjs/core';
import { Public } from '../common/decorators/public.decorator';

// @UsePipes(ValidationPipe)
@Controller('coffees')
export class CoffeesController {
  private readonly logger = new Logger(CoffeesController.name); // Logger 👈
  constructor(
    private readonly coffeesService: CoffeesService,
    @Inject(REQUEST) private request: Request,
  ) {
    console.log('CoffeesController created');
  }

  // @SetMetadata('isPublic', true)
  @Public()
  @UsePipes(ValidationPipe)
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    // const { limit, offset } = paginationQuery;
    // route to hit: localhost:3000/coffees?limit=10&offset=20
    return this.coffeesService.findAll(paginationQuery);
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.coffeesService.findOne(id);
  }

  @Public()
  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeesService.create(createCoffeeDto);
  }

  @Public()
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeesService.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: number) {
    return this.coffeesService.remove(id);
  }
}
