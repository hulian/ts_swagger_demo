"use strict";
var testService = require("../../service/impl/TestServiceImpl");
var TestController = /** @class */ (function () {
    function TestController() {
    }
    TestController.prototype.sayHello = function (req, res) {
        res.json(testService.printHello(req.query.name));
    };
    return TestController;
}());
var instance = new TestController();
module.exports = instance;
//# sourceMappingURL=/home/henry/Workspace/ts_swagger_demo/map/api/controllers/TestController.js.map