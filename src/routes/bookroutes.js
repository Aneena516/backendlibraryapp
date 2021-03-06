const express = require('express');

const title = 'Books';
const booksRouter = express.Router();
function route(nav){
    var books = [
        {
            title:'The God Of Small Things',
            author:'Arudhati Roy',
            genre:'Novel',
            img:'god.jpg'
        },
        {
            title:'Manjaveyil Marannagal',
            author:'Benny Benyamin',
            genre:'Novel',
            img:'man.jpg'
        },
        {
            title:'Anubavagal Paalichakal',
            author:'Thakazhi',
            genre:'Novel',
            img:'anu.jpg'
        }
    ]
    
    booksRouter.get('/',function(req,res){
        res.render("books",{
            nav,
            title,
            books
        });
    });
    booksRouter.get('/:id',function(req,res){
      const id = req.params.id
      
        res.render("book",
        {
            nav,
            title,
        book:books[id]
        })
    })
    return booksRouter;
}
module.exports = route;