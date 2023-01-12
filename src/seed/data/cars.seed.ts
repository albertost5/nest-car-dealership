import { Car } from '../../cars/interfaces/car.interface';
import { v4 as uuidv4 } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    id: uuidv4(),
    brand: 'bmw',
    model: 'serie 1',
  },
  {
    id: uuidv4(),
    brand: 'bmw',
    model: 'serie 3',
  },
  {
    id: uuidv4(),
    brand: 'bmw',
    model: 'serie x1',
  },
  {
    id: uuidv4(),
    brand: 'opel',
    model: 'astra',
  },
  {
    id: uuidv4(),
    brand: 'opel',
    model: 'corsa',
  },
  {
    id: uuidv4(),
    brand: 'audi',
    model: 'a3',
  },
];
