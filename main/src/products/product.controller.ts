import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private productServices: ProductService) {}
  @Get()
  async all() {
    return this.productServices.all();
  }

  @EventPattern('product_created')
  async productCreated(product: any) {
    this.productServices.create({
      id: product.id,
      title: product.title,
      image: product.image,
      likes: product.likes,
    });
  }

  @EventPattern('product_updated')
  async productUpdated(product: any) {
    await this.productServices.update(product.id, {
      id: product.id,
      title: product.title,
      image: product.image,
      likes: product.likes,
    });
  }

  @EventPattern('product_deleted')
  async productDelete(id: number) {
    await this.productServices.delete(id)
  }
}
