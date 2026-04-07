
export class tabbleUser {
  readonly id:  string;
  readonly email: string;
  readonly password: string;
  readonly useres: Users[]=[]

  constructor(id: string, email: string, password: string) {
    this.id = id;
    this.email = email;
    this.password = password;
  }

  addUsuario(useres: Users):void {
    this.useres.push(useres)
  }

  showUseres():void{
    for(const user of this.useres )
    console.log(user)
  }

}

export class Users {
  constructor(
  public readonly id: number,
  public readonly email: string,
  public readonly password: string,
){}
}
;
const Tabble = new tabbleUser("ID" ,"Email", "Senha");
const user1 = new Users(1, "eu@gmail.com",  "senha")
const user2 = new Users(1, "eu@gmail.com",  "senha")
const user3 = new Users(1, "eu@gmail.com",  "senha")
Tabble.addUsuario(user1)
Tabble.addUsuario(user2)
Tabble.addUsuario(user3)
console.log(Tabble)
Tabble.showUseres();
