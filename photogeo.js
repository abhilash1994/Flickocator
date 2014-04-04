var Flickr = require('flickrapi')

var fs = require('fs');
var sys = require('sys');

 flickrOptions = {
 	API_key:"7dc103b03c0ef32c52111dc2a281aa58",
 	secret:"7cb3e40aac4cd09c"
 };

var flickr;

 Flickr.authenticate(flickrOptions, function(error, flickrObj) {
  // we can now use "flickr" as our API object,
  // but we can only call public methods and access public data
  flickr = flickrObj;
});
console.log("flickr.photos");
flickr.photos.geo.getLocation(flickrOptions.API_key,6869619554,
function(err,result){
	console.log('result');
});

/*flickr.photos.search({
  user_id: 43087304@N04,
  page: 1,
  per_page: 500
}, function(err, result) {
  //do something with the result
});*/