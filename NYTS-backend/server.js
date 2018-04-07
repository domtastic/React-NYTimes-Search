const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const routes = require("./routes"); dont have routes yet
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/NYTSArticles").then(
    () => {
        console.log("Mongo connection open");
        // Start the API server
        app.listen(port, err => {
            if (err) {
                console.log("Something went wrong in Mongo: ", err);
            } else {
                console.log(`NYTS App listening on port: ${PORT}`);
            }
        });
    },
    err => {
        console.log("something went wrong: ", err);
    }
);
