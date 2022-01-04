

const fs = require('fs');
const ejs = require('ejs');
const getProjects =require('../Models/query');
const pt = require('path');

const server =http.createServer((req, res) =>{
    // console.log(req.url , req.method) ;
    // set header content  type
    res.setHeader('Content-Type' , 'text/html');

    let path ='/';
    switch (req.url) {
        case '/':
            path += 'index';   
            getProjects((projects) => {
                res.writeHead(200 , {'Content-Type' : 'text/html'});
                let ejsFile = fs.readFileSync(pt.join(pt.dirname(__dirname), 'views', `${path}.ejs`) , 'utf-8');
                let ejsContent = ejs.render(ejsFile, {projects: projects})
                res.end(ejsContent);
            });
            break;
            
                if(path.pathname === '/deleteProject') {
                    path  = 'index';
                    projects.deleteProject(query.id_project);
                    projects.getProjects((projects) => {
                        res.writeHead(200 , {'Content-Type' : 'text/html'});
                        let ejsFile = fs.readFileSync(pt.join(__dirname, 'views', `${page}.ejs`) , 'utf-8');
                        let ejsContent = ejs.render(ejsFile, {projects: projects});
                        res.end(ejsContent);
                    });

                break;
            case '/about':
                path  += 'about.ejs';
                res.statusCode = 200;
                break;
            case '/contact':
                path += 'contact.ejs';
                res.statusCode = 200;
                break;
            // Redirect page
            case '/about-us':
                res.statusCode = 301;
                res.setHeader('Location', '/about');
                res.end();
                break;
            default:
                path = '404.ejs';
                res.statusCode = 404;
                break;
        }
        
    });




server.listen(3000, 'localhost' ,()=>{
    console.log('hiya hadik ');
});