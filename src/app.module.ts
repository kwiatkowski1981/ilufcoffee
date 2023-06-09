import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesController } from './coffees/coffees.controller';
import { CoffeesService } from './coffees/coffees.service';
import { CoffeesModule } from './coffees/coffees.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    // TypeOrmModule.forRoot(dataSourceOptions),
    CoffeesModule,
    TypeOrmModule.forRoot({
      type: 'postgres', // type of our database
      host: 'localhost', // database host
      port: 5433, // database host
      username: 'postgres', // username
      password: 'pass123', // user password
      database: 'postgres', // name of our database,
      // entities: ['dist/**/*.entity{.ts,.js}'],
      autoLoadEntities: true, // models will be loaded automatically
      synchronize: true, // your entities will be synced with the database(recommended: disable in prod)
      logging: false, // logs will be printed to the console
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
