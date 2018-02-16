var express=require('express');
var app=express();
var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended: false}));
app.post('/form', function(req, res){
res.setHeader('Content-Type', 'text/plain');
  res.end(req.body.str.split('').reverse().join(''));
});
app.listen(process.argv[2]);