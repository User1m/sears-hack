(function () {
 'use strict';
   // this function is strict...

   var request = require("request");

   module.exports = {
    getUser: user,
    getUserList: getList,
    postList: postList,
    postUser: postUser
  };

  function user(req, res){

    var id = req.swagger.params.id.value;
    request("http://api.usergrid.com/user1m/sandbox/users?ql=id="+id, function(error, response, body){
      if(error){
        res.send(error);
      }else{
        res.json(JSON.parse(body));
      }
    });


  }

  function getList(req, res){

    var id = req.swagger.params.id.value;
    request("http://api.usergrid.com/user1m/sandbox/list?ql=accountid="+id, function(error, response, body){
      if(error){
        res.send(error);
      }else{
        res.json(JSON.parse(body));
      }
    });
  }

  function postList(req, res){
    var auuid = req.swagger.params.uuid.value;

    request.post("http://user1m-test.apigee.net/API/users/"+auuid+"/list/save",
      { //data
        form: JSON.stringify(req.body)
      },
      function(error, response, body){
        if(error){
          res.send(error);
        }else{
          res.send(body);
        }
      });
  }

  function postUser(req, res){

    request.post("http://user1m-test.apigee.net/API/users/save",
      { //data
        form: JSON.stringify(req.body)
      },
      function(error, response, body){
        if(error){
          res.send(error);
        }else{
          res.send(body);
        }
      });
  }


}());
