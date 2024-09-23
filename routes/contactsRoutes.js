
//Here we are routing seperate routes.
//This routes is controlling on another page for easy to read and more flexibilty.

const express = require('express');
const app = express.Router();
const { getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact } = require('../controllers/contactController')

app.route('/').get(getContacts);

app.route('/').post(createContact);

app.route('/:id').get(getContact);

app.route('/:id').put(updateContact);

app.route('/:id').delete(deleteContact);

module.exports = app;