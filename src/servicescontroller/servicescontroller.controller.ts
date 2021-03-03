import { Body, Controller, Get, Post } from '@nestjs/common';
import { Country } from 'src/entity/country.entity';
import { Price } from 'src/entity/price.entity';
import { User } from 'src/entity/user.entity';
import { ServicescontrollerService } from './servicescontroller.service';


@Controller('servicescontroller')
export class ServicescontrollerController {
    constructor(private userservice: ServicescontrollerService,
        ) {

    }
    //working on user
    @Get("/user")
    GetAllUser(): Promise<User[]> {
        return this.userservice.getalluser();
    }
    
    
    @Post("/user")
    createuser(
        @Body("name") name: string, @Body("email") email: string, @Body("password") password: string,@Body("phonenumber") phonenumber: string,@Body("created_at") created_at: Date,@Body("updated_at") updated_at: Date
    ) {
        console.log(name, email,password,phonenumber,created_at,updated_at);
        this.userservice.createuser(name, email,password,phonenumber,created_at,updated_at);

    }
    //working on price 
    @Get("/price")
    GetAllPrice(): Promise<Price[]> {
        return this.userservice.getallprice();
    }
    
    
    @Post("/price")
    createprice(
        @Body("price") prices: string) {
        console.log(prices);
        this.userservice.createprice(prices);

}
@Post("/country")
createcountry(
    @Body("co_name") co_name: string,@Body("s_name") s_name: string,@Body("c_name") c_name: string,@Body("l_name") l_name: string) {
    //console.log(c_name,s_name,city_name,l_name);
this.userservice.createcountry(co_name,s_name,c_name,l_name);

}
@Get("/country")
GetAllcountry(): Promise<Country[]> {
    return this.userservice.getallcity();
}

}
