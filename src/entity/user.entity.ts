
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Country } from "./country.entity";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    phonenumber: string;

    @Column()
    is_active: string;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    @OneToOne(type => Country)
    @JoinColumn()
    country: Country;

}