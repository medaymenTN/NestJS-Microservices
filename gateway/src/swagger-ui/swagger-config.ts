import { DocumentBuilder } from '@nestjs/swagger';

export const config = new DocumentBuilder()
  .setTitle('Products example')
  .setDescription('')
  .setVersion('1.0')
  .addTag('Product')
  .build();
