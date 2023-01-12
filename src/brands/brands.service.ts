import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto, UpdateBrandDto } from './dto/index';
import { Brand } from './entities/brand.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    {
      id: uuidv4(),
      name: 'bmw',
      createdAt: new Date().getTime(),
    },
  ];

  create(createBrandDto: CreateBrandDto) {
    const { name } = createBrandDto;
    const newBrand: Brand = {
      id: uuidv4(),
      name: name.toLocaleLowerCase(),
      createdAt: new Date().getTime(),
    };
    this.brands.push(newBrand);
    return newBrand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((b) => b.id === id);
    if (!brand) throw new NotFoundException();
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandUpdated = this.findOne(id);
    this.brands = this.brands.map((b) => {
      if (b.id === id) {
        brandUpdated.updatedAt = new Date().getTime();
        brandUpdated = { ...brandUpdated, ...updateBrandDto };
        return brandUpdated;
      }

      return b;
    });
    return brandUpdated;
  }

  remove(id: string) {
    const brand = this.findOne(id);
    this.brands = this.brands.filter((b) => b.id !== brand.id);
    return {
      message: `The brand with id ${id} was removed successfully!`,
    };
  }
}
