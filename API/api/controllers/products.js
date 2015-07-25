(function () {
 'use strict';
   // this function is strict...


   var request = require("request");

   module.exports = {
    getProducts: products
  };


  function products(req, res) {

    var apikey="HSVyp1jqaZ3kUZWAxqyVgGWgqRprT9N2";
    var keyword = req.swagger.params.keyword.value;

    var options ={
      "url":"http://api.developer.sears.com/v2.1/products/search/Sears/json/keyword/"+keyword+"?apikey="+apikey,
      "headers": {
        "Content-Type": "application/json"
      }
    };


    request( options,
      function(error, response, body){
        if(error){
          res.send(error);
        }else{
          res.json(JSON.parse(body));
        }
      });

  }

}());
