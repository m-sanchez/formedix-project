var fs = require('fs');
var http = require('http');
var path = require('path');
var url = require('url');
var chance = new (require('chance'));
var finalhandler = require('finalhandler');
var send = require('send');
var serveStatic = require('serve-static');

var servePublic = serveStatic('public', { index: ['index.html'] });

var maxImages = 6;
var images;
var codes = {};

getImageNames(function(files) {
  images = files;

  startServer();
});

function startServer() {
  http.createServer(function(req, res) {
    var done = finalhandler(req, res);
    var image = sendImage.bind(this, req, res, done);

    servePublic(req, res, image);
  }).listen(3000, '127.0.0.1');
}

function sendImage(req, res, cb) {
  var urlPath = url.parse(req.url).pathname;
  var pathSegment = urlPath.split('/');
  var error;

  if(pathSegment.length !== 4 || pathSegment[1] !== 'images') {
    // URL has too many path segments or it doesn't start "/images/"
    return cb();
  }

  var imagesIndicies = getImageIndiciesForCode(pathSegment[2]);

  // Get image index
  var lookupIndex = path.basename(pathSegment[3], '.jpg');

  if(parseInt(lookupIndex, 10) != lookupIndex) {
    return cb(generate404('Image index is not an integer: ' + lookupIndex));
  }

  if(lookupIndex >= maxImages) {
    return cb(generate404('Image index is out of bounds'));
  }

  var imageIndex = imagesIndicies[lookupIndex];

  if(imageIndex >= images.length) {
    return cb(generate404('Random fail'));
  }

  var imagePath = images[imageIndex];

  send(req, imagePath, { root: __dirname + '/images/' })
    .on('error', cb)
    .pipe(res);
}

function getImageIndiciesForCode(code){
  if(codes.hasOwnProperty(code)) {
    return codes[code];
  }

  var imageList = new Array(maxImages);

  for(var i=0; i<maxImages; i++){
    // Included are 10 images. +2 = total of 12
    // 5/6 chance of image, 1/6 chance of failure
    var imageIndex = chance.natural({ max: images.length + 1 });

    // Allow out of bounds picks but ignore duplicates
    if(imageIndex >= images.length || imageList.indexOf(imageIndex) === -1) {
      imageList[i] = imageIndex;
    }else {
      i--;
    }
  }

  codes[code] = imageList;

  return imageList;
}

function generate404(message){
  var error = new Error(message);
  delete error.stack;
  error.status = 404;
  return error;
}

function getImageNames(cb) {
  fs.readdir(__dirname + '/images', function(err, files) {
    if(err) {
      throw err;
    }

    cb(files);
  });
}
