const express = require('express')
const Customer = require('./customers')
const routes = express.Router()

const customers = []

//cria-se a rota com o endereço
routes.get('/helloworld', function(req, res) {
    res.send('Hello World!')
  })
  
//cadastra um cliente  
routes.post('/customers', (req,res) => {
  const { name, cpf, birthday} = req.body
  const id = customers.length + 1
  const customer = new Customer(id, name, cpf, birthday)
  customers.push(customer)
  return res.json(customer)
})

//busca um cliente
routes.get('/customers', (req,res) => {
  return res.json(customers)
})

module.exports = routes  