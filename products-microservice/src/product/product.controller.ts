import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { purchaseProducttDto } from './dto/create-product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @MessagePattern({ cmd: 'purchaseProduct' })
  async purchaseProduct(@Payload() productPurchase: purchaseProducttDto) {
    console.log('success...');
    return await this.productService.create(productPurchase);
  }

  @MessagePattern({ cmd: 'getAllProducts' })
  async getAllPurchasedProducts(@Payload() operation: string) {
    console.log(operation);
    console.log(await this.productService.getAll());
    return await this.productService.getAll();
  }
}
