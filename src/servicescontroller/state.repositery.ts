import { EntityRepository, Repository } from "typeorm";
import { State } from "../entity/state.entity";
@EntityRepository(State)
export class StateRepositery extends Repository<State>{
    
}