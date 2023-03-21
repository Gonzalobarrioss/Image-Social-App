import express from "express";
import morgan from "morgan";
import multer from "multer";
import router from "../routes/index.js";
import errorHandler from "errorhandler";

const app = express();

// headers
app.use((_, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// middlewares
app.use(morgan("dev"));
app.use(multer({ dest: "../public/uploads" }).single("image"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// routes
app.use(router);

// static files
app.use("/public", express.static("../public"));

// errorhandlers
if ("development" === app.get("env")) {
  app.use(errorHandler);
}

export default app;
