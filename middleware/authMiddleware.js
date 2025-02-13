import jwt from "jsonwebtoken";
import User from "../models/userModels.js";
import asyncHandler from "./asyncHandler.js";

const authenticate = asyncHandler (async (req, res, next) => {
    let token;

    token = res.cookie.jwt;
    if (token) {
        try{
            const decoded = jwt.verify (token, process.env.JWT_SECRET);
            req.user = await User.findById (decoded.userId).select("-password");
            next()

        }catch(error){
            throw new error ('not authorized, token failed')
        }
    }else{
        throw new error('no token provided, Please login');
    }
});

const authorizeAdmin = asyncHandler(async(req, res, next) => {
    try{
        if (req.user && req.user.isEmployer){
            next();
        }else{
            res.status(401).send('not authorized to access this route')
        }
    }catch(error){
        console.log(error.message)
    }
})

export {authenticate, authorizeAdmin};