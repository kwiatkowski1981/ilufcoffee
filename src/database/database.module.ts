import { DynamicModule, Module } from '@nestjs/common';
import { DataSource, DataSourceOptions } from 'typeorm';

@Module({
  // providers: [
  //   {
  //     provide: 'CONNECTION',
  //     useValue: new DataSource({
  //       type: 'postgres',
  //       host: 'localhost',
  //       port: 5433,
  //     }).initialize(),
  //   },
  // ],
})
// Improved Dynamic Module way of creating CONNECTION provider
export class DatabaseModule {
  static register(options: DataSourceOptions): DynamicModule {
    return {
      module: DatabaseModule,
      providers: [
        {
          provide: 'CONNECTION',
          useValue: new DataSource(options),
        },
      ],
    };
  }
}
