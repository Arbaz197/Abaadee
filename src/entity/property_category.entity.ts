
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { PropertyType } from "./property_type.entity";

@Entity()
export class PropertyCategory {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    property_category_name: string;

    
    @ManyToOne(type => PropertyType, type => type.property)
    type: PropertyType;
}