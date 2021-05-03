const express = require("express");
const server = express();
const routes = require("./routes");
const path = require("path");

server.set("view engine", "ejs");

//habilitar arquivos estáticos
server.use(express.static("public"));

//mudar localização pasta views
server.set("views", path.join(__dirname, "views"));

//usar o req.body
server.use(express.urlencoded());

//routes
server.use(routes);

server.listen(3000, () => console.log("Server is running on port 3000"));