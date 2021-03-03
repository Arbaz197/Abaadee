import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { City } from "./city.entity";

import { Country } from "./country.entity";

@Entity()
export class State {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    statename:string;

    @ManyToOne(type => Country, country => country.state)
    country: Country;
    
    @OneToMany(type => City, city => city.state)
    city: City[];

}