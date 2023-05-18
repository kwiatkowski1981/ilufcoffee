import { Injectable, Module, Scope } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CoffeesController } from './coffees.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { Event } from '../events/entities/event.entity';
import { DataSource } from 'typeorm';
import { COFFEE_BRANDS } from './coffees.constants';

// example 1 Value based Provider
// export class MockCoffeesService {} // 👈

// example 3 Class Providers  👈 👈 👈
class ConfigService {}
class DevelopmentConfigService {}
class ProductionConfigService {}

// example 4  Factory Providers 👈 👈 👈 👈
@Injectable()
export class CoffeeBrandsFactory {
  create() {
    /* do something ... */
    return ['buddy brew', 'nescafe'];
  }
}

// example 5 Leverage Async Providers 👈 👈 👈 👈 👈
@Injectable()
export class DbConnection {
  constructor(private readonly dataSource: DataSource) {}
}

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
  controllers: [CoffeesController],
  // providers: [CoffeesService],

  // example 1 Value based Provider // 👈
  // providers: [
  //   {
  //     provide: CoffeesService,
  //     useValue: new MockCoffeesService(),
  //   },
  // ],

  // example 2 Non-class-based Provider Tokens  👈 👈
  // providers: [
  //   CoffeesService,
  //   CoffeeBrandsFactory,
  //   {
  //     provide: 'COFFEE_BRANDS',
  //     useValue: () => ['buddy brew', 'nescafe'],
  //   },
  // ],

  // example 3 Class Providers  👈 👈 👈
  // providers: [
  //   CoffeesService,
  //   {
  //     provide: ConfigService,
  //     useValue:
  //       process.env.NODE_ENV === 'development'
  //         ? DevelopmentConfigService
  //         : ProductionConfigService,
  //   },
  // ],

  // example 4  Factory Providers 👈 👈 👈 👈
  // providers: [
  //   CoffeesService,
  //   CoffeeBrandsFactory,
  //   {
  //     provide: COFFEE_BRANDS,
  //     useFactory: (brandsFactory: CoffeeBrandsFactory) =>
  //       brandsFactory.create(),
  //     inject: [CoffeeBrandsFactory],
  //   },
  // ],

  /* example 5 Leverage Async Providers 👈 👈 👈 👈 👈
  Nie wiem czy to wogóle dziala prawidlowo
  w przykladzie Kamil uzyl wycofanej metody Connect
  a ja zaimplementowalem dataSource z klasy ktora stworzylem powyzej
  */
  // providers: [
  //   CoffeesService,
  //   CoffeeBrandsFactory,
  //   DbConnection,
  //   {
  //     provide: COFFEE_BRANDS,
  //     useFactory: async (dataSource: DataSource): Promise<string[]> => {
  //       // const coffeeBrands = await dataSource.query('SELECT * ...');
  //       const coffeeBrands = await Promise.resolve(['buddy brew', 'nescafe']);
  //       console.log('[!] Async Factory');
  //       return coffeeBrands;
  //     },
  //     inject: [DbConnection],
  //   },
  // ],

  // example 6 Create a Dynamic Module  👈 👈 👈 👈 👈 👈
  // providers: [
  //   CoffeesService,
  //   CoffeeBrandsFactory,
  //   DbConnection,
  //   {
  //     provide: COFFEE_BRANDS,
  //     useFactory: async (dataSource: DataSource): Promise<string[]> => {
  //       // const coffeeBrands = await dataSource.query('SELECT * ...');
  //       const coffeeBrands = await Promise.resolve(['buddy brew', 'nescafe']);
  //       console.log('[!] Async Factory');
  //       return coffeeBrands;
  //     },
  //     inject: [DbConnection],
  //   },
  // ],

  // example 7 Control Providers Scope  👈 👈 👈 👈 👈 👈
  providers: [
    CoffeesService,
    {
      provide: COFFEE_BRANDS,
      useFactory: () => ['buddy brew', 'nescafe'],
      scope: Scope.TRANSIENT, // 👈
    },
  ],

  exports: [CoffeesService],
})
export class CoffeesModule {}
