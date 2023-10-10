const { Pool } = require('pg');


const pool = new Pool({
  user: 'postgres',         
  host: 'localhost',         
  database: 'simpletodo',    
  password: 'peru123',       
  port: 5432,      
});


async function queryDatabase() {
  try {

    const client = await pool.connect();

    const queryText = 'SELECT * FROM todo';
    const result = await client.query(queryText);

    client.release();

    console.log('Query result:', result.rows);

  } catch (error) {
    
    console.error('Error executing query:', error);
  } finally {
    pool.end();
  }
}

// Call the function to query the database
queryDatabase();