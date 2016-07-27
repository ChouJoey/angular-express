var express = require('express');
var router = express.Router();//初始化路
var User = require('../models/User');


/* GET users listing. */
router.get('/', function(req, res) {
  res.send('我响应了一个你的GET');
});

router.post('/', function(req, res) {
  res.send('我响应了一个你的POST');
});

router.post('/addUser',function(req,res){
    var user = new User();
    user.insert(req.body,function(err,result){
        if(err){
            res.send('erro');
        }
        else{
        	res.send('ok');
        }
    });

});

module.exports = router;
