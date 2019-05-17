const express=require('express');
const mongoose = require("mongoose");
const logger = require('morgan');
const app= expresss();
var port = process.env.PORT || 3001

if (process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
}
app.use(logger('dev'));
mongoose.connect(process.env.MONGODB_URI ||  "mongodb://localhost:27017/eth",{ useNewUrlParser: true })
mongoose.connection.once('open',function(){
    console.log('connection has been made')
}).on('error',function(err){
    console.log("connection error : \n",err)
})

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(port,function(){
    console.log('server listening on port : '+port)
})
