import {
  Column,
  Entity,
  Index,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Coffee } from './coffee.entity';

@Entity()
export class Flavor {
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column()
  name: string;

  @ManyToMany(
    (type) => Coffee,
    (coffee) => coffee.flavors, // what is "flavor" within the Coffee Entity
  ) // 👈
  coffees: Coffee[];
}
