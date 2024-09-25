
const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');
const { Error } = require('mongoose');

//@desc Get all contacts
//route GET /api/contacts
//@access pic
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts).res.send(req.body);

});

//@desc Create new contacts
//route POST /api/contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
    console.log('Contact Details:' , req.body);

    //err Handling.
    //Destructure all the data.
    const { name, email, phone } = req.body
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error('All fields are mantatori !')
    }

    const contact = await Contact.create(req.body);
    res.status(201).json(contact);
});

//@desc Get contact
//route GET /api/contacts/:id
//@access public
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error('contact not found');
    }
    res.status(200).json(contact);
});

//@desc update contacts
//route PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error('contact not found');
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true}
    );
    res.status(200).json(updatedContact);
});

//@desc Delete contacts
//route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error('contact not found');
    }

    await contact.deleteOne()

    res.status(200).json(contact);
});

module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
}