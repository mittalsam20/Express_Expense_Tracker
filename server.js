//Packages
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const cookieParser = require('cookie-parser');

//Intialization
const app = express();

// Server Middlewares
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//Importing Routes
const Port = process.env.PORT || 5000;
const trApi = require("./routes/crdb");

//DB Connection
dotenv.config();
mongoose.connect(process.env.DATABASE_ACCESS, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => { console.log("Database connected..!!!") })
    .catch((e) => { console.log(e); });


//Calling Of All Routes
app.use("/app", trApi);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    })
}

app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Page Not Found"
    })
})

//Server Listening At This Port
app.listen(Port, () => { console.log(`Server has started listening on Port ${Port}`) })