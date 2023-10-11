const { Pool } =  require('pg');
const _ = require("lodash");

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'simpletodo',
    password: 'peru123',
    port: 5432,
  });

const resolvers =  {

        // For QUERY TYPE 
        Query: {
            getTodos: async () => {
                return await getTodosQuery();
            },

            getTodo: async (parent, args) => {
              const todo_id =  args.todo_id; 
              const result = await getTodosQuery();
              console.log('result',result)
              const todo =  _.find(result, { todo_id });
              return  todo;
            },

            getUserList: async () => {
              return await getUserListQuery();
            },

            getUser: async (parent, args) => {
                const user_id =  args.user_id; 
                const result = await getUserListQuery();
                const user =  _.find(result, { user_id });
                return  user;
            },
        },
        
        // For USER TYPE 
        User: {
            todos: async (user) => {
              const client = await pool.connect();
              const result = await client.query('SELECT * FROM todo WHERE user_id = $1', [user.user_id]);
              client.release();
              return result.rows;
            }
          }
};

async function getTodosQuery() {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM todo');
    client.release();
    return result.rows;
  }


async function getUserListQuery() {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM userlist');
    client.release();
    return result.rows;
 }
 
module.exports = { resolvers };


