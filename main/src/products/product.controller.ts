import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
    constructor(private productServices: ProductService) {}
    @Get()
    async all() {
        return this.productServices.all()
    }
}
