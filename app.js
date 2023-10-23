const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

const PORT = process.env.PORT || 4000;
const errorHandler = require("./middlewares/errorHandlers");
const retensisRoutes = require("./routes/retensisRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


//routes
app.use("/retensis", retensisRoutes);


app.use(errorHandler);

app.listen(PORT, () => {
    console.log("listening on port ", PORT);
});
