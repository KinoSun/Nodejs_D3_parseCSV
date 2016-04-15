
var Entry = require('../lib/entry');
//var Page = require('../lib/middleware/page');

exports.list = function(req, res, next) {
  //Page.getPage(Entry.count, 5);
  var page = req.page;
  console.log(page);
  Entry.getRange(page.from, page.to, function(err, entries){
    if(err) return next(err);
	console.log(entries);
	res.render('index', { title: '展示csv文件', filenames: entries });
  
  });
  
};