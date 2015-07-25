(function () {
 'use strict';
   // this function is strict...


   var request = require("request");

   module.exports = {
    getDealsofCategory: deals
  };


  function deals(req, res){
    var apikey = "HSVyp1jqaZ3kUZWAxqyVgGWgqRprT9N2";
    var category = req.swagger.params.category.value;
    var store = req.swagger.params.store.value;

    var options ={
      "url":"http://api.developer.sears.com/v2.1/deals/fetchWeeklyDeals?store="+store+"&category=Sears_"+category+"&apikey="+ apikey,
      "headers": {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    };

    request("http://api.developer.sears.com/v2.1/deals/fetchWeeklyDeals?store="+store+"&category=Sears_"+category+"&apikey="+ apikey, function(error, response, body){
      if(error){
        res.send(error);
      }else{
        // console.log(body);
        res.send(JSON.parse(body));
      }
    });
  }

}());
