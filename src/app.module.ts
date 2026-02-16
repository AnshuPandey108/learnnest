import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { StudentsModule } from './students/students.module';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [ StudentsModule, CustomerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
