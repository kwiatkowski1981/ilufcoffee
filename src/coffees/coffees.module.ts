import { Module } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CoffeesController } from './coffees.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { Event } from '../events/entities/event.entity';

export class MockCoffeesService {} // 👈

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
  controllers: [CoffeesController],
  // providers: [CoffeesService],
  providers: [
    {
      provide: CoffeesService,
      useValue: new MockCoffeesService(), // 👈
    },
  ],
  exports: [CoffeesService],
})
export class CoffeesModule {}
