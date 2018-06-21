var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var urlencodedParser= bodyParser.urlencoded({extended:false});
mongoose.connect('mongodb://test:janardan2@ds263590.mlab.com:63590/todoappdb');

var todoSchema = new mongoose.Schema({
  item: String
})

var Todo = mongoose.model('Todo', todoSchema);

router.get('/', function(req,res){

Todo.find({},function(err,data){
  if (err) throw err;
  res.render('index', {todos:data});
})
});

router.post('/', urlencodedParser, function(req,res){

Todo(req.body).save(function(err,data){
  if (err) throw err;
  res.json(data);
})
});

router.delete('/:item', function(req,res){

Todo.find({item : req.params.item}).remove(function(err,data){
  if (err) throw err;
  res.json(data);
})
});

module.exports = router;
