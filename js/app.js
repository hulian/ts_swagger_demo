"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SwaggerExpress = require("swagger-express-mw");
var Express = require("express");
var app = Express();
module.exports = app; // for testing
var config = {
    appRoot: __dirname // required config
};
SwaggerExpress.create(config, function (err, swaggerExpress) {
    if (err) {
        throw err;
    }
    //注册REST框架 
    swaggerExpress.register(app);
    var port = process.env.PORT || 10010;
    app.listen(port);
});
//# sourceMappingURL=app.js.map