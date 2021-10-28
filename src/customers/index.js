

class Customer {
    //construtor da classe que permite iniciar passando atributos para uso interno
    constructor(id,name,cpf,birthday) {
      this.id = id 
      this.name = name 
      this.cpf = cpf 
      this.birthday = birthday
      this.active = true
      this.created_at = new Date()
    }
       
  }
  
  module.exports = Customer