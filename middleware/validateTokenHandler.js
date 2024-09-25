const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');



const validateToken = asyncHandler(async(req, res, next) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization
    if(authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ");
    }
});