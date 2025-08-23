const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  multipleStatements: true,
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Connection has been created");

  const createQuery = `CREATE TABLE IF NOT EXISTS Students(
  id int AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(20),
  email VARCHAR(50) unique,
  age int
  );`;

  connection.execute(createQuery, (err) => {
    if (err) {
      console.log(err);
      connection.end();
      return;
    }
    console.log("Table is created");
  });
});

module.exports = connection;
