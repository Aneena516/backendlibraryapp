const express = require('express');

const title = 'Authors';
const authorRouter = express.Router();
function route1(nav){
    var authors = [
        {
            title:'The God Of Small Things',
            author:'Arudhati Roy',
            genre:'Novel',
            img:'arundha.jpg'
        },
        {
            title:'Manjaveyil Marannagal',
            author:'Benny Benyamin',
            genre:'Novel',
            img:'benyamin.jpg'
        },
        {
            title:'Anubavagal Paalichakal',
            author:'Thakazhi',
            genre:'Novel',
            img:'thakazhi.jpg'
        }
    ]
    authorRouter.get('/',function(req,res){
        res.render("authors",{
            nav,
            title,
            authors
        });
    });
    return authorRouter;
}
module.exports = route1;