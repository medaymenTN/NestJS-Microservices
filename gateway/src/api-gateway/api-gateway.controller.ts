import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PurchaseProducttDto } from './purchaseDTO';

@Controller('api-gateway')
export class ApiGatewayController {
  constructor(@Inject('GATEWAY_SERVICE') private client: ClientProxy) {}

  @Post('purchase')
  async purchaseProduct(@Body() purchaseProduct: PurchaseProducttDto) {
    return this.client.send({ cmd: 'purchaseProduct' }, purchaseProduct);
  }

  @Get('products')
  async getAllProducts() {
    return this.client.send({ cmd: 'getAllProducts' }, 'fetch products');
  }
}
