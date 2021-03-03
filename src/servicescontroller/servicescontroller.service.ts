import { Get, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from 'src/entity/city.entity';
import { Country } from 'src/entity/country.entity';
import { Location } from 'src/entity/location.entity';
import { Price } from 'src/entity/price.entity';
import { State } from 'src/entity/state.entity';
import { User } from 'src/entity/user.entity';

import { UserRepo } from './user.repositery';
import { Pricerepo } from './price.repositery';
import { CountryRepository } from './country.repositery';
import { StateRepositery } from './state.repositery';
import { LocationRepository } from './location.repository';
import { CityRepository } from './city.repositery';

@Injectable()
export class ServicescontrollerService {
    constructor(
        @InjectRepository(UserRepo)
        private userrepo: UserRepo,
        @InjectRepository(Pricerepo)
        private pricerepo: Pricerepo,

        @InjectRepository(CountryRepository)
        private countryrepo: CountryRepository,
        
        @InjectRepository(StateRepositery)
        private staterepo: StateRepositery,
        
        @InjectRepository(CityRepository)
        private cityrepo: CityRepository,
        
        @InjectRepository(LocationRepository)
        private locationrepo: LocationRepository
        



    ) { }
    async getalluser(): Promise<User[]> {
        return this.userrepo.find();
    }

    async createuser(name: string, email: string, password: string, phonenumber: string, created_at: Date, updated_at: Date) {
        const user = new User();
        user.name = name;
        user.email = email;
        user.password = password;
        user.phonenumber = phonenumber;
        user.created_at = created_at;
        user.updated_at = updated_at;
        await this.userrepo.save(user);
    }



    async getallprice(): Promise<Price[]> {
        return await this.pricerepo.find();
    }
    async createprice(prices: string) {
        const price = new Price();
        price.prices = prices;        

        await this.pricerepo.save(price);
    }

   
    /*async getallcountry(): Promise<Country[]> {
        return await this.countryrepo.find();
    }*/
    
    async createcountry(country_name: string,state:string,city:string,location:string) {
    const country= new Country();   
    country.name=country_name;
    await this.countryrepo.save(country);
    const states =new State();
    states.statename=state;
    states.country=country;
    await this.staterepo.save(states);
    const cities= new City();
    cities.cityname=city;
    cities.state=states;
    await this.cityrepo.save(cities);
    const locations= new Location();
    locations.locationname=location;
    locations.city=cities; 
    await this.locationrepo.save(locations);
    }

async getallcity():Promise<Country[]>{
    const country = await this.countryrepo
    .createQueryBuilder("country")
    .leftJoinAndSelect("country.state", "state")
    .leftJoinAndSelect("state.city", "city")
    .leftJoinAndSelect("city.location", "location")
    .getMany();
    return country;
}
}

