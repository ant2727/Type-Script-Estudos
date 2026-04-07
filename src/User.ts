export class User{
  #id: string;
  #email: string;
  #nome: string;
  #senha: string;

  constructor(id:string, email: string, nome:string, senha:string){
    this.#id = id;
    this.#email = email;
    this.#nome = nome;
    this.#senha = senha;
  }

  get id(){
    return this.#id
  }
   get email(){
    return this.#email
  }
   get nome(){
    return this.#nome
  }
   get senha(){
    return this.#senha
  }

}
