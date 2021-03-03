import { EntityRepository, Repository } from "typeorm";
import { User } from "../entity/user.entity";
@EntityRepository(User)
export class UserRepo extends Repository<User>{

}