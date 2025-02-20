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
  const gst = 0.18

  if (req.method == "GET") {
    if (parsedUrl.pathname == "/menu") {
      res.writeHead(200, "ok", { "content-type": "application/json" });
      res.write(
        JSON.stringify({
          veg: [{ gobi: "150rs", panner: "200rs" }],
          nonveg: [{ chicken: "250rs", fish: "260rs" }],
          message: "requesting you to place the order",
        })
      );
      res.end();
    } else if (parsedUrl.pathname == "/menu/veg") {
      if (parsedUrl.query.item == "panner") {
        price=quantity * 150
        res.writeHead(200, "ok", { "content-type": "application/json" });
        res.write(
          JSON.stringify({
            item: parsedUrl.query.item,
            quantity: quantity,
            price: price,
            gst: price*gst,
            totalPrice: price + gst,
            message: "thankyou for order",
          })
        );
        res.end();
      } else if (parsedUrl.query.item == "gobi") {

        price=quantity * 200
        res.writeHead(200, "ok", { "content-type": "application/json" });
        res.write(
          JSON.stringify({
            item: parsedUrl.query.item,
            quantity: quantity,
            price: price,
            gst: price*gst,
            totalPrice: price + gst,
            message: "thankyou for order",
          })
        );
        res.end();
      }else{
        res.writeHead(400, "not found", { "content-type": "application/json" });
        res.write(JSON.stringify({message : "items not found"}))
        res.end()
      }
    }
    else if (parsedUrl.pathname == "/menu/nonveg") {
      if (parsedUrl.query.item == "chicken") {
        price=quantity*250
        res.writeHead(200, "ok", { "content-type": "application/json" });
        res.write(
          JSON.stringify({
            item: parsedUrl.query.item,
            quantity: quantity,
            price:price,
            gst: price*gst,
            totalPrice: price + gst,
            message: "thankyou for order",
          })
        );
        res.end();
      } else if (parsedUrl.query.item== "fish") {
        price = quantity * 260;
       
        res.writeHead(200, "ok", { "content-type": "application/json" });
        res.write(
          JSON.stringify({
            item: parsedUrl.query.item,
            quantity: quantity,
            price: price,
            gst: price * gst,
            totalPrice: price + gst,
            message: "thankyou for order",
          })
        );
        res.end();
      }else{
        res.writeHead(400, "not found", { "content-type": "application/json" });
        res.write(JSON.stringify({message : "items not found"}))
        res.end()
      }
    }
    else {
      res.writeHead(400, "not found", { "content-type": "application/json" });
      res.write(
        JSON.stringify({
          message:
            " use endpoint ",
        })
      );
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
