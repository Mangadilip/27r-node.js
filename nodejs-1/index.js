// const http = require("http")
// const server = http.createServer((req,res)=>{
//     if(req.method == "POST"){
//         let body =""
//         req.on("data",(chunk)=>{
//             body +=chunk.toString();
//             console.log(body);
//         });
//         req.on("error",(err)=>{
//             console.log(err);
//             res.write(err);
//         });
//         req.on("end",()=>{
//             res.end("data received");
//         })
//     }
// });
// server.listen("3102", () => {
//     console.log("server is running");
//   });








const http = require("http")
const fs = require("fs")
const server = http.createServer((req,res)=>{
    if(req.method == "GET"){
        
        // fs.readFile("./sample.txt","utf8",(err,data)=>{
        //     if(err){
        //         console.log(err)
        //         res.write(err);
        //         res.end()
        //     }else{
        //         console.log(data);
        //         res.write(data)
        //         res.end()
        //     }
        // })
        // fs.readFile("./info.txt","utf8",(err,data)=>{
        //     if(err){
        //         console.log(err)
        //         res.write(err);
        //         res.end()
        //     }else{
        //         console.log(data);
        //         res.write(data)
        //         res.end()
        //     }
        // })

// GET-------------------------------------------
        // let ipData = "27r-10kcoders"
        // fs.writeFile("./info.txt",ipData,(err)=>{
        //     if(err){
        //         res.end(err)
        //     }else{
        //         res.write("data inserted");
        //         res.end()
        //     }
        // })


        // fs.appendFile("./info.txt",ipData,(err)=>{
        //     if(err){
        //         Console.log(err);
        //         res.end(err)
        //     }else{
        //         res.end("data appended")
        //     }
        // })


        let ipData = "27r-10kcoders"
        fs.writeFile("./info.txt",ipData,(err)=>{
            if(err){
                res.end(err)
            }else{
                res.write("data inserted");
                console.log("something is dom ")
                fs.appendFile("./info.txt",ipData,(err)=>{
                    if(err){
                        Console.log(err);
                        res.end(err)
                    }else{
                        res.end("data appended")
                    }
                })
                res.end()
            }
        })


        


        // let ipData = " ";
        // req.on("data",(chunk)=>{
        //     ipData += chunk;
        // });
        // req.on("end",()=>{
        //     fs.writeFile("./info.txt",ipData,(err)=>{
        //         if(err){
        //             res.write("err")
        //             res.end()
        //         }else{
        //             res.write("data inserted")
        //             res.end()
        //         }
        //     });
        // })
                   
        
        
    }
    
});
server.listen("3102", () => {
    console.log("server is running");
  });


