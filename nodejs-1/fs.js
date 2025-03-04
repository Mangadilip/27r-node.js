const express = require("express");
const app = express();
const fs = require("fs").promises;
app.use(express.json());

app.get("/data", async (req, res) => {
  try {
    let data = JSON.parse(await fs.readFile("./new.json", "utf8"));
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send({ message: "Error reading data", error: err });
  }
});

app.post("/addcontent", async (req, res) => {
  try {
    let inputData = req.body;
    let existingData = JSON.parse(await fs.readFile("./new.json", "utf8"));
    let isExistingAlready = existingData.find((x, y) => {
      return x.name == inputData.name || x.email == inputData.email;
    });
    console.log(isExistingAlready, "exists");
    if (isExistingAlready) {
      res.status(400).send({ message: "Name or Email already exists" });
    } else {
      existingData.push(inputData);
      let updatedData = existingData;
      await fs.writeFile("./new.json", JSON.stringify(updatedData));
      res
        .status(200)
        .send({
          message: "Data inserted successfully",
          updatedData: updatedData,
        });
    }
  } catch (err) {
    res.status(500).send({ message: "server error", error:err });
  }
});
app.listen(3001, () => {
  console.log("server is runnimg on port 3001");
});
