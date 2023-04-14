const express = require('express')
const {ApolloServer} = require('apollo-server-express')
const typeDefs = require('./typeDefs')
const resolvers = require('./resolver')
const mongoose = require('mongoose')



async function startServer() {
    const app = express();
    const apolloServer = new ApolloServer({
         typeDefs,
         resolvers,
    });

    await apolloServer.start()

    apolloServer.applyMiddleware({app: app})


    app.use((req,res) => {
        res.send("Hello from apollo server")
    })

    

    await mongoose.connect('mongodb://localhost:27017/post_db', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });

    console.log('mongoose connected...')

    app.listen(9000, () => console.log("server is running on 9000"))
}
startServer();