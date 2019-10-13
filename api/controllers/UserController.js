/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var Passwords = require('machinepack-passwords');
module.exports = {
  query: function (req, res) {
    var
      params = req.body,
      limit = -1,
      query = {},
      skip = 0
      ;
    query = {
      where: params.where
    };
    if (params.skip) {
      skip = params.skip;
      delete params.skip;
    }
    if (params.limit) {
      limit = params.limit;
      delete params.limit;
    }
    if (!params.where) {
      params = {
        where: params
      };
    }
    console.log("*******", params)
    User.find(params)
      .paginate(skip, limit)
      .exec(
        function (err, result) {
          if (err) {
            return res.badRequest(err);
          }
          return User.count(query)
            .then(function (count) {

              return res.ok({ status: 200, count: count, data: result });

            });
        });
  },
  descargar: (req, res) => {
    let html = String();
    let datos = String();
    let num = Number();
    res.setHeader('Content-disposition', 'attachment; filename=myfile.xls');
    res.setHeader('Content-Type', "text/xls");
    res.setHeader('dataType', 'xml')

    for (let row of req.body) {
      num++;
      datos+= `
      <tr>
        <th scope="row">${num}</th>
        <td>${row.cedula}</td>
        <td>${row.nombre}</td>
        <td>${row.apellido}</td>
        <td>${row.puesto}</td>
        <td>${row.comuna}</td>
        <td>${row.telefono}</td>
        <td>${row.updatedAt}</td>
      </tr>
      `;
    }
    html = `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
        </head>
        
        <body>
        
            <table class="table">
                <thead>
                    <tr>
                        <th style="padding:30px;">#</th>
                        <th style="padding:30px;">Cedula</th>
                        <th style="padding:30px;">nombre</th>
                        <th style="padding:30px;">Apellido</th>
                        <th style="padding:30px;">Puesto de Votacion</th>
                        <th style="padding:30px;">Comuna</th>
                        <th style="padding:30px;">Telefono</th>
                        <th style="padding:30px;">Creado</th>
                    </tr>
                </thead>
                <tbody>
                    ${datos}
                </tbody>
            </table>
        </body>
        
        </html>
      `;
      return res.ok(html)
      //return require('wkhtmltopdf')(html).pipe(res);


  }
};
