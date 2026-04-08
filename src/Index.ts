import { User } from "./User"
import { UserTable } from "./UserTable"


const table= new UserTable()
const user1= new User("1","eu@gamil.com","antonio","123senha")
const user2= new User("2","@gamil.com","anio","12345nha")
const user3= new User("3","@gamil.co2","nto","123456ha")

table.addUser(user1,user2,user3)
for(const user of table.getUsers()){
  console.log(user.id,user.email,user.nome,user.senha)
}

const encontrado = table.getUserByEmail("eu@gamil.com");

if (encontrado) {
  console.log("Usuário encontrado:");
  console.log(encontrado.id, encontrado.email, encontrado.nome, encontrado.senha);
} else {
  console.log("Usuário não encontrado");
}


