import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductPurchase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: true })
  productName: string;

  @Column({ type: 'varchar', nullable: true })
  descrption: string;

  @Column({ type: 'varchar', nullable: true })
  email: string;
}
