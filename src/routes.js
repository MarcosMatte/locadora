const express = require('express')
const Customer = require('./customers')
const routes = express.Router()
const httpStatus = require('http-status')

const customers = []

const RESPONSE_NOT_FOUND = {
  "Message" : "Customer not found!"
} 

//cria-se a rota com o endereço
routes.get('/helloworld', function(req, res) {
    res.status(httpStatus.OK).send('Hello World!')
  })
  
//cadastra um cliente  
routes.post('/customers', (req,res) => {
  const { name, cpf, birthday } = req.body
  const id = customers.length + 1
  const customer = new Customer(id, name, cpf, birthday)
  customers.push(customer)
  return res.status(httpStatus.CREATED).json(customer)
})

//busca um cliente
routes.get('/customers', (req,res) => {
  return res.status(httpStatus.OK).json(customers)
})

//busca apenas um cliente pelo id
routes.get('/customers/:id', (req,res) => {
  // x = customer(objeto)
  const id = req.params.id
  // =   atribuicao
  // ==  compara valores
  // === compara valores considerando valore e tipo
  // const response = customers.find(x => x.id == id )  
  // return res.status(httpStatus.OK).json(response)
  
  const response = customers.find(x => x.id == id )  
  if (!response) {
    return res.status(httpStatus.NOT_FOUND).json(RESPONSE_NOT_FOUND)
  }

  return res.status(httpStatus.OK).json(response)
})

routes.put('/customers/:id', (req,res) => {
  // obter o parametro 
  const id = req.params.id
  // obter os dados que eu quero atualizar
  const {name, cpf, birthday} = req.body
  // identificar dentro do array o id a ser atualizado
  const idx = customers.findIndex(x => x.id == id)
  
  if (idx < 0) {
    return res.status(httpStatus.NOT_FOUND).json(RESPONSE_NOT_FOUND)  
  }

  const updatedCustomer = customers[idx]
  
  if (name) {
    updatedCustomer.name = name
  }

  if (cpf) {
    updatedCustomer.cpf = cpf
  }
  
  if (birthday) {
    updatedCustomer.birthday = birthday
  }
  
  
  updatedCustomer.updated_at = new Date()

  customers[idx] = updatedCustomer

  return res.status(httpStatus.OK).json(customers.find(x => x.id == id))
})

routes.delete('/customers/:id', (req,res) => {
  const id = req.params.id
  const idx = customers.findIndex(x => x.id == id)

  if (idx < 0) {
    return res.status(httpStatus.NOT_FOUND).json(RESPONSE_NOT_FOUND)  
  }

  customers.splice(idx,1)

  return res.status(httpStatus.NO_CONTENT).send()  

})

module.exports = routes  