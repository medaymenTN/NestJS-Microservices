import { Inject, Injectable } from '@nestjs/common';
import { PRODUCT_REPOSITORY } from 'src/consts';
import { Repository } from 'typeorm';
import { purchaseProducttDto } from './dto/create-product.dto';
import { ProductPurchase } from './entities/productPurchase.entity';

@Injectable()
export class ProductService {
  constructor(
    @Inject(PRODUCT_REPOSITORY)
    private productRepository: Repository<ProductPurchase>,
  ) {}

  create(productPurchase: purchaseProducttDto) {
    return this.productRepository.save(productPurchase);
  }

  getAll() {
    return this.productRepository.find();
  }
}
