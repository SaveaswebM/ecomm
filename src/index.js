const express = require("express");
const { PrismaClient } = require("@prisma/client"); // Import your Prisma client
const prisma = new PrismaClient();
const cors = require("cors");
const app = express();

const port = 3000;

app.use(express.json()); // For parsing application/json

app.use(cors());
+-app.post("/", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const res1 = await prisma.user.create({
    data: {
      name,
      email,
      password
    }
  });
  console.log(res1);
  const add = await prisma.user.findMany();
  res.send(add);
});

app.get("/login", (req, res) => {
  console.log("login");
});
app.listen(port, () => {
  console.log(`server lising on port:${port} `);
});
