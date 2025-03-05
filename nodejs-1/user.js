const express = require("express");
const app = express();

app.use(express.json());

const usernameValidation = (req, res, next) => {
  const inputName = req.body.username;
  const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;

  if (!inputName) {
    return res.status(400).send("Username should not be empty.");
  } 
  if (!usernameRegex.test(inputName)) {
    return res.status(400).send("Username format is invalid. It should be 3-15 characters long and contain only letters, numbers, or underscores.");
  }
  next();
};

const passwordValidation = (req, res, next) => {
  const passwordInput = req.body.password;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%_])[A-Za-z\d@#$%_]{6,15}$/;

  if (!passwordInput) {
    return res.status(400).send("Password should not be empty.");
  }
  if (!passwordRegex.test(passwordInput)) {
    return res.status(400).send("Invalid password format. It must be 6-15 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character (@, #, $, %, _).");
  }
  next();
};

const emaliValidation = (req, res, next)=>{
  const emailInput = req.body.email
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if(!emailInput){
    return res.status(400).send("Requrie email")
  }
  if(!emailRegex.test(emailInput)){
    return res.status(400).send("Invalid email format. Please enter a valid email address.")
  }
  next()
}

app.post("/signup", usernameValidation, passwordValidation,emaliValidation, (req, res) => {
  res.send("Login successful.");
});

app.listen(3100, () => {
  console.log("Server is running at port 3100");
});
