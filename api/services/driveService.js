var base64Img = require('base64-img');
module.exports = {
  getlist:function(req, opt){
    var
      params = req,
      data = [],
      Promise = Promise || require('bluebird')
    ;
    if (params) {
      var url = params.foto;
      base64Img.requestBase64(url, function(err, res, body) {
        // console.log(body);
        return Archivo.update({id: params.id},{
            id: params.id,
            foto64: body
          })
          .then(function(res){
            // console.log(res);
            return res;
          });
      });
      // if(opt){
      //   // sails.log.info(10,"params", params.infodrive);
      //   if(params.infodrive){
      //     data.push({
      //       name: params.infodrive.name,
      //       id: params.id,
      //       foto: params.foto
      //     });
      //   }
      // }else{
      //   if(params.infodrive1){
      //     data.push(
      //       {
      //         name: params.infodrive1.name,
      //         id: params.id,
      //         foto: params.foto
      //       },
      //       {
      //         name: params.infodrive2.name,
      //         id: params.id,
      //         foto2: params.foto2
      //       }
      //     );
      //   }
      // }
      // var
      //   {google} = require("googleapis"),
      //   drive = google.drive("v3"),
      //   key = require("../keys/drive.json"),
      //   path = require("path"),
      //   fs = require("fs")
      // ;
      // var jwToken = new google.auth.JWT(
      //   key.client_email,
      //   null,
      //   key.private_key, ["https://www.googleapis.com/auth/drive"],
      //   null
      // );
      // // console.log(57, "datos",data);
      // _.forEach(data, function(item){
      //   // console.log(item);
      //   jwToken.authorize((authErr) => {
      //     if (authErr) {
      //       // console.log("error : " + authErr);
      //       return false;
      //     } else {
      //       console.log("Authorization accorded");
      //       var
      //         parents = "1Ig5aUxK-blhKBZLtPK4fFUo9zGEbjl2o";
      //       drive.files.list({
      //         auth: jwToken,
      //         pageSize: 10,
      //         q: "'" + parents + "' in parents and name="+"'"+item.name+"'",
      //         fields: 'files(thumbnailLink,name,id)',
      //       }, (err, {
      //         data
      //       }) => {
      //         if (err) return console.log('The API returned an error: ' + err);
      //         var files = data.files;
      //         if (files) {
      //           // console.log('Files:', files[0].name);
      //           if(opt){
      //             var url = files[0].thumbnailLink;
      //             base64Img.requestBase64(url, function(err, res, body) {
      //               // console.log(body);
      //               return Archivo.update({id: item.id},{
      //                   id: item.id,
      //                   foto: files[0].thumbnailLink,
      //                   foto64: body
      //                 })
      //                 .then(function(res){
      //                   // console.log(res);
      //                   return res;
      //                 });
      //             });
      //           }else{
      //             var
      //               query ={
      //                 id: item.id,
      //               }
      //             ;
      //             if(item.foto){
      //               query.foto =files[0].thumbnailLink;
      //             }else{
      //               query.foto2=files[0].thumbnailLink;
      //             }
      //             return Articulo.update({id: item.id},query);
      //           }
      //         }
      //       });
      //     }
      //   });
      // })
      // ;
    }
  }
}
