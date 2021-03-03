import { Module } from '@nestjs/common';
import { ServicescontrollerService } from './servicescontroller.service';
import { ServicescontrollerController } from './servicescontroller.controller';
import { TypeOrmModule } from '@nestjs/typeorm';


import { UserRepo } from './user.repositery';
import { Pricerepo } from './price.repositery';
import { CountryRepository } from './country.repositery';
import { StateRepositery } from './state.repositery';
import { LocationRepository } from './location.repository';
import { CityRepository } from './city.repositery';


@Module({
  imports:[TypeOrmModule.forFeature([UserRepo,Pricerepo,CountryRepository,StateRepositery,LocationRepository,CityRepository])],
  providers: [ServicescontrollerService],
  controllers: [ServicescontrollerController]
})
export class ServicescontrollerModule {}
