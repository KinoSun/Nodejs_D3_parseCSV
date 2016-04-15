module.exports = Page;

function Page(obj){
  for(var key in obj){
    this[key] = obj[key];
  }
}

Page.getPage = function(fn, perpage){
  perpage = perpage || 10;
  return function(req, res, next){
    var page = Math.max(parseInt(req.query.page||'1', 10), 1);
	console.log("page.js: " + page);
	fn(function(err, total){
	  if(err) return next(err);
	  req.page = res.locals.page = {
	    number: page,
		perpage: perpage,
		from: (page-1) * perpage + 1,
		to: page * perpage,
		total: total,
		count: Math.ceil(total/perpage)
	  };
	  next();
	});
  
  };
  
};