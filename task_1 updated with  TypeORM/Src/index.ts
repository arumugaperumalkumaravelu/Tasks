import { ApolloServer } from "apollo-server";
import { AppDataSource } from "./data-source";

import { typeDefs } from "./Schema/type-defs";
import { resolvers } from "./Schema/resolvers";



AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized, DB CONNECTED !")
    })
    .catch((err) => {
        console.log("Error during Data Source initialization", err)
    })


const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({url}) => {
    console.log(`Server Successfully Running in ${url} :`);
});