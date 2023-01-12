import { v4 as uuidv4 } from 'uuid';
import { Brand } from '../../brands/entities/brand.entity';

export const BRANDS_SEED: Brand[] = [
  {
    id: uuidv4(),
    name: 'bmw',
    createdAt: new Date().getTime(),
  },
  {
    id: uuidv4(),
    name: 'opel',
    createdAt: new Date().getTime(),
  },
  {
    id: uuidv4(),
    name: 'audi',
    createdAt: new Date().getTime(),
  },
];
