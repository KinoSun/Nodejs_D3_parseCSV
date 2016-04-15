var fs = require('fs');

module.exports = Entry;

function Entry(obj){
  for(var key in obj){
    this[key] = obj[key];
  }
}

Entry.count = function(fn){
    var count = 0;
    fs.readdir('../public/data/', function(err, files){
    if(err){
	  return console.error(err);
	}
	console.log(files);
	count = files.length;
	console.log("count: " + count);
	fn(null, count);
    });
};

Entry.getRange = function(from, to, fn){

    var entries = [];
    fs.readdir('../public/data/', function(err, files){
    if(err){
	  return console.error(err);
	}
	for(var i = from - 1; i < to & i < files.length; i++){
	  entries.push(files[i]);
	}
	fn(null, entries);
    });
  
    

};