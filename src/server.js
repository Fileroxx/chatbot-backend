const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const cors = require('cors')
const http = require('http')
const serverHttp = http.createServer(app)


app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))


require('./controllers/authController')(app);



serverHttp.listen(4000, () => console.log('Server is running on port 4000'));