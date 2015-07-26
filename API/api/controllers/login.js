(function () {
 'use strict';
   // this function is strict...


   var request = require("request");

   module.exports = {
    getLogin: login
  };

  function login(req, res){

    var un = escape("\'"+req.swagger.params.username.value+"\'");
    var pw = req.swagger.params.password.value;
    request("http://api.usergrid.com/user1m/sandbox/users?ql=username="+un+"&password="+pw, function(error, response, body){
      if(error){
        res.send(error);
      }else{
        res.json(JSON.parse(body));
      }
    });
  }


}());
