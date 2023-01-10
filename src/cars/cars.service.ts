import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'BMW',
      model: 'Serie 1',
    },
    {
      id: 2,
      brand: 'Audi',
      model: 'A3',
    },
    {
      id: 3,
      brand: 'Mercedes',
      model: 'Clase A',
    },
  ];

  find() {
    return this.cars;
  }

  findOne(id: number) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Not found car with id ${id}`);
    return car;
  }
}
