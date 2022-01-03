const Connection = require("../Database/connexion");
let database = new Connection();

let getProjects = (callback) => {
    
    database.connection.query('SELECT * FROM projects', function(err, res) {
      if(err) throw err;
      let projects = [];
      res.forEach(row => {
          projects.push( {
              id_project: row.id_project,
              title: row.name_project,
              description: row.descreption
          }); 
      });
      callback(projects);
      console.log(projects)
  });
  
}