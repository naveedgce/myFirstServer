const http = require("http");
const port = 8081;
const toDoList = ["Complete Node Byte", "Play Cricket"];
http
  .createServer((req, res) => {
    const { url, method } = req;

    if (url === "/todos") {
      if (method === "GET") {
        res.writeHead(200);
        res.write(toDoList.toString());
      } 
      else if (method === "POST") {
        let body = "";
        Req
          .on("error", (err) => console.error(err);)
          .on("data", (chunk) => body += chunk;)
          .on("end", () => body = JSON.parse(body);console.log("data: ", body););
      } else {
        res.writeHead(501);
      }
    } else {res.writeHead(404);}

       res.end();
  })

  .listen(port, () => {
    console.log(`Nodejs server started on port ${port}`);
  });

