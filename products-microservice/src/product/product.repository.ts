import { DATABASE_CONNECTION, PRODUCT_REPOSITORY } from 'src/consts';
import { Connection } from 'typeorm';
import { ProductPurchase } from './entities/productPurchase.entity';

export const ProductProvider = [
  {
    provide: PRODUCT_REPOSITORY,
    useFactory: (connection: Connection) =>
      connection.getRepository(ProductPurchase),
    inject: [DATABASE_CONNECTION],
  },
];
