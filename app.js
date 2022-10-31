const express = require("express");
const UserAuth = require("./routes/UserAuth");
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;



// connect to db
const db = require('./db');
//const passport = require("./passportConfig");
db.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {
    res.send('Hello')
})

app.use('/', UserAuth )





app.listen(PORT, () => {
console.log(`Listening on port ${PORT}`);
});