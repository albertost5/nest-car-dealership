import { Injectable } from '@nestjs/common';
import { CarsService } from '../cars/cars.service';

import { BRANDS_SEED } from './data/brands.seed';
import { CARS_SEED } from './data/cars.seed';
import { BrandsService } from '../brands/brands.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService,
  ) {}

  populateDb() {
    this.carsService.loadCarsSeed(CARS_SEED);
    this.brandsService.loadBrandsSeed(BRANDS_SEED);
    return `Seed executed successfully!`;
  }
}
