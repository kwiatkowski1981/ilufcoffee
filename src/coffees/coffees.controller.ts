import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get('')
  findAll() {
    return 'This action returns all coffees';
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return `This action returns the coffee with id ${id}`;
  }

  @Post()
  @HttpCode(HttpStatus.GONE) // 👈
  create(@Body() body) {
    // JSON for insomnia or whatever
    // {
    //   "name": "Old Florida Roast",
    //   "brand": "Buddy Brew"
    // }
    return body;
    // return `This action creates a coffee`;
  }
}
