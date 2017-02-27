var express = require("express");
var server = express();
var port = process.env.PORT || 8080;
var axios = require("axios");
var apiKey = require("./secrets").geocodeAPIKey;

server.get("/posts/:postId", function(request, response) {
  var url = `https://jsonplaceholder.typicode.com/posts/${request.params.postId}`;
  axios.get(url)
      .then(function(res){ // success
        return res.data;
      })
      .then(function(data){
        response.send(data);
      })
      .catch(function(error){ // failure
        console.log(error);
      });
});

server.get("/location/:address", function(request, response) {
  // 1600+Amphitheatre+Parkway,+Mountain+View,+CA
  var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${request.params.address}&key=${apiKey}`;
  axios.get(url)
      .then(function(res){ // success
        return res.data;
      })
      .then(function(data){
        response.send(data);
      })
      .catch(function(error){ // failure
        console.log(error);
      });
});

server.listen(port, function(){
  console.log("now listening on port ", port);
});
