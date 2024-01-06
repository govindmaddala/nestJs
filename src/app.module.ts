/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductEntity } from "./products/entity/product.entity";
import { UserModule } from './user/user.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { UserEntity } from "./user/entity/user.entity";

@Module({
    imports: [ProductsModule,
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: '127.0.0.1',
            port: 3306,
            username: 'root',
            password: '2107',
            database: 'nestjs',
            entities: [ProductEntity, UserEntity],
            synchronize: true,
          }),
        UserModule,
        AuthenticationModule
    ],
    providers: [],
    controllers: []
})
export class AppModule {}
