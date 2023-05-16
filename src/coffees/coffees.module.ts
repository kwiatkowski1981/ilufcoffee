import { Module } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CoffeesController } from './coffees.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { Event } from '../events/entities/event.entity';
import * as process from 'process';

// example 1 Value based Provider
// export class MockCoffeesService {} // 👈

class ConfigService {} // 👈  👈  👈
class DevelopmentConfigService {} // 👈  👈  👈
class ProductionConfigService {} // 👈  👈  👈

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
  controllers: [CoffeesController],
  // providers: [CoffeesService],

  // example 1 Value based Provider // 👈
  // providers: [
  //   {
  //     provide: CoffeesService,
  //     useValue: new MockCoffeesService(), // 👈
  //   },
  // ],

  // example 2 Non-class-based Provider Tokens  👈 👈
  // providers: [
  //   CoffeesService,
  //   {
  //     provide: 'COFFEE_BRANDS',
  //     useValue: ['buddy brew', 'nescafe'], // 👈 👈
  //   },
  // ],

  // example 3 Class Providers  👈 👈  👈
  providers: [
    CoffeesService,
    {
      provide: ConfigService, // 👈 👈 👈
      // 👈 👈 👈
      useValue:
        process.env.NODE_ENV === 'development'
          ? DevelopmentConfigService
          : ProductionConfigService,
    },
  ],

  exports: [CoffeesService],
})
export class CoffeesModule {}
