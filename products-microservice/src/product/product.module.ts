import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { DatabaseModule } from 'src/ORMConfig/database.module';
import { ProductProvider } from './product.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductController],
  providers: [...ProductProvider, ProductService],
})
export class ProductModule {}
