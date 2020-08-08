const express = require("express");
const cors = require("cors")
const mongodb = require('./Config')
const { graphqlHTTP } = require('express-graphql');
const schema = require('./Schema/schema.js')
const graphQlResolvers = require('./Resolvers')

const app = express()
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

mongodb.connection.once("open",()=>{
  console.log('mongodb connected..')
}).then(con => {
  console.log("connected")
}).catch(error=>{
  console.log("error",error)
})


app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: graphQlResolvers,
    graphiql: true
  })
);
app.listen(4000,()=>console.log('server is running on 4000'))
