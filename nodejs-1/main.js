// const obj = require("./module1")
// console.log("iam main module")
// console.log(obj.fun1())
// console.log(obj.x)
// console.log("whats new")






// const server = http.createServer((req, res)=>{
//     res.write("welcome to my new project")
//     res.end("")
// });
// server.listen("3102",()=>{
//     console.log("server is running")
// })



// movie 19-02-25----------------------------------------------------
const http =require("http");
const url = require("url");


const server = http.createServer((req, res) => {
  
const parsedUrl =  url.parse(req.url, true);
// console.log(parsedUrl)
const ticket = parsedUrl.query.ticket

 if(req.method == "GET"){
  if(parsedUrl.pathname == "/rebel"){
    res.writeHead(200,"ok",{"content-type" : "application/json"})
    res.write(JSON.stringify({"movie title" : "rebel",screen : "one",tickets:ticket}))
    res.end()
  }
  else if(parsedUrl.pathname == "/chaava"){
    res.writeHead(200,"ok",{"content-type" : "application/json"})
    res.write(JSON.stringify({"movie title" : "chaava",screen : "two",tickets:ticket}))
    res.end()
  }
  else if(parsedUrl.pathname == "/billa"){
    res.writeHead(200,"ok",{"content-type" : "application/json"})
    res.write(JSON.stringify({"movie title" : "billa",screen : "three",tickets:ticket}))
    res.end()
  }
  else{
    res.writeHead(400,"not found",{"content-type" : "application/json"})
    res.write(JSON.stringify({message : "movie not showing now"}))
    res.end()
  }
 }
 else if(req.method == "POST"){
  res.end()
 }
 else if(req.method == "PUT"){
  res.end()
 }
 else if(req.method == "DELETE"){
  res.end()
 }
 else{
  res.end()
 }
  
});
server.listen("3101", () => {
  console.log("server is running");
});

