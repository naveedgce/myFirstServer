const http = require("http")
const port = 8081
//http.createServer((request,response)=>{
  // response.writeHead(200, {"content-Type": "text/html"});
   // response.write("<h1> Hellow, this is my first server</h1>");
    //response.end();
//})
//.listen(port, ()=>{
//    console.log(`Node js server started on port ${port}`);
//}); 
const toDoList = ["complete Node Byte", "Paly Cricket"];
http.createServer((request,response)=>{
    const {method, url} = request;
    if(url=="/todos"){
        if(method=="GET"){
            response.writeHead(200);
            response.write(toDolist.tostring());
        } else if(method=="POST"){
            let body="";
            request
            .on("error", (err)=>{console.error(err);})
            .on("data", (chunk)=>{body+=chunk;})
            .on("end", ()=>{body=JSON.parse(body);})
            console.log("data:", body)}
        
        } else{response.writeHead(501);}
        
    }
);
