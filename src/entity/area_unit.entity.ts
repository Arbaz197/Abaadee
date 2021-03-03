import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AreaName {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    area_name: string;
}