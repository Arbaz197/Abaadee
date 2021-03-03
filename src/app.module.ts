import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServicescontrollerModule } from './servicescontroller/servicescontroller.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '9145',
    database: 'abaadee',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }),
     ServicescontrollerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
