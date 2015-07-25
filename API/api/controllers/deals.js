(function () {
 'use strict';
   // this function is strict...

   String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  };

  var apikey = "HSVyp1jqaZ3kUZWAxqyVgGWgqRprT9N2";

  var request = require("request");

  module.exports = {
    getDealsofCategory: deals
  };


  function deals(req, res){
    var category = req.swagger.params.category.value;
    var store = req.swagger.params.store.value || "Sears";

    var options ={
      "url":"http://api.developer.sears.com/v2.1/deals/fetchWeeklyDeals?store="+store+"&category=Sears_"+category.toProperCase()+"&apikey="+ apikey,
      "headers": {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    };

    request("http://api.developer.sears.com/v2.1/deals/fetchWeeklyDeals?store="+store+"&category=Sears_"+category.toProperCase()+"&apikey="+ apikey, function(error, response, body){
      if(error){
        res.send(error);
      }else{
        // console.log(body);
        res.send(JSON.parse(body));
      }
    });
  }

}());
