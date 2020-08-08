const express = require("express");
const cors = require("cors")
const mongodb = require('./Config')
const { graphqlHTTP } = require('express-graphql');
const schema = require('./Schema/schema.js')

const app = express()
app.use(cors())
app.use(express().parseJson())
mongodb.connection.once("open",()=>{
  console.log('mongodb connected..')
})


app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    // rootValue: graphQlResolvers,
    graphiql: true
  })
);
app.listen(4000,()=>console.log('server is running on 4000'))
