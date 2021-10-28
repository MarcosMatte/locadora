// carregou a lib do express
const express = require('express')
const Customer = require('./customers')

// carregou a lib do express
const customer = require('./customers')

// importar as rotas
const routes = require('./routes')

// instanciou o servidor
const app = express()

app.use(express.json())
app.use('/',routes)

//criou a constante do porta do servidor
const port = 3000

//listen ouvir/escutar uma porta 
app.listen(port, () => {
  //const customer = new Customer(1,"Marcos","99554399049","06-08-1982")
  //console.log('Valor de customer:',customer)
  console.log(`Example app listening at http://localhost:${port}`)
})