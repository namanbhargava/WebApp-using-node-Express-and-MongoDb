var express = require('express');
var router = express.Router();
var feedbackData = require('../data/feedback.json');
var bodyParser = require('body-parser');
var urlencodedParser= bodyParser.urlencoded({extended:false});
var fs = require('fs');

router.get('/api', function(req,res){

res.json(feedbackData);

});

router.post('/api', urlencodedParser, function(req,res){

feedbackData.unshift(req.body);
  fs.writeFile('app/data/feedback.json', JSON.stringify(feedbackData), 'utf8', function(err){
    if(err) throw err;
  })
  res.json(feedbackData);

});

router.delete('/api/:id', function(req,res){

feedbackData.splice(req.params.id, 1);
  fs.writeFile('app/data/feedback.json', JSON.stringify(feedbackData), 'utf8', function(err){
    if(err) throw err;
  })
  res.json(feedbackData);
});

module.exports = router;
