const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require("morgan");
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
//bring in routes
const postRoutes = require('./routes/post');
const dotenv = require('dotenv');
dotenv.config();
// const myMiddleware = (req, res, next) => {
//     console.log('middleware applied!!!');
//     next();
// };

//db
mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true
    })
    .then(() => console.log('DB Connected'));

mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`);
});
//middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(expressValidator());
// app.use(myMiddleware);
app.use('/', postRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`A Nodejs API is listening in port: ${port} `);
});