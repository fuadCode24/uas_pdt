const express = require('express');
const mongoose = require('mongoose');
const redis = require('redis');
const mysql = require('mysql2/promise');

const app = express();
const port = 3000;

// MongoDB connection
mongoose.connect('mongodb://mongodb:27017/mydb', { useNewUrlParser: true, useUnifiedTopology: true });

// Redis connection
const redisClient = redis.createClient({ host: 'redis', port: 6379 });

// MySQL connection
let mysqlConnection;
mysql.createConnection({
  host: 'mysql-master',
  user: 'root',
  password: 'example',
  database: 'mydb'
}).then(connection => {
  mysqlConnection = connection;
});

app.get('/', (req, res) => {
  res.send('Hello from Node.js!');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
