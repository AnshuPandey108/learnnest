import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductService } from './product/product.service';
import { ProductModule } from './product/product.module';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [ProductModule, StudentsModule],
  controllers: [AppController],
  providers: [AppService, ProductService],
})
export class AppModule {}
