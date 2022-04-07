const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://seuremedio:vse3CZx3tzoSwwir@seuremedio.pk77l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
mongoose.Promise = global.Promise;


module.exports = mongoose;