import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee, CoffeeSchema } from './entities/coffee.entity';
import { Event, EventSchema } from '../events/entities/event-mongo.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Coffee.name,
        schema: CoffeeSchema,
      },
      {
        name: Event.name,
        schema: EventSchema,
      },
    ]),
    // TypeOrmModule.forFeature([Coffee, Flavor, Event]),
    // ConfigModule.forFeature(coffeesConfig),
    // ConfigModule,
  ],
  controllers: [CoffeesController],
  providers: [CoffeesService],
  exports: [CoffeesService],
})
export class CoffeesModule {}
