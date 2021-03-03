import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Beds {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    beds_quaintity: number;
}