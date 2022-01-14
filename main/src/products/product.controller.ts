import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
    constructor(private productServices: ProductService) {}
    @Get()
    async all() {
        return this.productServices.all()
    }

    @EventPattern('hello')
    async hello(data: string) {
        console.log(data)
    }
}
