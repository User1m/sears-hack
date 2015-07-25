(function () {
 'use strict';
   // this function is strict...

   var request = require("request");

   module.exports = {
    getUser: user,
    getUserList: list
  };

  function user(req, res){

    var id = req.swagger.params.id.value;
    request("http://api.usergrid.com/user1m/sandbox/users?ql=id="+id, function(error, response, body){
      if(error){
        res.send(error);
      }else{
        res.json(body);
      }
    });


  }

  function list(req, res){

    var id = req.swagger.params.id.value;
    request("http://api.usergrid.com/user1m/sandbox/list?ql=accountid="+id, function(error, response, body){
      if(error){
        res.send(error);
      }else{
        res.json(body);
      }
    });
  }


}());
