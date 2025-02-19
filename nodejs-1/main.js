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
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  // console.log(parsedUrl)
  const quantity = parsedUrl.query.quantity;

  if (req.method == "GET") {
    if (parsedUrl.pathname == "/veg/gobi") {
      res.writeHead(200, "ok", { "content-type": "application/json" });
      res.write(
        JSON.stringify({
          item: "gobi",
          quantity: quantity,
          price: "2 x 150",
          gst: "5%",
          totalPrice: "price + gst",
          message: "thankyou for order",
        })
      );
      res.end();
    } 
    else if (parsedUrl.pathname == "/nonveg/chicken") {
      res.writeHead(200, "ok", { "content-type": "application/json" });
      res.write(
        JSON.stringify({
          item: "chicken",
          quantity: quantity,
          price: "2 x 150",
          gst: "5%",
          totalPrice: "price + gst",
          message: "thankyou for order",
        })
      );
      res.end();
    } else {
      res.writeHead(400, "not found", { "content-type": "application/json" });
      res.write(JSON.stringify({ message: " use endpoint as a /veg/gobi , /nogveg/chicken ,/veg/gobi?quantity=2, /nonveg/chicken?quantity=2" }));
      res.end();
    }
  } else if (req.method == "POST") {
    res.end();
  } else if (req.method == "PUT") {
    res.end();
  } else if (req.method == "DELETE") {
    res.end();
  } else {
    res.end();
  }
});
server.listen("3101", () => {
  console.log("server is running");
});
