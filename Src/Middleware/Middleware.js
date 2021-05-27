const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
class MiddlewareServer {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use((req, res, next) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, contentType,Content-Type, Accept",
        "application/json",
        "text/json"
      );
      res.header("Access-Control-Allow-Methods", "GET,DELETE,OPTIONS,POST,PUT");
      next();
    });
  }
  routes() {
  
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log("EL PUERTO ESTA CORRIENDO ", this.port);
    });
  }
}
module.exports = MiddlewareServer;
