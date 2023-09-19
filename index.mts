// const MongoDB = require("./config/connectdb");
// MongoDB.connect();
import server from "bunrest";
const app = server();


app.get("/", (req: any, res: any) => {
  res.send("Hello World");
  console.log("Hello World");
});


app.get("/users", (req: any, res: any) => {
  res.send("Hello World user");
});

app.listen(3000, () => {
  console.log("App is listening on port 3000");
});