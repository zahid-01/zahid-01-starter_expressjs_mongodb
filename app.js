const express = require("express");
const morgan = require("morgan");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");

const { sendErrorRes } = require("./Controllers/errorController");

app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "Public")));
app.use(express.urlencoded({ extended: true }));

app.use(sendErrorRes);

module.exports = app;
