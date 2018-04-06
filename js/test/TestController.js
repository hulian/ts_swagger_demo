"use strict";
var log4j = require("log4js");
var TestController = /** @class */ (function () {
    function TestController() {
    }
    TestController.prototype.seyHello = function (name) {
        log4j.getLogger().info(name + "test");
    };
    return TestController;
}());
var instance = new TestController();
module.exports = instance;
//# sourceMappingURL=TestController.js.map