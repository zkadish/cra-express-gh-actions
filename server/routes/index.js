var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('/:', 'root path...');
  // res.render('index', { title: 'Express' });
  res.send('Root path "/"...');
});

module.exports = router;
