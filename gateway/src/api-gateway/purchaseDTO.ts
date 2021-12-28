import { ApiProperty } from '@nestjs/swagger';

export class PurchaseProducttDto {
  @ApiProperty()
  productName: string;

  @ApiProperty()
  descrption: string;

  @ApiProperty()
  email: string;
}
