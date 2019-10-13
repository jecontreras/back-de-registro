var
  nodemailer = require('nodemailer')
;
module.exports = {
  send: function(req, res){
    var
      params = req,
      textmail = {}
    ;
    textmail = {
      from: 'Remitente',
      to: params.to,
      subject: params.subject,
      html: params.html
    }
    ;
    // sails.log.info(17, "mensajes", textmail);
    var
      transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'josepragrame123@gmail.com',
            pass: 'jose98090871986'
        }
    });
    // Enviamos el email
    transporter.sendMail(textmail, function(error, info){
        if (error){
            console.log(error);
            return error;
        } else {
          // console.log("send++++++++++++++++", info);
          return info;
        }
    });
  }
}
