var express = require('express');
var app = express();
const port = process.env.PORT || 8000
const mongoDB = require('./db/connection');
mongoDB();

app.use('/', require('./routes'));

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}. Hello World!`)
});

