"use strict";
var TestServiceImpl = /** @class */ (function () {
    function TestServiceImpl() {
    }
    TestServiceImpl.prototype.printHello = function (name) {
        return "hello" + name;
    };
    return TestServiceImpl;
}());
var instance = new TestServiceImpl();
module.exports = instance;
//# sourceMappingURL=/home/henry/Workspace/ts_swagger_demo/map/service/impl/TestServiceImpl.js.map