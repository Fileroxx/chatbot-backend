const mongoose = require('../database')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        lowercase: true,
    },
    address: {
        type: String,
        require: true,
    },
    medicine: {
        type: String,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model('User', UserSchema);


module.exports = User;