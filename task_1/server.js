const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'simpletodo',
  password: 'peru123',
  port: 5432,
});

const typeDefs = gql`
  type Query {
    getTodos: [Todo]
  }

  type Mutation {
    createTodo(todoInput: TodoInput): Todo
  }

  input TodoInput {
    todoMsg: String
    status: Boolean
    description: String
    alertTime: String
  }

  type Todo {
    id: ID
    todoMsg: String
    status: Boolean
    description: String
    alertTime: String
  }
`;

const resolvers = {
  Query: {
    getTodos: async () => {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM todo');
      client.release();
      return result.rows;
    },
  },
  Mutation: {
    createTodo: async (_, { todoInput }) => {
      const client = await pool.connect();
      const { todoMsg, status, description, alertTime } = todoInput;
      const queryText = 'INSERT INTO todo (todoMsg, status, description, alertTime) VALUES ($1, $2, $3, $4) RETURNING *';
      const values = [todoMsg, status, description, alertTime];

      try {
        const result = await client.query(queryText, values);
        client.release();
        return result.rows[0];
      } catch (error) {
        client.release();
        throw error;
      }
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
  await server.start();

  const app = express();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

startServer().catch((error) => {
  console.error('Error starting server:', error);
});

// const express = require('express');
// const { ApolloServer, gql } = require('apollo-server-express');
// const { Pool } = require('pg');

// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'simpletodo',
//   password: 'peru123',
//   port: 5432,
// });

// const typeDefs = gql`
//   type Query {
//     getTodos: [Todo]
//   }

//   type Todo {
//     id: ID
//     todoMsg: String
//     status: Boolean
//     description: String
//     alertTime: String
//   }
// `;

// const resolvers = {
//   Query: {
//     getTodos: async () => {
//       const client = await pool.connect();
//       const result = await client.query('SELECT * FROM todo');
//       client.release();
//       return result.rows;
//     },
//   },
// };

// const server = new ApolloServer({ typeDefs, resolvers });

// async function startServer() {
//   await server.start();

//   const app = express();
//   server.applyMiddleware({ app });

//   app.listen({ port: 4000 }, () =>
//     console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
//   );
// }

// startServer().catch((error) => {
//   console.error('Error starting server:', error);
// });


// const express = require('express');
// const { ApolloServer, gql } = require('apollo-server-express');
// const { Pool } = require('pg');

// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'simpletodo',
//   password: 'peru123',
//   port: 5432, // PostgreSQL default port
// });

// const typeDefs = gql`
//   type Query {
//     getUsers: [User]
//   }

//   type User {
//     id: ID
//     name: String
//     email: String
//   }
// `;

// const resolvers = {
//   Query: {
//     getUsers: async () => {
//       const client = await pool.connect();
//       const result = await client.query('SELECT * FROM usersList');
//       client.release();
//       return result.rows;
//     },
//   },
// };

// const server = new ApolloServer({ typeDefs, resolvers });

// async function startServer() {
//   await server.start();

//   const app = express();
//   server.applyMiddleware({ app });

//   app.listen({ port: 4000 }, () =>
//     console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
//   );
// }

// startServer().catch((error) => {
//   console.error('Error starting server:', error);
// });