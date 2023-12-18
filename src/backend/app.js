const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
//var bodyParser = require('body-parser');

const app = express();
app.use(express.json()); // support json encoded bodies

app.use( (req,res,next) => {
    console.log("middleware");
    next()
})

/** mongo db connection */
mongoose
    .connect(process.env.MONGODB_URL)
    .then((connection) => {
        console.log("MongoDB connected successfully!");
    })
    .catch((err) => {
        console.error(`Error connecting to MongoDB: ${err}`);
    });

/** Routes */
const userRouter = require("../backend/routers/user.router");
app.use("/api/users", userRouter);

let port = process.env.PORT || 3001;
app.listen(process.env.PORT, () => console.log(`Listening on ${port}`))
