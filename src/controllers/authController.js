const express = require('express');

const User = require('../models/User');

const router = express.Router();




router.post('/userChatBot', async (req, res) => {
    try {
        const user = await User.create(req.body);
        
        return res.send({ user })
        
    } catch (err) {
        return res.status(400).send({ error: 'Authentication Failed'})
    }
})

router.get('/userChatBot', async (req, res) => {
    
    try {
        const users = await User.find()
        console.log(users)
        return res.send({users})
       
    } catch (err) {
        return res.status(500).send({ error: 'User Search Failed'})

    }
 
 })

module.exports = app => app.use('/auth', router)