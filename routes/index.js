var express = require('express');
var router = express.Router();
var fs = require('fs');

var Page = require('../lib/middleware/page');
var Entry = require('../lib/entry');
var entries = require('./entries');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '搜索csv文件' });
});



router.get('/list_file', function(req, res, next) {
  fs.readdir('./public/data/', function(err, files){
    if(err){
	  return console.error(err);
	}
	console.log(files);
	files.forEach(function(file){
	  console.log(file);
	});
	
	res.render('index', { title: '展示csv文件', filenames: files });
	
  });
  
});

router.get('/list_file_page', Page.getPage(Entry.count, 5), entries.list);

router.post('/visu_file', function(req, res){
  console.log(req.body.file_name);
  var des_file = '/data/' + req.body.file_name;
  console.log(des_file);
  res.render('line-chart', {title:'展示图', filename: des_file});

});

router.get('/visu_file', function(req, res){
  console.log(req.query.file_name);
  var des_file = '/data/' + req.query.file_name;
  console.log(des_file);
  res.render('line-chart', {title:'展示图', filename: des_file});

});

module.exports = router;
