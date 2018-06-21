var express = require('express');
var router = express.Router();

router.get('/feedback', function(req,res){

res.render('feedbackView');

});

module.exports = router;
