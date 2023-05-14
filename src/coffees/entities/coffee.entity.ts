import { Entity } from 'typeorm';

@Entity()
export class Coffee {
  id: number;
  name: string;
  brand: string;
  flavors: string[];
}
