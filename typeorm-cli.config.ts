import { DataSource } from 'typeorm';
import { CoffeeRefactor1684146335533 } from './src/migrations/1684146335533-CoffeeRefactor';
import { Flavor } from './src/coffees/entities/flavor.entity';
import { Coffee } from './src/coffees/entities/coffee.entity';
import { SchemaSync1684148950247 } from './src/migrations/1684148950247-SchemaSync';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  // entities: ['src/**/*.entity{.ts,.js}'],
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1684146335533, SchemaSync1684148950247],
});
