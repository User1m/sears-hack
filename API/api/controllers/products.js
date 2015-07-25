var request = require("request");

module.exports = {
  getProducts: products
};


function products(req, res) {

  var apikey="HSVyp1jqaZ3kUZWAxqyVgGWgqRprT9N2";
  var keyword = req.swagger.params.keyword.value;

  request("http://api.developer.sears.com/v2.1/products/search/Sears/json/keyword/{keyword}?apikey="+apikey,
    function(error, response, body){
      if(error){
        res.send(error);
      }else{
        res.json(JSON.parse(body));
      }
    });

}
