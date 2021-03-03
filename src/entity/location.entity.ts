import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { City } from "./city.entity";


@Entity()
export class Location {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    locationname:string;

    @ManyToOne(type => City, city => city.location)
    city: City;

}