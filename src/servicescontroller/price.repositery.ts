import { EntityRepository, Repository } from "typeorm";
import { Price } from "../entity/price.entity";

@EntityRepository(Price)
export class Pricerepo extends Repository<Price>{
    
}