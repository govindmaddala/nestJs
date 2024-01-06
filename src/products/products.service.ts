/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './entity/product.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/product.dto';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(ProductEntity)
        private productEntitysRepository: Repository<ProductEntity>,
    ) { }

    findAllProducts(): Promise<ProductEntity[]> {
        return this.productEntitysRepository.find();
    }

    insertProduct(productDetails: CreateUserDto): any {
        return this.productEntitysRepository.save(productDetails);
    }

    findProductById(id: number): Promise<ProductEntity> {
        // this.productEntitysRepository.findOne({ where: { id } })
        return this.productEntitysRepository.findOneBy({ id: id })
    }
}
