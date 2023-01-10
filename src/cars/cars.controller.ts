import { Controller, Get } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  @Get()
  find() {
    return ['BMW', 'Audi', 'Mercedes'];
  }
}
