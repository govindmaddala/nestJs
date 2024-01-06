/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateUserDto } from './dto/product.dto';

@Controller('products')
export class ProductsController {
    constructor(private product: ProductsService) { }

    @Get("all")
    getAllusers() {
        return this.product.findAllProducts();
    }

    @Post("/create")
    createProduct(@Body() productBody: CreateUserDto) {
        this.product.insertProduct(productBody)
        return {
            message: "Product is created",
            productBody
        }
    }

    @Post(":id")
    getProductById(@Param('id', ParseIntPipe) id: number) {
        return this.product.findProductById(id);
    }
}
