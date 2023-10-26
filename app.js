const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
var https = require("https");
var http = require("http");
var fs = require("fs");

const PORT = process.env.PORT || 4000;
const errorHandler = require("./middlewares/errorHandlers");
const retensisRoutes = require("./routes/retensisRoutes");

// SSLCertificateFile / etc / apache2 / ssl / appv.cloud2.crt;
// SSLCertificateKeyFile / etc / apache2 / ssl / appv.cloud2.key;
// SSLCertificateChainFile / etc / apache2 / ssl / appv.cloud2.ca;

var options = {
  key: fs.readFileSync("/etc/apache2/ssl/appv.cloud2.key"),
  cert: fs.readFileSync("/etc/apache2/ssl/appv.cloud2.crt"),
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//routes
app.use("/retensis", retensisRoutes);

app.use(errorHandler);
https.createServer(options, app).listen(4000);
