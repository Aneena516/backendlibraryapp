const express = require('express');


const signupRouter = express.Router();
function route2(nav){
    signupRouter.get('/',function(req,res){
        res.render("signup",{
            nav
        
        })
    })
    return signupRouter;
}
module.exports = route2;