import { from } from "rxjs";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { State } from "./state.entity";
import { Location } from "./location.entity"



@Entity()
export class City {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    cityname:string;

    @ManyToOne(type => State, state => state.city)
    state: State;

    @OneToMany(type => Location, location => location.city)
    location: Location[];

}