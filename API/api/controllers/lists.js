(function () {
 'use strict';
   // this function is strict...


   var request = require("request");

   module.exports = {
    getList: list
  };

  function list(req, res){

    var id = req.swagger.params.id.value;
    request("http://api.usergrid.com/user1m/sandbox/list?ql=uuid="+id, function(error, response, body){
      if(error){
        res.send(error);
      }else{
        res.json(JSON.parse(body));
      }
    });
  }


}());
