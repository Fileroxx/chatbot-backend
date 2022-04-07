const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const cors = require('cors')


app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))


require('./controllers/authController')(app);


app.listen(3000, function() {
    console.log('server running on port 3000')
} )