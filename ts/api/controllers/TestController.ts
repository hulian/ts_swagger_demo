
import * as testService from "../../service/impl/TestServiceImpl";

class TestController{

    public sayHello(req,res){
        res.json(testService.printHello(req.query.name));
    }

}

var instance = new TestController();
export=instance;
