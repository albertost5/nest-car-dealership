import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto/index';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuidv4(),
      brand: 'bmw',
      model: 'Serie 1',
    },
    {
      id: uuidv4(),
      brand: 'audi',
      model: 'A3',
    },
    {
      id: uuidv4(),
      brand: 'mercedes',
      model: 'Clase A',
    },
  ];

  find() {
    return this.cars;
  }

  findOne(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Not found car with id ${id}`);
    return car;
  }

  create(createCarDto: CreateCarDto) {
    const newCar = {
      id: uuidv4(),
      ...createCarDto,
    };
    this.cars.push(newCar);
    return newCar;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    let car = this.findOne(id);

    if (updateCarDto.id && updateCarDto.id !== id)
      throw new BadRequestException('The id is wrong!');

    this.cars = this.cars.map((c) => {
      if (c.id === id) {
        car = {
          ...car,
          ...updateCarDto,
          id,
        };
        return car;
      }
      return c;
    });

    return car;
  }

  delete(id: string) {
    const car = this.findOne(id);

    if (!car) throw new NotFoundException(`Car with id ${id} not found.`);

    this.cars = this.cars.filter((c) => c.id !== id);
    return;
  }
}
