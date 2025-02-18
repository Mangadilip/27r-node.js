// const obj = require("./module1")
// console.log("iam main module")
// console.log(obj.fun1())
// console.log(obj.x)
// console.log("whats new")

const http = require("http")


const server = http.createServer((req, res)=>{
    res.write("welcome to my new project")
    res.end("")
});
server.listen("3102",()=>{
    console.log("server is running")
})
