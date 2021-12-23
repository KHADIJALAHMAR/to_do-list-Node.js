const http = require('http');
const hostname = 'localhost';
const port = 3000;
const server = http.createServer((req, res) => {
 console.log(req.headers);
 res.statusCode = 200;
 res.end('<html><body><h1> World! FFF</h1></body></html>');
})
server.listen(port, hostname);





// const mysql = require('mysql');
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'todo_list'
// });
// connection.connect((err) => {
//   if (err) throw err;
//   console.log('Connected!');
// });


// connection.query('SELECT * FROM authors', (err,rows) => {
//     if(err) throw err;
  
//     console.log('Data received from Db:');
//     console.log(rows);
    
//   rows.forEach( (row) => {
//     console.log(`${row.name} lives in ${row.city}`);
//   });
//   });

//   const author = { name: 'Craig Buckler', city: 'Exmouth' };
// connection.query('INSERT INTO authors SET ?', author, (err, res) => {
//   if(err) throw err;

//   console.log('Last insert ID:', res.insertId);
// });


// connection.query(
//     'UPDATE authors SET city = ? Where ID = ?',
//     ['Leipzig', 3],
//     (err, result) => {
//       if (err) throw err;
  
//       console.log(`Changed ${result.changedRows} row(s)`);
//     }
//   );
//  let ejs = require('ejs');
// let people = ['geddy', 'neil', 'alex'];
// let html = ejs.render('<%= people.join(", "); %>', {people: people});


