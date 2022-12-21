const express = require('express');
const app = express(); 
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Operation4589',
    database: 'tasks12'
  });
  
  connection.connect((err) => {
    if (!err) { 
      console.log("SUCCESS");
    }
  }); 

  app.get('/task', (req, res) => {
    connection.query('SELECT * FROM employee12;', 
    (err, data) => {
      if (err) return res.status(500);
      res.json(data);
    })
  });

  app.get('/task/:id',(req, res)=> {
    connection.query(`SELECT FROM employee12  WHERE id = ${req.params.id};`,
    (err, data) => {
      if (err) return res.status(500);
      res.json(data);
    })
  }); 

app.listen(3000, () =>
console.log('App listening at port 3000')
);