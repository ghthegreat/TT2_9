import mysql from 'mysql2';
import config from '../config.js';

async function getDb() {
  const db = mysql.createConnection(config.db);
  const testConn = db.connect((err) => {
    if (err) console.log(err.message);
    else console.log('database connected');
  });
  return db;
}

export default getDb;
