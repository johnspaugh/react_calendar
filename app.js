

const mysql = require('mysql'); // Bring in the MySQL Node.js driver/module

// Create a connection to MySQL using a configuration
// object (JSON)
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});

connection.connect(function(err) {
    // If there was an issue connecting to MySQL
    // Kill the entire server...
    if(err) throw err;

    console.log('Connected to MySQL...');

    createDatabase();
});

function createDatabase() {
  fetch('C:\Users\Home\Documents\My_proj\creation_calender_tracker_for_js/create_DataBase.txt')
  .then(response => response.text())
  .then((data) => {
    console.log(data);
    alert(data);
  });
  // const sql = 'CREATE DATABASE IF NOT EXISTS restaurant;';

  // connection.query(sql, function(err, results, fields) {
  //     if(err) throw err;

  //     console.log('Database created (if not exist)...');

  //     loadDatabase();
  // });
}

/**
 * Write the express code required to
 * start building up our API.
 *
 * Once you have the boilerplate code done,
 * create 1 express GET endpoint and have the
 * route be /users.
 */

// Import the express module...
const express = require('express');
// Create our express application object
// call it 'app' (not a required name...just what people name it...)
const app = express();
// Import Joi for JSON body validation.
const Joi = require('joi');
const cors = require('cors');
const url = require('url');
/*
   remember to set proxy correctly in package.json on client project, usually frontend name something
    In order to be able to to connect frontend to backend, this case front end is called react_calender_frontend
  "proxy":"http://localhost:3001",
*/

// Configure the port for the Node.js express server
// to listen on...
const port = process.env.PORT || 3001;/////////////////////////////////////////////////////;
const multer = require('multer');
const storage = multer.diskStorage({
   destination: (req, file, cb) => {
       cb(null, 'images/');
   },
   filename: (req, file, cb) => {
       cb(null, Date.now().toString() + "." + file.mimetype.split('/')[1]);
   }
});
const upload = multer({
    storage: storage
});

app.use(cors());

// Ensure JSON will be parsed for the
// req body. To do this, we will use some
// middleware that is built into express
app.use(express.json());

app.post('/monthcount', (req, res) => {
  const schema = {
      username: Joi.string().required(),
      password: Joi.string().required()
  };

  const {error} = Joi.validate(req.body, schema);

  if(error) {
      const result = {
          message: error.message,
          code: res.statusCode = 400
      }

      return res.json(result);
  }

  const sql = `SELECT user_id, fname, lname, username FROM users WHERE username='${req.body.username}' AND password='${req.body.password}'`;

  connection.query(sql, (error, rows, fields) => {
      if(error) return res.json(
         {
             message: err.message,
             code: res.statusCode = 500
         }
     );

     if(rows.length === 0) {
         return res.json({
             message: 'Invalid username & password.',
             code: res.statusCode = 400
         })
     }

     return res.json({
         message: 'OK',
         code: res.statusCode = 200,
         user: rows[0]
     });
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
