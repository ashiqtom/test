import { app, server } from "./lib/socket.js";

const PORT = 5001;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

server.listen(PORT, () => {
  console.log("server is running on PORT:" + PORT);
});
