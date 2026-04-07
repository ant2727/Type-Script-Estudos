import { User } from "./User";

export class UserTable{
  table: User[]=[]

  addUser(...users:User[]) {
    this.table.push(...users)
  }

  getUsers(){
    return this.table
  }
}
