import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Category } from './category/category.entity';
import { BrandModule } from './brand/brand.module';
import { BranchModule } from './branch/branch.module';
import { ProductsModule } from './products/products.module';
import { Product } from './products/product.entity';
import { Brand } from './brand/brand.entity';
import { Branch } from './branch/branch.entity';
import { CartModule } from './cart/cart.module';
import { OrderModule } from './order/order.module';
import { Order } from './order/order.entity';
import { OrderDetails } from './order-details/order-detail.entity';
import { Cart } from './cart/cart.entity';
import { VoucherModule } from './voucher/voucher.module';
import { RateModule } from './rate/rate.module';
import { Rate } from './rate/rate.entity';
import { Voucher } from './voucher/voucher.entity';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { OrderDetailsModule } from './order-details/order-details.module';
import { EmailModule } from './email/email.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'duong15032001',
      database: 'newtgdd',
      entities: [
        User,
        Category,
        Brand,
        Product,
        Branch,
        Order,
        OrderDetails,
        Cart,
        Rate,
        Voucher,
      ],
      synchronize: true,
    }),
    UsersModule,
    BrandModule,
    CategoryModule,
    BranchModule,
    ProductsModule,
    CartModule,
    OrderModule,
    VoucherModule,
    RateModule,
    AuthModule,
    OrderDetailsModule,
    EmailModule,
  ],
})
export class AppModule {}
