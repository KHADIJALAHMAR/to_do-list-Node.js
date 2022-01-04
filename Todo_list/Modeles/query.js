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





let deleteProject = (id) => {
    database.connection.query(`DELETE FROM projects WHERE id_project = ${id}`, function(err, res) {
        if(err) throw err;
    });
}


let addProject = (infos) => {
    database.connection.query("INSERT INTO projects SET ?", infos, (err, res) => {
        if(err) throw err;
        else{
            console.log('Data stored');
        }
    })
}
module.exports = getProjects ;
module.exports = deleteProject ;
module.exports = addProject ;