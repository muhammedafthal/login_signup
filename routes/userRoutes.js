const express = require('express');
const { 
    registerUser,
    loginUser,
    currentUser } = require('../controllers/userController');

const app = express.Router();


app.post('/register', registerUser);

app.post('/login', loginUser);

app.get('/current', currentUser);

module.exports = app;

