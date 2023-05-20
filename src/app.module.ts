import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeeRatingModule } from './coffee-rating/coffee-rating.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import appConfig from '../config/app.config';
import { CommonModule } from './common/common.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest-course'),
    // TypeOrmModule.forRoot(dataSourceOptions),
    // TypeOrmModule.forRootAsync({
    //   useFactory: () => ({
    //     type: 'postgres',
    //     host: process.env.DB_HOST,
    //     port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 3456,
    //     username: process.env.DB_USER,
    //     password: process.env.DB_PASS,
    //     database: process.env.DB_NAME,
    //     entities: ['dist/**/*.entity{.ts,.js}'],
    //     autoLoadEntities: true,
    //     synchronize: true,
    //     logging: false,
    //   }),
    // }),
    // ConfigModule.forRoot({
    //   load: [appConfig],
    //   envFilePath: '.env',
    //   // ignoreEnvFile: true,
    //   validationSchema: Joi.object({
    //     DB_HOST: Joi.required(),
    //     DB_PORT: Joi.number().default(5433),
    //   }),
    // }),
    CoffeesModule,
    // CoffeeRatingModule,
    // DatabaseModule,
    // CommonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
