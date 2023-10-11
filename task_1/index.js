const { ApolloServer } = require("apollo-server");
const  { typeDefs } = require("./Src/Schema/type-defs");
const { resolvers } = require("./Src/Schema/resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({url}) => {
    console.log(`Server Successfully Running in ${url} :`);
});