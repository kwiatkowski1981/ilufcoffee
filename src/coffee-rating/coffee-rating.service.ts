import { Injectable, Logger } from '@nestjs/common';
import { CoffeesService } from '../coffees/coffees.service';

@Injectable()
export class CoffeeRatingService {
  private readonly logger = new Logger(CoffeeRatingService.name);
  constructor(private readonly coffeesService: CoffeesService) {}
}
