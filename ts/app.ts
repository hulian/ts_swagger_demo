import * as  SwaggerExpress  from "swagger-express-mw";
import * as Express from "express";

var app = Express();
module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

 
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);
 
});
