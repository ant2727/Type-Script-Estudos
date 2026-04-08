import { User } from "./User";

export class UserTable{
  table: User[]=[]

  addUser(...users:User[]) {
    this.table.push(...users)
  }

  getUsers(){
    return this.table
  }

  getUserByEmail(email: string): User | undefined {
    return this.table.find(user => user.email === email);
  }


}
