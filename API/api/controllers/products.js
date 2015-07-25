(function () {
 'use strict';
   // this function is strict...
   var apikey="HSVyp1jqaZ3kUZWAxqyVgGWgqRprT9N2";


   var request = require("request");

   module.exports = {
    getProducts: products,
    getProduct: product
  };


  function products(req, res) {

    var keyword = req.swagger.params.keyword.value;
    var store = req.swagger.params.store.value || "Sears";

    var options ={
      "url":"http://api.developer.sears.com/v2.1/products/search/"+store+"/json/keyword/"+keyword+"?apikey="+apikey,
      "headers": {
        "Content-Type": "application/json"
      }
    };

    // console.log(options.url);

    request.get( options,
      function(error, response, body){
        if(error){
          res.send(error);
        }else{
          // console.log(body);
          res.json(JSON.parse(body));
        }
      });
  }


  function product(req, res){

    var partnum = req.swagger.params.partnum.value;
    var store = req.swagger.params.store.value || "Sears";
    request("http://api.developer.sears.com/v3/productDetail/getProduct/"+store+"/json/"+partnum+"?apikey="+apikey, function(error, response, body){

      if(error){
        res.send(error);
      }else{
        res.json(JSON.parse(body));
      }

    });


  }

}());
