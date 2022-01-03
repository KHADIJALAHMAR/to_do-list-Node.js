

const http = require('http');
const fs = require('fs');
let ejs = require('ejs');

const server =http.createServer((req, res) =>{
    console.log(req.url , req.method) ;

    // set header content  type
    res.setHeader('Content-Type' , 'text/html');

    let path ='./views/';
    switch (req.url) {
        case '/':
            path += 'index.html';   
            console.log('index.html');     
            break;
            case '/about':
                path += 'about.html';   
                 console.log('about.html');  

                break;
    
    }
    // send an html file
fs.readFile(path , (err, data)=>{
    if(err){
        console.log(err);
        res.end();
    }else{
        res.write(data);
        res.end();
    }
} 
)

});
server.listen(3000, 'localhost' ,()=>{
    console.log('hiya hadik ');
});
