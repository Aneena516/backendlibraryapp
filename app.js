const express = require('express');
const app =  express();
const title ='LibraryApp';
const nav = [
    
    {link:'/',name:'HOME'},
    {link:'/signup',name:'SIGNUP'},
    {link:'/signin',name:'SIGNIN'},
    {link:'/books',name:'BOOK DETAILS'},
    {link:'/authors',name:'AUTHOR DETAILS'},
    {link:'/add',name:'ADD BOOKS'}
];
const booksRouter = require('./src/routes/bookroutes')(nav);
const authorRouter = require('./src/routes/authorroutes')(nav);
const signupRouter = require('./src/routes/signup')(nav)
const signinRouter = require('./src/routes/signin')(nav);

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/signup',signupRouter);
app.use('/signin',signinRouter);

app.get('/',function(req,res){

    res.render("index",{
        nav,
        title
    })
});


app.listen(5000);