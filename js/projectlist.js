'updateEmailAddress' : function (cardinfor) {
  var info = JSON.parse(cardinfor);
  var user = JSON.parse(cardinfor);
  var uid = user.uid.uid;
  var id = info._id._id;

  getInformation(uid,function(data){
    var user = convertJson1(data);
    user.mail = user.preferredidentity;
    user.emailAddress = user.preferredidentity;
    var newmail = user.emailAddress;
    console.log(newmail);

    return mydb.atomic("main","email",id).then(function(data) {

      // console.log(data);
      return ({"status" : "200", "cardInfo":info});
    }, function(err) {
      // console.log(err);
      console.log("AddEmail:ERROR = start ");
      console.log(err);
      console.log("AddEmail:ERROR = end ");
      return ({"status" : "error"});
    });
  });
},

'AddEmail' : function (cardinfor) {
  var info = JSON.parse(cardinfor);
  console.log('============xxxxxxx_AddEmail================');


  getEmailAddressBySN(info,function(data){
    var result = convertJson(data);
    info.emailAddress = result.preferredidentity;

    return mydb.insert(info).then(function(data) {
// console.log(data);
      return ({"status" : "200", "cardInfo":info});
    }, function(err) {
// console.log(err);
      console.log("AddEmail:ERROR = start ");
      console.log(err);
      console.log("AddEmail:ERROR = end ");
      if (err.error == 'conflict') {
        console.log('-----conflict--------');
        return ({"status" : "conflict"});
      }

      return ({"status" : "error"});
    });
  });
},
